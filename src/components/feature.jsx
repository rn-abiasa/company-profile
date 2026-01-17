const Feature = ({ name, description, icon }) => {
  return (
    <>
      <div className="w-60 flex flex-col justify-center items-center">
        <div className="bg-white h-12 w-12 rounded-xl shadow-lg text-black flex justify-center items-center">
          {icon}
        </div>
        <h3 className="text-base font-semibold text-center mt-5">{name}</h3>
        <p className="text-sm font-normal text-black/50 text-center">
          {description}
        </p>
      </div>
    </>
  );
};

export default Feature;
