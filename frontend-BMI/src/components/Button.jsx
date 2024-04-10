const Button = ({ children, handleClick, ...props }) => (
  <button onClick={handleClick} {...props}>
    {children}
  </button>
);

export default Button;
