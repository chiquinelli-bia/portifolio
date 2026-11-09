import { IBugReport } from "../domain/entities/IBugReport";
import { FirestoreBugReporRepository } from "../infra/config/firestoreBugReportRepository";
import { DiscordWebhookService } from "../infra/services/discordWebhookServices";

export class SubmitBugReportUseCase {
  constructor(private bugReportRepository: FirestoreBugReporRepository) {}

  async execute(payload: IBugReport): Promise<void> {
    const hasProblemText =
      payload.problema && payload.problema.trim().length > 0;
    const hasLocationText = payload.onde && payload.onde.trim().length > 0;

    if (!hasProblemText || !hasLocationText) {
      throw new Error(
        "Por favor, descreva o problema e informe onde ele ocorreu.",
      );
    }

    if (
      payload.desejaRetorno &&
      (!payload.email || payload.email.trim().length === 0)
    ) {
      throw new Error(
        "Informe o seu e-mail para que possamos dar retorno sobre o problema.",
      );
    }

    const enrichedPayload: IBugReport = {
      ...payload,
      status: "open",
      pageUrl: typeof window !== "undefined" ? window.location.href : "N/A",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "N/A",
    };

    await this.bugReportRepository.save(enrichedPayload);

    await DiscordWebhookService.sendBugReportNotification(
      enrichedPayload,
      import.meta.env.VITE_DISCORD_WEBHOOK_BUG,
    );
  }
}
