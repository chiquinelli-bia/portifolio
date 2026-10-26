import styles from "./form.module.css";
import { Box } from "@mui/material";
import { Button } from "../button";
import { TextFieldEstilized } from "../textFieldEstilized";
import { Tag } from "../tag";
import { Checkbox } from "../checkBox";
import { useFormModal } from "../../hooks/useFormModal";

const INITIAL_STATE = {
  problema: "",
  onde: "",
  email: "",
};

const CONDITIONAL_FIELDS = ["email"];

export const FormularioReport = () => {
  const {
    formData,
    hasToggle: desejaRetorno,
    handleChange,
    handleToggleChange,
    handleReset,
    getPayload,
  } = useFormModal(INITIAL_STATE, CONDITIONAL_FIELDS);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = getPayload();
    console.log("Dados do report:", payload);
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

      <Box className={styles.containerActions}>
        <Button type="submit">Enviar Relato</Button>
        <Tag onClick={handleReset}>Cancelar</Tag>
      </Box>
    </Box>
  );
};
