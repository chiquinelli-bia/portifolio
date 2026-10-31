import { useState } from "react";
import styles from "./ratingMedals.module.css";
import { medalha } from "../../assets";

export function RatingMedals({
  name = "rating",
  totalMedals = 5,
  value = 0,
  onChange,
  legendText = "Como você descreveria sua experiência?",
}) {
  const [hoverRating, setHoverRating] = useState(0);

  const handleSelect = (selectedValue) => {
    if (!onChange) return;
    const newValue = value === selectedValue ? 0 : selectedValue;
    onChange(newValue);
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legendText}</legend>

      <div
        className={styles.medalsGroup}
        onMouseLeave={() => setHoverRating(0)}
      >
        {Array.from({ length: totalMedals }, (_, index) => {
          const medalValue = index + 1;
          const isFilled = medalValue <= (hoverRating || value);

          return (
            <label
              key={medalValue}
              className={styles.medalLabel}
              style={{ "--index": index }}
              onMouseEnter={() => setHoverRating(medalValue)}
            >
              <input
                type="radio"
                name={name}
                value={medalValue}
                checked={value === medalValue}
                onChange={() => handleSelect(medalValue)}
                onClick={() => {
                  if (value === medalValue) {
                    handleSelect(medalValue);
                  }
                }}
                className={styles.radioInput}
                aria-label={`${medalValue} de ${totalMedals} medalhas`}
              />
              <img
                src={medalha}
                alt=""
                className={`${styles.medalImage} ${isFilled ? styles.filled : ""}`}
              />
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
