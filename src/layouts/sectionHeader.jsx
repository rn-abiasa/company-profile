const SectionHeader = ({ alignment, className, title, description }) => {
  const Alignments = {
    start: "text-start",
    center: "text-center",
    end: "text-end",
  };

  return (
    <>
      <div className={`flex flex-col gap-3 ${className}`}>
        <h2
          className={`text-3xl font-semibold ${Alignments[alignment]} max-w-80`}
        >
          {title}
        </h2>
        <p
          className={`text-sm font-normal text-black/50 ${Alignments[alignment]} max-w-70`}
        >
          {description}
        </p>
      </div>
    </>
  );
};

export default SectionHeader;
