// app/AIDifferenceTable/page.tsx or wherever this component is used
'use client';

import Link from "next/link";

export default function AIDifferenceTable() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/30.png')" }}
    >
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Agentic AI</h1>
          <div className="space-x-4 text-lg sm:block hidden md:flex font-bold font-serif ">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <Link href="/Documentation" className="hover:text-sky-400">Documentation</Link>
            <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Core Tools</Link>
            <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Learn</Link>
          </div>
        </nav>


      {/* Table Section */}
      <div className="px-4 py-10 text-white min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">
          Generative AI vs Agentic AI
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto border border-gray-700 w-full text-sm md:text-base">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="border border-gray-700 px-4 py-2 text-left">Aspect</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Generative AI</th>
                <th className="border border-gray-700 px-4 py-2 text-left">Agentic AI</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 text-gray-200 text-xl">
              {[
                ["Main Purpose", "Generates content like text, images, or code", "Acts independently toward a goal"],
                ["Task Style", "Single-turn tasks (input → output)", "Multi-step tasks with planning"],
                ["User Control", "Needs user input for every action", "Can operate with minimal input once goal is set"],
                ["Tool Usage", "Rarely uses external tools", "Actively uses tools and APIs"],
                ["Autonomy", "Not autonomous", "Autonomous (makes decisions)"],
                ["Memory & Planning", "No memory or planning built-in", "Can remember steps and plan ahead"],
                ["Examples", "ChatGPT, DALL·E, Copilot", "CrewAI, LangChain agents, OpenAI SDK agents"],
                ["Best Use Cases", "Content creation, design, idea generation", "Automation, coding agents, assistants"],
                ["Response Style", "One response per input", "Keeps working until task is complete"],
                ["Type of AI", "Content creator", "Goal achiever"],
              ].map(([aspect, gen, agent]) => (
                <tr key={aspect}>
                  <td className="border border-gray-700 px-4 py-2">{aspect}</td>
                  <td className="border border-gray-700 px-4 py-2">{gen}</td>
                  <td className="border border-gray-700 px-4 py-2">{agent}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-10 items-center justify-center mt-10 text-lg">
            <Link
              href="/WorldofAgenticAI"
              className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
            >
              Agentic AI With OpenAI SDK
            </Link>

            <Link
              href="/WorldofAgenticAI"
              className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
            >
              Agentic AI With CrewAI
            </Link>

            <Link
              href="/WorldofAgenticAI"
              className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
            >
              Agentic AI With LangChain
            </Link>
          </div>

          <li className="text-lg mt-20">Python is necessary to learn before starting Agentic AI.</li>
        </div>
      </div>
    </div>
  );
}
