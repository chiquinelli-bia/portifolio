import { useState } from "react";
import styles from "./form.module.css";
import { Box } from "@mui/material";
import { TextFieldEstilized } from "./textFieldEstilized";

export const FormularioContato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (field) => (event) => {
    setFormData({ ...formData, [field]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", formData);
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
      />

      <TextFieldEstilized
        type="email"
        label="E-mail"
        placeholder="E-mail do remetente"
        value={formData.email}
        onChange={handleChange("email")}
        variantType="customInput"
      />

      <TextFieldEstilized
        multiline
        rows={6}
        label="Escreva sua carta"
        placeholder="Escreva sua carta"
        value={formData.mensagem}
        onChange={handleChange("mensagem")}
        variantType="customTextArea"
      />

      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "8px" }}
      >
        {/* <Button type="submit" variant="contained">
          Enviar
        </Button> */}
      </Box>
    </Box>
  );
};
