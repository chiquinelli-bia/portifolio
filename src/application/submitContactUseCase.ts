import { IContact } from "../domain/entities/IContact";
import { FirestoreContactRepository } from "../infra/config/firestoreContactRepository";
import { DiscordWebhookService } from "../infra/services/discordWebhookServices";
import { EmailService } from "../infra/services/emailService";

export class SubmitContactUseCase {
  constructor(private contactRepository: FirestoreContactRepository) {}

  async execute(payload: IContact): Promise<void> {
    const hasName = payload.nome && payload.nome.trim().length > 0;
    const hasEmail = payload.email && payload.email.trim().length > 0;
    const hasMessage = payload.mensagem && payload.mensagem.trim().length > 0;

    if (!hasName || !hasEmail || !hasMessage) {
      throw new Error(
        "Por favor, preencha nome, e-mail e a mensagem para enviar o contato.",
      );
    }

    await this.contactRepository.save(payload);

    await DiscordWebhookService.sendContactNotification(
      payload,
      import.meta.env.VITE_DISCORD_WEBHOOK_CONTACT,
    );

    await EmailService.sendContactEmail(payload);
  }
}
