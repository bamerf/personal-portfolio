import { Icons } from './atoms/Icons';

// TODO do Container & Nav as layout for everypage
export const Nav = () => {
  return (
    <div className="flex items-center justify-between pt-10 pb-32">
      <nav className="flex gap-8">
        <a href="" className="font-bold text-gray-200">
          Home
        </a>
        <a href="" className="text-gray-400">
          About
        </a>
        <a href="" className="text-gray-400">
          Work
        </a>
        <a href="" className="text-gray-400">
          Resume
        </a>
      </nav>
      <div className="rounded-lg bg-gray-300 p-2">
        <Icons name="sun" size={24} />
      </div>
    </div>
  );
};