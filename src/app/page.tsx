'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const lines = [
    'What is Agentic AI?',
    'What can Agentic AI do?',
    'Why is Agentic AI useful?',
    'Why people are building it?',
    'What problems it solves?',
    'Where is Agentic AI used in real life?',
    'Can Agentic AI work without human input?',
    'How can I build an Agentic AI?',
    'What is needed to start building Agentic AI?',
    'What tools does Agentic AI use?',
  ];

  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      const fullLine = lines[currentLineIndex];

      if (currentText.length < fullLine.length) {
        const timeout = setTimeout(() => {
          setCurrentText(fullLine.slice(0, currentText.length + 1));
        }, 80);
        return () => clearTimeout(timeout);
      } else {
        const nextLineTimeout = setTimeout(() => {
          setDisplayedLines([...displayedLines, currentText]);
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentText('');
        }, 700);
        return () => clearTimeout(nextLineTimeout);
      }
    }
  }, [currentText, currentLineIndex]);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/54.png')" }}
    >
      
        {/* Navbar */}
        <nav className="w-full px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Agentic AI</h1>
          <div className="space-x-4 text-lg sm:block hidden md:flex font-bold font-serif ">
            <a href="/" className="hover:text-sky-400">Home</a>
            <a href="/About" className="hover:text-sky-400">About</a>
            <a href="/WorldofAgenticAI" className="hover:text-sky-400">Core Tools</a>
            <a href="/WorldofAgenticAI" className="hover:text-sky-400">Learn</a>
          </div>
        </nav>
<section>
        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center text-center px-4 py-32">
          {/* Typewriter Effect */}
          
          <h2 className="text-4xl font-extrabold  ">Welcome To Learn About Agentic AI</h2>

          <p className="text-lg max-w-xl text-gray-300 font-bold">Master Agentic AI with the OpenAI SDK, LangChain, CrewAI, and more.This platform is your gateway to building AI agent that can think, plan, and act independently, everything you need to know about Agentic AI starts here.
</p>
<br />
          <p className="text-lg max-w-xl text-gray-300 font-bold">
          Learn How AI Agents Work and Create Your Own
          </p>
          <div className="text-center justify-center flex mt-8">
  <a
    href="/Basics"
    className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
  >
   Get Started
  </a>
</div>

        </main>
        </section>
     <section>
      <div className="text-1xl sm:text-3xl  font-mono mb-6 space-y-2">
            {displayedLines.map((line, idx) => (
              <div key={idx}>{line}</div>
            ))}
            {currentLineIndex < lines.length && (
              <div>
                {currentText}
                <span className="border-r-2 border-white animate-pulse">&nbsp;</span>
              </div>
            )}
          </div>
          </section>
    </div>
  );
}


