const Button = ({ onClick, variant, children }) => {
  const Variants = {
    default: "bg-blue-600 text-sm font-semibold text-white",
    outline: "border border-black/20 text-sm text-black",
  };

  return (
    <>
      <button
        onClick={() => onClick()}
        className={`${Variants[variant]} py-2 px-4 rounded-full`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
