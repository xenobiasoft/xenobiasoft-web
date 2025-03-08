import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-6 sticky top-0 z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={50} />
        </Link>

        <nav>
          <ul className="flex space-x-6 text-lg text-gray-700">
            <li>
              <Link href="/about">
                <h2 className="hover:text-blue-600">About</h2>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <h2 className="hover:text-blue-600">Blog</h2>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <h2 className="hover:text-blue-600">Projects</h2>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
