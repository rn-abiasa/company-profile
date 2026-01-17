const Review = ({ name, prophecy, image, content }) => {
  return (
    <>
      <div>
        <p className="text-sm font-normal text-black/50 text-center">
          {content}
        </p>
        <div className="flex justify-center items-center gap-5 mt-5">
          <img src={image} alt={name} className="h-10 w-10 rounded-full" />
          <div>
            <p className="text-sm font-semibold">{name}</p>
            <p className="text-xs font-normal text-black/50">{prophecy}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Review;
