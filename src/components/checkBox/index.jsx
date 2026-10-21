import { useId } from "react";
import styles from "./checkbox.module.css";

export function Checkbox({
  checked = false,
  onChange,
  label,
  id,
  disabled = false,
  className = "",
  ...props
}) {
  const generatedId = useId();
  const checkboxId = id || generatedId;

  return (
    <label
      htmlFor={checkboxId}
      className={`${styles.container}  ${disabled ? styles.disabled : ""} ${className}`}
    >
      <input
        type="checkbox"
        id={checkboxId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className={styles.hiddenInput}
        {...props}
      />
      <span className={styles.customCheckbox} aria-hidden="true">
        <svg
          className={styles.checkmark}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
