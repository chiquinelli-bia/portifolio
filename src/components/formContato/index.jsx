import styles from "./form.module.css";
import { Box } from "@mui/material";
import { Button } from "../button";
import { TextFieldEstilized } from "../textFieldEstilized";
import { BsSend } from "react-icons/bs";
import { useFormModal } from "@/hooks/useFormModal";
import { FirestoreContactRepository } from "../../infra/config/firestoreContactRepository";
import { SubmitContactUseCase } from "../../application/submitContactUseCase";

const contactRepository = new FirestoreContactRepository();
const submitContactUseCase = new SubmitContactUseCase(contactRepository);

export const FormularioContato = () => {
  const { formData, handleChange, submitForm, loading, feedbackMsg } =
    useFormModal({ nome: "", email: "", mensagem: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(
      submitContactUseCase,
      null,
      "mensagem enviada com sucesso! Obrigado!",
    );
  };

  return (
    <Box
      component="form"
      className={styles.containerForm}
      onSubmit={handleSubmit}
    >
      <TextFieldEstilized
        label="Nome"
        placeholder="Nome do remetente"
        value={formData.nome}
        onChange={handleChange("nome")}
        variantType="customInput"
        data="yellow"
      />

      <TextFieldEstilized
        type="email"
        label="E-mail"
        placeholder="E-mail do remetente"
        value={formData.email}
        onChange={handleChange("email")}
        variantType="customInput"
        data="yellow"
      />

      <TextFieldEstilized
        multiline
        rows={8}
        label="Escreva sua carta"
        placeholder="Escreva sua carta"
        value={formData.mensagem}
        onChange={handleChange("mensagem")}
        variantType="customTextArea"
        data="yellow"
      />
      {feedbackMsg.text && (
        <p style={{ color: feedbackMsg.isError ? "red" : "green" }}>
          {feedbackMsg.text}
        </p>
      )}
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}
      >
        <Button className="secondary" type="submit" disabled={loading}>
          {loading ? "Enviando Carta..." : "Enviar Carta"} <BsSend size={25} />
        </Button>
      </Box>
    </Box>
  );
};
