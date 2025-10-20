
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          HEAD SPA Signature
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#services" className="text-gray-600 hover:text-gray-800">Services</Link></li>
            <li><Link href="#team" className="text-gray-600 hover:text-gray-800">Our Team</Link></li>
            <li><Link href="#testimonials" className="text-gray-600 hover:text-gray-800">Testimonials</Link></li>
            <li><Link href="#contact" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
