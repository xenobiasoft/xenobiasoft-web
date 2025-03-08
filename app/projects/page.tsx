import Link from 'next/link';

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 dark:invert">My Projects</h1>
      <p className="text-lg text-gray-700 mb-6 dark:invert">
        Here are some of the projects I've worked on. Click on a project to learn more.
      </p>
      
      <div className="space-y-6">
        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">Sudoku Game</h2>
          <p className="text-gray-600 mt-2 dark:invert">
            A Sudoku game built with Blazor and C#. Try solving puzzles with a clean and interactive UI.
          </p>
          <Link href="/projects/sudoku">
            <span className="text-blue-600 font-semibold mt-3 inline-block hover:underline">View Project →</span>
          </Link>
        </div>
        <div className="p-6 border rounded-lg shadow-md hover:shadow-lg transition">
          <h2 className="text-2xl font-semibold">DepenMock</h2>
          <p className="text-gray-600 mt-2 dark:invert">
            An auto-mocking unit test framework for .NET. Write tests faster by automatically mocking dependencies.
          </p>
          <Link href="/projects/depenmock">
            <span className="text-blue-600 font-semibold mt-3 inline-block hover:underline">View Project →</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
