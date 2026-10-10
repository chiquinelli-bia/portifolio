export const CopyrightIcon = ({
  color = "currentColor",
  size = "5em",
  style,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      style={{ display: "inline-block", verticalAlign: "middle", ...style }}
      {...props}
    >
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke={color}
        strokeWidth="5"
      />

      <text
        x="50"
        y="68"
        fontSize="62"
        fontWeight="normal"
        fill={color}
        textAnchor="middle"
      >
        C
      </text>
    </svg>
  );
};
