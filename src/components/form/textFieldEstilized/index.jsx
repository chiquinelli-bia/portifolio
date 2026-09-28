import { TextField } from "@mui/material";
import styles from "./textField.module.css";

export const TextFieldEstilized = ({
  label,
  placeholder,
  value,
  onChange,
  variantType = "customInput",
  required = true,
  className = "",
  ...rest
}) => {
  return (
    <TextField
      fullWidth
      variant="filled"
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${styles.customTextField} ${styles[variantType]} ${className}`.trim()}
      {...rest}
    />
  );
};
