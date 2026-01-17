const Badge = ({ children }) => {
  return (
    <>
      <div className="bg-gray-100 rounded-full justify-center items-center inline-block py-2 px-4 text-sm font-normal text-blue-600">
        {children}
      </div>
    </>
  );
};

export default Badge;
