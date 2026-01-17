import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <header className="border-b border-black/20 p-5">
        <div className="flex justify-between items-center">
          <div>
            <a href="" className="text-lg font-semibold">
              Company
            </a>
          </div>
          <div>
            <button>
              <Menu />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
