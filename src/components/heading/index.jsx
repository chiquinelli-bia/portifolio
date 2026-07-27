export const Heading = ({
  as: Tag = "h1",
  variant = "xxl",
  children,
  className = "",
}) => {
  return <Tag className={`${className} heading-${variant}`}>{children}</Tag>;
};
