import styles from "./form.module.css";
import { Box } from "@mui/material";
import { Button } from "../button";
import { TextFieldEstilized } from "../textFieldEstilized";
import { Tag } from "../tag";
import { Checkbox } from "../checkBox";
import { useFormModal } from "../../hooks/useFormModal";
import { RatingMedals } from "../ratingMedals";

const INITIAL_STATE = {
  comentario: "",
  nome: "",
  contato: "",
};

// Campos que devem ser limpos caso a autorização seja desmarcada
const CONDITIONAL_FIELDS = ["nome", "contato"];

export const FormularioFeedback = () => {
  const {
    formData,
    hasToggle: autorizaPublicacao,
    rating,
    setRating,
    handleChange,
    handleToggleChange,
    handleReset,
    getPayload,
  } = useFormModal(INITIAL_STATE, CONDITIONAL_FIELDS);
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = getPayload();

    console.log("Dados do feedback:", payload);
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
        checked={autorizaPublicacao}
        onChange={handleToggleChange}
      />

      {autorizaPublicacao && (
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

      <Box className={styles.containerActions}>
        <Button type="submit" className="secondary">
          Enviar Relato
        </Button>
        <Tag onClick={handleReset} className="secondary">
          Cancelar
        </Tag>
      </Box>
    </Box>
  );
};
