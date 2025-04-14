import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/" className="text-white text-lg hover:text-gray-400">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-white text-lg hover:text-gray-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/JohnFerrolino"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-lg hover:text-gray-400"
          >
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
