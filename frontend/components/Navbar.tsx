import Image from 'next/image'
import { Button } from './ui/button';
import Link from "next/link"

export default function Navbar() {
    return (
      <div className="sticky top-0 bg-neutral-900 mx-auto shadow-sm w-[90%] ">
      <nav className="my-2 border-[1px] border-white py-3 flex justify-between items-center px-6 rounded-xl">
        <div className='flex items-center text-white'>
          <Link href="/" className="flex items-center space-x-3">
            <Image
            src="/logo_white.png"
            alt="Chainable logo"
            height={50}
            width={50}
            className="mr-2 hover:rotate-[90deg] duration-200"
            />
          </Link>
          <h1 className='text-xl font-bold'>Chainable</h1>
        </div>
        <ul className="hidden md:flex space-x-6 text-white font-medium items-center">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">Solution</Link></li>
          <li><Link href="/">Team</Link></li>
          <li><Link href="/contact"><Button className="bg-white text-black hover:text-white hover:bg-neutral-700">Contact</Button></Link></li>
        </ul>
      </nav>
      </div>
    );
  }
  