import styles from "./progressBar.module.css";
import { useId } from "react";

export function ProgressBar({ percentage = 0 }) {
  const gradientId = useId().replace(/:/g, "");
  const barFilterId = useId().replace(/:/g, "");
  const sparkleFilterId = useId().replace(/:/g, "");
  const radialGradientId = useId().replace(/:/g, "");

  const progress = Math.max(0, Math.min(100, Number(percentage) || 0));
  const progressOffset = progress / 100;

  // Largura da transição suave: 4% da barra
  const fadeWidth = 0.04;
  const fadeStart = Math.max(0, progressOffset - fadeWidth);
  const fadeEnd = Math.min(1, progressOffset + fadeWidth);

  // Posição do sparkle: barra vai de x=5 a x=105 (100px úteis)
  const sparkleX = 5 + progressOffset * 100;

  return (
    <svg
      viewBox="0 0 110 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.progressBar}
    >
      {/* Barra de progresso */}
      <g filter={`url(#${barFilterId})`}>
        <path
          d="M5 10C6.66667 10.0455 8.33333 10.0908 10 10.1359C23.5955 10.5038 37.191 10.8611 50.7865 11.25C52.191 11.2902 53.5955 11.5 55 11.5C55 11.5 55 11.5 55 11.5C56.4045 11.5 57.809 11.3341 59.2135 11.2929C72.809 10.8947 86.4045 10.522 100 10.1407C101.667 10.0939 103.333 10.0471 105 10C103.333 9.95294 101.667 9.90606 100 9.85932C86.4045 9.47802 72.809 9.10526 59.2135 8.70708C57.809 8.66594 56.4045 8.5 55 8.5C53.5955 8.5 52.191 8.70983 50.7865 8.75C37.191 9.13886 23.5955 9.4962 10 9.86413C8.33333 9.90923 6.66667 9.9545 5 10Z"
          fill={`url(#${gradientId})`}
        />
      </g>

      {/* Sparkle */}
      <g
        filter={`url(#${sparkleFilterId})`}
        transform={`translate(${sparkleX - 7}, 0)`}
      >
        <path
          d="M7 3C7 3 7.4092 5.56671 8 6.5C8.5908 7.43329 10 8.5 10 8.5C10 8.5 8.59302 9.56812 8 10.5C7.40698 11.4319 7 13.5 7 13.5L6 10.5L4 8.5L6 6.5L7 3Z"
          fill="#F8E6A8"
        />
        <path
          d="M6.92871 5.06543C6.98692 5.28414 7.05042 5.50441 7.11914 5.71484C7.2442 6.09776 7.39561 6.48078 7.57715 6.76758C7.91123 7.29534 8.45492 7.83324 8.88672 8.22168C8.99968 8.3233 9.10805 8.4169 9.20605 8.5C9.10813 8.58317 9.00061 8.67761 8.8877 8.7793C8.45623 9.16787 7.91306 9.70514 7.57812 10.2314C7.31951 10.6378 7.10427 11.2061 6.93848 11.7334L6.47461 10.3418L6.4375 10.2295L6.35352 10.1465L4.70703 8.5L6.44531 6.76172L6.48047 6.6377L6.92871 5.06543Z"
          stroke={`url(#${radialGradientId})`}
        />
      </g>

      <defs>
        {/* Filtro e gradiente da barra */}
        <filter
          id={barFilterId}
          x="0"
          y="3.5"
          width="110"
          height="13"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.776471 0 0 0 0 0.654902 0 0 0 0 0.286275 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1218_2578"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1218_2578"
            result="shape"
          />
        </filter>

        <linearGradient
          id={gradientId}
          x1="5"
          y1="10.5"
          x2="105"
          y2="10.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F8E6A8" />
          <stop offset={`${fadeStart * 100}%`} stopColor="#F8E6A8" />
          <stop offset={`${fadeEnd * 100}%`} stopColor="#C6A749" />
          <stop offset="100%" stopColor="#C6A749" />
        </linearGradient>

        {/* Filtro e gradiente do sparkle */}
        <filter
          id={sparkleFilterId}
          x="0"
          y="0"
          width="14"
          height="18.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.929412 0 0 0 0 0.8 0 0 0 0 0.431373 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1218_2580"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1218_2580"
            result="shape"
          />
        </filter>

        <radialGradient
          id={radialGradientId}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7 8.5) rotate(-90) scale(4 3.36364)"
        >
          <stop offset="0.389476" stopColor="#F8E6A8" />
          <stop offset="0.677942" stopColor="#EDCC6E" />
          <stop offset="0.841406" stopColor="#E9C968" />
          <stop offset="0.961599" stopColor="#C6A749" />
        </radialGradient>
      </defs>
    </svg>
  );
}
