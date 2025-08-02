// app/AIDifferenceTable/page.tsx or wherever this component is used
'use client';
import React from "react";
import Link from "next/link";


const aiTimeline = [
  {
    era: 'Foundational AI',
    period: '1950s–1970s',
    milestones: ['Turing Test (1950)', 'Logic Theorist (1956)'],
    description: 'Birth of AI with symbolic logic and early reasoning systems.',
  },
  {
    era: 'Rule-Based Systems',
    period: '1980s',
    milestones: ['Expert Systems', 'Prolog & LISP'],
    description: 'AI mimicked expert reasoning using “if-then” rules.',
  },
  {
    era: 'Machine Learning Rise',
    period: '1990s–2000s',
    milestones: ['Decision Trees', 'SVM', 'Reinforcement Learning'],
    description: 'AI began learning from data using statistical methods.',
  },
  {
    era: 'Deep Learning Era',
    period: '2010–2019',
    milestones: ['ImageNet (2012)', 'AlphaGo (2016)', 'CNNs, RNNs'],
    description: 'AI advanced in vision, language, and decision-making via neural networks.',
  },
  {
    era: 'Generative AI',
    period: '2020–2022',
    milestones: ['GPT-3, DALL·E', 'Codex, Midjourney'],
    description: 'AI began generating realistic text, code, images, and more.',
  },
  {
    era: 'Agentic AI',
    period: '2023–Present',
    milestones: ['Auto-GPT', 'OpenAI SDK', 'LangChain, CrewAI'],
    description: 'AI agents that can reason, plan, and act autonomously.',
  },
];
export default function AIDifferenceTable() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/30.png')" }}
    >
       <nav className="w-full px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold font-serif">Agentic AI</h1>
          <div className="space-x-4 text-lg sm:block hidden md:flex font-bold font-serif ">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <Link href="/Documentation" className="hover:text-sky-400">Documentation</Link>
            <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Core Tools</Link>
            <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Learn</Link>
          </div>
        </nav>



      {/* Table Section */}
      <div className="px-4 py-10 text-white min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center text-white mt-6">
           Agentic AI vs Generative AI
        </h2>
        <div className="overflow-x-auto">
        <section className="mb-12 mt-6">
            
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto border border-gray-700 text-gray-200">
                <thead>
                  <tr className="bg-gray-800">
                    <th className="p-2 border border-gray-700">Aspect</th>
                    <th className="p-2 border border-gray-700">Agentic AI</th>
                    <th className="p-2 border border-gray-700">Generative AI</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-2 border border-gray-700">Purpose</td>
                    <td className="p-2 border border-gray-700">Acts, plans, and solves goals</td>
                    <td className="p-2 border border-gray-700">Creates content (text, images, etc.)</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-700">Control</td>
                    <td className="p-2 border border-gray-700">Autonomous</td>
                    <td className="p-2 border border-gray-700">User prompt-based</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-700">Workflow</td>
                    <td className="p-2 border border-gray-700">Multi-step reasoning</td>
                    <td className="p-2 border border-gray-700">One-step generation</td>
                  </tr>
                  <tr>
                    <td className="p-2 border border-gray-700">Example</td>
                    <td className="p-2 border border-gray-700">Assistant that books flights</td>
                    <td className="p-2 border border-gray-700">Writes an essay</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10 text-xl">
            <Link
              href="/OpenaiSDK"
              className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
            >
              Agentic AI With OpenAI SDK
            </Link>

            <Link
              href="/CrewAI"
              className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
            >
              Agentic AI With CrewAI
            </Link>

            <Link
              href="/Langchain"
              className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
            >
              Agentic AI With LangChain
            </Link>
          </div>

          <li className="text-lg mt-20">Python is necessary to learn before starting Agentic AI.</li>

          <div className="mt-20 px-4 md:px-16 py-10  bg-opacity-80 rounded-xl">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center font-serif text-white">
        🧠 AI Revolution 
      </h2>

      <div className="space-y-8 text-white">
        {aiTimeline.map((item, index) => (
          <div
            key={index}
            className="border-l-4 border-blue-500 pl-6 relative before:absolute before:w-4 before:h-4 before:bg-blue-500 before:rounded-full before:left-[-10px] before:top-2"
          >
            <h3 className="text-2xl font-semibold">
              {item.era}{' '}
              <span className="text-sm text-gray-400">({item.period})</span>
            </h3>
            <ul className="list-disc list-inside text-blue-300 mt-1">
              {item.milestones.map((m, i) => (
                <li key={i}>{m}</li>
              ))}
            </ul>
            <p className="text-gray-300 mt-2 italic">{item.description}</p>
          </div>
        ))}
      </div>
    </div>



        </div>
      </div>

      
    </div>
  );
}
