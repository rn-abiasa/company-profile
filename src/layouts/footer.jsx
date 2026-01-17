//import { Linkedin, Facebook, twitter } from "lucide-react";
import Social from "../components/social";
import { Linkedin, Facebook, Twitter } from "lucide-react";
const links = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Services", url: "/services" },
  { label: "Contact", url: "/contact" },
];
const FooterItem = ({ title, links }) => {
  return (
    <>
      <div>
        <p className="text-base font-semibold text-white">{title}</p>
        <div className="flex flex-col gap-3 mt-4">
          {links.map((link) => (
            <a href={link.url} className="text-sm font-normal text-white/50">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="bg-black px-5 py-10">
        <div>
          <h3 className="text-2xl font-semibold text-white">Company</h3>
          <p className="text-sm font-normal text-white/50 mt-2">
            Lorem ipsum dolor sit amet
          </p>
          <div className="flex gap-5 mt-10">
            <a href="">
              <Social icon={<Linkedin size={16} />} />
            </a>
            <a href="">
              <Social icon={<Facebook size={16} />} />
            </a>
            <a href="">
              <Social icon={<Twitter size={16} />} />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 gap-y-10 mt-14">
          <FooterItem title="Links" links={links} />
          <FooterItem title="Links" links={links} />
          <FooterItem title="Links" links={links} />
        </div>
      </footer>
      <div className="bg-black border-t border-white/20 p-5">
        <p className="text-sm font-normal text-white/50">
          2026 Abiasa. All Rights Reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
