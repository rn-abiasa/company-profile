const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contacts", url: "/contact" },
];

const Hamburger = () => {
  return (
    <>
      <div className="fixed top-20 right-5 bg-gray-100 w-36 rounded-xl p-5 flex flex-col gap-5">
        {links.map((link) => (
          <a
            href={link.url}
            key={link.label}
            className="text-sm text-black/50 hover:text-black"
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
};

export default Hamburger;
