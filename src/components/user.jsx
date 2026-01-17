export const UserProfile = ({ className, name, image }) => {
  return (
    <>
      <img
        src={image}
        alt={name}
        className={`${className} border-2 border-gray-100 h-10 w-10 rounded-full`}
      />
    </>
  );
};
