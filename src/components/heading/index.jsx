export const Heading = ({
  as: Tag = "h1",
  variant = "xxl",
  children,
  className = "",
  ...props
}) => {
  return (
    <Tag className={`${className} heading-${variant}`} {...props}>
      {children}
    </Tag>
  );
};
