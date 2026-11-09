import styles from "./form.module.css";
import { useFormModal } from "../../hooks/useFormModal";

import { Button } from "../button";
import { Box } from "@mui/material";
import { Tag } from "../tag";
import { TextFieldEstilized } from "../textFieldEstilized";
import { Checkbox } from "../checkBox";
import { RatingMedals } from "../ratingMedals";
import { FirestoreFeedbackRepository } from "../../infra/config/firebaseFeedbackRepository";
import { SubmitFeedbackUseCase } from "../../application/submitFeedbackUseCase";

const feedbackRepository = new FirestoreFeedbackRepository();
const submitFeedbackUseCase = new SubmitFeedbackUseCase(feedbackRepository);

export const FormularioFeedback = () => {
  const {
    formData,
    rating,
    setRating,
    hasToggle,
    handleChange,
    handleToggleChange,
    handleReset,
    submitForm,
    loading,
    feedbackMsg,
  } = useFormModal({ comentario: "", nome: "", contato: "" }, [
    "nome",
    "contato",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(
      submitFeedbackUseCase,
      "Feedback enviado com sucesso! Obrigado!",
    );
  };

  return (
    <Box
      component="form"
      className={styles.containerForm}
      onSubmit={handleSubmit}
      style={{ color: "var(--color-grays-scale-0)" }}
    >
      <RatingMedals value={rating} onChange={setRating} />

      <TextFieldEstilized
        multiline
        rows={8}
        variantType="customTextArea"
        label="Comentário"
        placeholder="Compartilhe sua percepção ou sugestões de melhoria."
        value={formData.comentario}
        onChange={handleChange("comentario")}
        data="yellow"
      />

      <Checkbox
        label="Autoriza publicar seu comentário? (opcional)"
        checked={hasToggle}
        onChange={handleToggleChange}
      />

      {hasToggle && (
        <>
          <TextFieldEstilized
            data="yellow"
            label="Seu nome"
            placeholder="Seu comentário só será exibido com sua autorização."
            value={formData.nome}
            onChange={handleChange("nome")}
            variantType="customInput"
          />

          <TextFieldEstilized
            data="yellow"
            type="text"
            label="LinkedIn ou e-mail"
            placeholder="Perfil no LinkedIn ou e-mail para contato"
            value={formData.contato}
            onChange={handleChange("contato")}
            variantType="customInput"
          />
        </>
      )}

      {feedbackMsg.text && (
        <p style={{ color: feedbackMsg.isError ? "red" : "green" }}>
          {feedbackMsg.text}
        </p>
      )}

      <Box className={styles.containerActions}>
        <Button type="submit" className="secondary" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Avaliação"}
        </Button>
        <Tag onClick={handleReset} className="secondary">
          Cancelar
        </Tag>
      </Box>
    </Box>
  );
};
