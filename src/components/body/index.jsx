export const Paragraph = ({ variant = "lg", children }) => {
  return (
    <p
      style={{
        fontSize: `var(--font-size-body-${variant})`,
        lineHeight: "var(--line-height-body)",
      }}
    >
      {children}
    </p>
  );
};
