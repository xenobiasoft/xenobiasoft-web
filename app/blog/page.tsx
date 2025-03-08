import Link from 'next/link';

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6 dark:invert">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Blog</h1>
      <p className="text-lg text-gray-700 mb-6">
        Welcome to my blog! Here, I share insights on technology, coding, and my latest projects. Check back for updates!
      </p>
      
      {/* Placeholder for blog posts */}
      <div className="space-y-6">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold">Coming Soon</h2>
          <p className="text-gray-600 mt-2">Stay tuned for upcoming articles on tech trends, tutorials, and project deep dives.</p>
        </div>
      </div>
    </div>
  );
}