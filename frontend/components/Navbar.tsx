import Image from 'next/image'

export default function Navbar() {
    return (
      <nav className="w-full bg-white border-b border-gray-200 px-4 py-3 flex justify-between items-center shadow-sm">
        <Image
          src="/logo.png"
          alt="Chainable logo"
          width={50}
          height={50}
          className="mr-2"
        />
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Returns</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Matches</a></li>
          <li><a href="#" className="hover:text-blue-600 transition">Account</a></li>
        </ul>
      </nav>
    );
  }
  