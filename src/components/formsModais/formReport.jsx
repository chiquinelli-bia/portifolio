import styles from "./form.module.css";
import { Box } from "@mui/material";
import { Button } from "../button";
import { TextFieldEstilized } from "../textFieldEstilized";
import { Tag } from "../tag";
import { Checkbox } from "../checkBox";
import { useFormModal } from "../../hooks/useFormModal";
import { SubmitBugReportUseCase } from "../../application/submitBugReportUseCase";
import { FirestoreBugReporRepository } from "../../infra/config/firestoreBugReportRepository";

const reportRepository = new FirestoreBugReporRepository();
const submitReportUseCase = new SubmitBugReportUseCase(reportRepository);

export const FormularioReport = () => {
  const {
    formData,
    hasToggle: desejaRetorno,
    handleChange,
    handleToggleChange,
    handleReset,
    submitForm,
    loading,
    feedbackMsg,
  } = useFormModal(
    { problema: "", onde: "", email: "" }, // Adicionado email no estado inicial
    ["email"],
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(
      submitReportUseCase,
      "desejaRetorno",
      "Relato de bug enviado com sucesso! Vamos analisar o problema.",
    );
  };

  return (
    <Box
      component="form"
      className={styles.containerForm}
      onSubmit={handleSubmit}
    >
      <TextFieldEstilized
        multiline
        rows={8}
        variantType="customTextArea"
        label="Descreva o ocorrido"
        placeholder="O que aconteceu? O que você esperava fazer?"
        value={formData.problema}
        onChange={handleChange("problema")}
      />

      <TextFieldEstilized
        label="Onde isso ocorreu?"
        placeholder="ex: página de contato ou botão clicado"
        value={formData.onde}
        onChange={handleChange("onde")}
        variantType="customInput"
      />

      <Checkbox
        label="Desejo receber um retorno"
        checked={desejaRetorno}
        onChange={handleToggleChange}
      />

      {desejaRetorno && (
        <TextFieldEstilized
          type="email"
          label="E-mail Para Retorno"
          placeholder="E-mail para retorno"
          value={formData.email}
          onChange={handleChange("email")}
          variantType="customInput"
        />
      )}
      {feedbackMsg.text && (
        <p style={{ color: feedbackMsg.isError ? "red" : "green" }}>
          {feedbackMsg.text}
        </p>
      )}
      <Box className={styles.containerActions}>
        <Button type="submit">
          {loading ? "Enviando relato..." : "Enviar Relato"}
        </Button>
        <Tag onClick={handleReset}>Cancelar</Tag>
      </Box>
    </Box>
  );
};
