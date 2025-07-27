export default function AIDifferenceTable() {
    return (
        <div
        className="min-h-screen bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/30.png')" }}
      >
        <nav className="w-full px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Agentic AI</h1>
          <div className="space-x-4 text-lg sm:block hidden md:flex font-bold font-serif ">
            <a href="/" className="hover:text-sky-400">Home</a>
            <a href="/About" className="hover:text-sky-400">About</a>
            <a href="/WorldofAgenticAI" className="hover:text-sky-400">Core Tools</a>
            <a href="/WorldofAgenticAI" className="hover:text-sky-400">Learn</a>
          </div>
        </nav> 
        
      <div className="px-4 py-10 text-white min-h-screen">
        <h2 className="text-3xl font-bold mb-6 text-center text-white"> Generative AI vs Agentic AI</h2>
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
              <tr>
                <td className="border border-gray-700 px-4 py-2">Main Purpose</td>
                <td className="border border-gray-700 px-4 py-2">Generates content like text, images, or code</td>
                <td className="border border-gray-700 px-4 py-2">Acts independently toward a goal</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Task Style</td>
                <td className="border border-gray-700 px-4 py-2">Single-turn tasks (input → output)</td>
                <td className="border border-gray-700 px-4 py-2">Multi-step tasks with planning</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">User Control</td>
                <td className="border border-gray-700 px-4 py-2">Needs user input for every action</td>
                <td className="border border-gray-700 px-4 py-2">Can operate with minimal input once goal is set</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Tool Usage</td>
                <td className="border border-gray-700 px-4 py-2">Rarely uses external tools</td>
                <td className="border border-gray-700 px-4 py-2">Actively uses tools and APIs</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Autonomy</td>
                <td className="border border-gray-700 px-4 py-2">Not autonomous</td>
                <td className="border border-gray-700 px-4 py-2">Autonomous (makes decisions)</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Memory & Planning</td>
                <td className="border border-gray-700 px-4 py-2">No memory or planning built-in</td>
                <td className="border border-gray-700 px-4 py-2">Can remember steps and plan ahead</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Examples</td>
                <td className="border border-gray-700 px-4 py-2">ChatGPT, DALL·E, Copilot</td>
                <td className="border border-gray-700 px-4 py-2">CrewAI, LangChain agents, OpenAI SDK agents</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Best Use Cases</td>
                <td className="border border-gray-700 px-4 py-2">Content creation, design, idea generation</td>
                <td className="border border-gray-700 px-4 py-2">Automation, coding agents, assistants</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Response Style</td>
                <td className="border border-gray-700 px-4 py-2">One response per input</td>
                <td className="border border-gray-700 px-4 py-2">Keeps working until task is complete</td>
              </tr>
              <tr>
                <td className="border border-gray-700 px-4 py-2">Type of AI</td>
                <td className="border border-gray-700 px-4 py-2">Content creator</td>
                <td className="border border-gray-700 px-4 py-2">Goal achiever</td>
              </tr>
            </tbody>
          </table>

<div className="flex gap-10 item-center justify-center mt-10 text-lg">
{/* ------------------------------------------------------- */}
<div className="text-center justify-center flex mt-8">
  <a
    href="/WorldofAgenticAI"
    className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
  >
    Agentic AI With OpenAI SDK
  </a>
</div>
{/* --------------------------------------------------------- */}
<div className="text-center justify-center flex mt-8">
  <a
    href="/WorldofAgenticAI"
    className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
  >
  Agentic AI With CrewAI
  </a>
</div>
{/* --------------------------------------------------------- */}
<div className="text-center justify-center flex mt-8">
  <a
    href="/WorldofAgenticAI"
    className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
  >
    Agentic AI With LangChain
  </a>
</div>
{/* ---------------------------------------------------------- */}
 
</div>
<li className="text-lg mt-20">Python is neccesary to learn before starting Agentic AI.</li>

        </div>
      </div>
     
      </div>

    );
  }
  