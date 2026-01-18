const Button = ({ onClick, variant, className, children }) => {
  const Variants = {
    default: "bg-blue-600 text-sm font-semibold text-white hover:bg-blue-700",
    outline:
      "border border-black/20 text-sm text-black hover:bg-black hover:text-white",
  };

  return (
    <>
      <button
        onClick={() => onClick()}
        className={`${Variants[variant]} ${className} py-2 px-4 rounded-full`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
