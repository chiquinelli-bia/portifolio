export const Heading = ({ as: Tag = "h1", variant = "xxl", children }) => {
  return <Tag className={`heading-${variant}`}>{children}</Tag>;
};
