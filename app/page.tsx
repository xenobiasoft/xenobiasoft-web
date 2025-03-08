import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 text-center">
      <div className="flex flex-col items-center">
        <Image 
          src="/profile.png" 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          className="rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold text-gray-900 mt-4 dark:invert">Welcome to Xenobiasoft</h1>
        <p className="text-lg text-gray-700 mt-2 max-w-2xl dark:invert">
          Hi, I'm Shannon Stewart, a developer passionate about technology, coding, and building scalable applications. 
          Explore my latest projects, read my blog, and get in touch!
        </p>
        
        <div className="mt-6 flex space-x-4">
          <Link href="/blog">
            <h2 className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">Read the Blog</h2>
          </Link>
          <Link href="/projects">
            <h2 className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">View Projects</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}
