import { IBugReport } from "../../domain/entities/IBugReport";
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
  static async sendBugReportNotification(
    bugData: IBugReport,
    webhookUrl: string,
  ): Promise<void> {
    if (!webhookUrl) {
      console.warn("URL do Webhook do Discord para bugs não foi fornecida.");
      return;
    }

    // Cor em formato decimal (15158332 é o equivalente ao vermelho de emergência #e74c3c)
    const RED_COLOR = 15158332;

    const payload = {
      embeds: [
        {
          title: "🚨 Alerta de Bug Reportado!",
          description: bugData.problema || "Nenhuma descrição fornecida.",
          color: RED_COLOR,
          fields: [
            {
              name: "Onde ocorreu",
              value: bugData.onde || "Não informado",
              inline: true,
            },
            {
              name: "Deseja retorno?",
              value: bugData.desejaRetorno ? "Sim" : "Não",
              inline: true,
            },
            {
              name: "E-mail de Contato",
              value: bugData.email || "Não informado",
              inline: true,
            },
            {
              name: "URL da Página",
              value: bugData.pageUrl || "Desconhecida",
              inline: false,
            },
            {
              name: "Navegador / User Agent",
              value: bugData.userAgent || "Desconhecido",
              inline: false,
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
      console.error("Erro ao enviar notificação de bug para o Discord:", error);
    }
  }
}
