import styles from "./form.module.css";
import { Box } from "@mui/material";
import { Button } from "../button";
import { TextFieldEstilized } from "../textFieldEstilized";
import { BsSend } from "react-icons/bs";
import { useFormModal } from "@/hooks/useFormModal";

const INITIAL_STATE = {
  nome: "",
  email: "",
  mensagem: "",
};

export const FormularioContato = () => {
  const { formData, handleChange, getPayload } = useFormModal(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    getPayload();
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

      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}
      >
        <Button className="secondary" type="submit">
          Enviar Carta <BsSend size={25} />
        </Button>
      </Box>
    </Box>
  );
};
