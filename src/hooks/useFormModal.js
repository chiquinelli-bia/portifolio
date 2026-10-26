import { useState } from "react";

/**
 * Hook para gerenciar estado e exibição condicional em formulários modais.
 * @param {Object} initialState - Estado inicial dos campos do formulário.
 * @param {string|string[]} toggleFields - Campo(s) que dependem da autorização/toggle.
 */
export const useFormModal = (initialState, toggleFields = []) => {
  const [hasToggle, setHasToggle] = useState(false);
  const [formData, setFormData] = useState(initialState);

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
  };

  const getPayload = () => {
    let payload = formData;

    if (!hasToggle) {
      const fieldsToReset = Array.isArray(toggleFields)
        ? toggleFields
        : [toggleFields];

      payload = { ...formData };
      fieldsToReset.forEach((field) => {
        if (field in payload) payload[field] = "";
      });
    }

    handleReset();
    return payload;
  };

  return {
    formData,
    hasToggle,
    handleChange,
    handleToggleChange,
    handleReset,
    getPayload,
  };
};
