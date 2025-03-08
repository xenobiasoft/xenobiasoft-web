import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-4">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image 
          src="/profile.png" 
          alt="Profile Picture" 
          width={150} 
          height={150} 
          className="rounded-full shadow-lg"
        />
        <div className='dark:invert'>
          <p className="text-lg text-gray-700 mb-4">
            Hi! I'm Shannon Stewart, a passionate developer with a love for building scalable and efficient applications. 
            I specialize in .NET, Azure, C#, and I enjoy working on projects that solve real-world problems.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            I specialize working with Azure AI (Cognitive) Search, Cosmos DB, and Azure Service Bus. My focus is on 
            creating high-performance, secure, and maintainable applications.
          </p>
          <p className="text-lg text-gray-700">
            Outside of coding, I enjoy woodworking and casual gaming.
          </p>
        </div>
      </div>
    </div>
  );
}
