'use client';
import Link from "next/link"
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
      className="min-h-screen w-full bg-cover bg-center text-white flex flex-col"
      style={{ backgroundImage: "url('/54.png')" }}
    >
      {/* Navbar */}
      <nav className="w-full flex flex-col sm:flex-col md:flex-row justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold">Agentic AI</h1>
        <div className="space-x-0 sm:space-x-0 md:space-x-4 flex flex-col sm:flex-col md:flex-row text-lg font-bold font-serif mt-4 md:mt-0 space-y-2 md:space-y-0">
          <Link href="/" className="hover:text-sky-400">Home</Link>
          <Link href="/About" className="hover:text-sky-400">About</Link>
          <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Core Tools</Link>
          <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Learn</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center text-center px-4 pt-16 pb-8 sm:pb-16 md:pb-32">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Welcome To Learn About Agentic AI</h2>

        <p className="text-base sm:text-lg max-w-xl text-gray-300 font-bold mt-4">
          Master Agentic AI with the OpenAI SDK, LangChain, CrewAI, and more. This platform is your gateway to building AI agents that can think, plan, and act independently. Everything you need to know about Agentic AI starts here.
        </p>

        <p className="text-base sm:text-lg max-w-xl text-gray-300 font-bold mt-2">
          Learn How AI Agents Work and Create Your Own
        </p>

        {/* Get Started Button with Responsive Spacing */}
        <div className="text-center justify-center flex mt-4 sm:mt-6 md:mt-10">
          <Link
            href="/Basics"
            className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
          >
            Get Started
          </Link>
        </div>
      </main>

      {/* Question Lines Section */}
      <section className="px-4 pb-10 sm:pb-16 md:pb-20">
        <div className="text-lg sm:text-2xl font-serif space-y-2 ">
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
