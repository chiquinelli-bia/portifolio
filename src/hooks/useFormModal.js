import { useState } from "react";

/**
 * Hook para gerenciar estado, exibição condicional e submissão de formulários modais.
 * @param {Object} initialState Estado inicial dos campos do formulário.
 * @param {string|string[]} toggleFields Campo(s) que dependem da autorização/toggle.
 */
export const useFormModal = (initialState, toggleFields = []) => {
  const [hasToggle, setHasToggle] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState({ text: "", isError: false });

  const handleChange = (field) => (event) => {
    const { value } = event.target;
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleToggleChange = (e) => {
    const checked = e.target.checked;
    setHasToggle(checked);

    if (!checked) {
      setFormData((prev) => {
        const updated = { ...prev };
        const fieldsToReset = Array.isArray(toggleFields)
          ? toggleFields
          : [toggleFields];

        fieldsToReset.forEach((field) => {
          if (field in updated) updated[field] = "";
        });

        return updated;
      });
    }
  };

  const handleReset = () => {
    setFormData(initialState);
    setHasToggle(false);
    setRating(0);
    setFeedbackMsg({ text: "", isError: false });
  };

  /**
   * Monta o payload limpo com base nos campos e toggles ativos.
   */
  const getPayload = () => {
    const payload = { ...formData, autorizaPublicacao: hasToggle };

    if (rating > 0) {
      payload.rating = rating;
    }

    if (!hasToggle) {
      const fieldsToReset = Array.isArray(toggleFields)
        ? toggleFields
        : [toggleFields];
      fieldsToReset.forEach((field) => {
        if (field in payload) payload[field] = "";
      });
    }

    return payload;
  };

  /**
   * Executa a submissão via Use Case injetado, controlando loading, erros e resets.
   * @param {Object} useCase Instância do caso de uso (deve conter o método execute).
   * @param {string} successMessage Mensagem exibida em caso de sucesso.
   */
  const submitForm = async (
    useCase,
    successMessage = "Enviado com sucesso!",
  ) => {
    setLoading(true);
    setFeedbackMsg({ text: "", isError: false });

    try {
      const payload = getPayload();
      await useCase.execute(payload);

      setFeedbackMsg({ text: successMessage, isError: false });

      // Reseta os inputs do formulário mantendo a mensagem de sucesso
      setFormData(initialState);
      setHasToggle(false);
      setRating(0);
    } catch (error) {
      setFeedbackMsg({
        text: error.message || "Ocorreu um erro ao enviar. Tente novamente.",
        isError: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    formData,
    hasToggle,
    rating,
    setRating,
    handleChange,
    handleToggleChange,
    handleReset,
    getPayload,
    submitForm,
    loading,
    feedbackMsg,
  };
};
