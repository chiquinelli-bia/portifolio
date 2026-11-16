import { useRef, useState } from "react";
import { SearchOrnament } from "./searchOrnament";
import styles from "./search.module.css";
import { VscSearchSparkle } from "react-icons/vsc";

export function Search({
  value = "",
  onChange,
  placeholder = "Explore meus projetos...",
  label = "Buscar projetos no portfólio",
}) {
  const inputRef = useRef(null);
  const [isKeyboardFocus, setIsKeyboardFocus] = useState(false);
  const pointerDownRef = useRef(false);

  const handleInputChange = (e) => {
    onChange?.(e.target.value);
  };

  const handleClear = () => {
    onChange?.("");
    inputRef.current?.focus();
    setIsKeyboardFocus(isKeyboardFocus);
  };

  return (
    <div
      role="search"
      className={`${styles.wrapper} ${isKeyboardFocus ? styles.keyboardFocus : ""}`}
      onPointerDown={() => {
        pointerDownRef.current = true;
        setIsKeyboardFocus(false);
      }}
      onFocus={() => {
        // Só ativa o estilo de teclado se o foco NÃO veio de um clique/toque
        if (!pointerDownRef.current) {
          setIsKeyboardFocus(true);
        }
        pointerDownRef.current = false;
      }}
      onBlur={() => {
        setIsKeyboardFocus(false);
      }}
    >
      <label htmlFor="project-search-input" className={styles.srOnly}>
        {label}
      </label>

      <div className={styles.topSection}>
        <button
          type="button"
          onClick={() => inputRef.current?.focus()}
          className={styles.searchBadge}
          aria-label="Focar no campo de busca"
        >
          <VscSearchSparkle aria-hidden="true" />
        </button>

        <SearchOrnament />
      </div>

      <div className={styles.inputContainer}>
        <input
          ref={inputRef}
          id="project-search-input"
          type="search"
          value={value}
          onChange={handleInputChange}
          placeholder={placeholder}
          className={styles.input}
          autoComplete="off"
        />

        {value.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.clearButton}
            aria-label="Limpar busca"
          >
            <span aria-hidden="true">✕</span>
          </button>
        )}
      </div>

      {/* Linha Ornamentada Invertida  */}
      <SearchOrnament inverted />
    </div>
  );
}
