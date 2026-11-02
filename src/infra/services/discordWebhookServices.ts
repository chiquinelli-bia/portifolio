import { IFeedback } from "../../domain/entities/IFeedback";

export class DiscordWebhookService {
  static async sendFeedbackNotification(
    feedbackData: IFeedback,
    webhookUrl: string,
  ): Promise<void> {
    if (!webhookUrl) {
      console.warn("URL do Webhook do Discord não foi fornecida.");
      return;
    }

    const BLUE_COLOR = 3447003;

    const payload = {
      embeds: [
        {
          title: "🌟 Novo Feedback Recebido!",
          description: feedbackData.comentario || "Sem comentário por escrito.",
          color: BLUE_COLOR,
          fields: [
            {
              name: "Avaliação",
              value: `${feedbackData.rating} medalha(s)`,
              inline: true,
            },
            {
              name: "Autoriza Publicação?",
              value: feedbackData.autorizaPublicacao ? "Sim" : "Não",
              inline: true,
            },
            {
              name: "Nome",
              value: feedbackData.nome || "Anónimo",
              inline: true,
            },
            {
              name: "Contato",
              value: feedbackData.contato || "Não informado",
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(),
        },
      ],
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch (error) {
      console.error("Erro ao enviar notificação para o Discord:", error);
    }
  }
}
