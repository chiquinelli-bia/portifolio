import emailjs from "@emailjs/browser";
import { IContact } from "../../domain/entities/IContact";

export class EmailService {
  static async sendContactEmail(contactData: IContact): Promise<void> {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.warn(
        "Credenciais do EmailJS não estão configuradas no .env.local",
      );
      return;
    }

    const templateParams = {
      from_name: contactData.nome,
      from_email: contactData.email,
      subject: "Nova mensagem do Portfólio",
      message: contactData.mensagem,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
    } catch (error) {
      console.error("Erro ao enviar e-mail via EmailJS:", error);
      throw new Error("Não foi possível enviar o e-mail de contato.");
    }
  }
}
