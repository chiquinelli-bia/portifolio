import { IFeedback } from "../domain/entities/IFeedback";
import { FirestoreFeedbackRepository } from "../infra/config/firebaseFeedbackRepository";
import { DiscordWebhookService } from "../infra/services/discordWebhookServices";

export class SubmitFeedbackUseCase {
  constructor(private feedbackRepository: FirestoreFeedbackRepository) {}

  async execute(payload: IFeedback): Promise<void> {
    const hasRating = payload.rating > 0;
    const hasComment =
      payload.comentario && payload.comentario.trim().length > 0;

    if (!hasRating && !hasComment) {
      throw new Error(
        "Por favor, selecione uma nota por medalhas ou escreva um comentário para enviar seu feedback.",
      );
    }

    await this.feedbackRepository.save(payload);

    await DiscordWebhookService.sendFeedbackNotification(
      payload,
      import.meta.env.VITE_DISCORD_WEBHOOK_FEEDBACK,
    );
  }
}
