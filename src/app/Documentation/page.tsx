import Link from "next/link"
export default function AgenticAIDocumentation() {
    return (
        
            <div className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white font-serif"
              style={{ backgroundImage: "url('/30.png')" }}
            >
              {/* Dark overlay on top of background */}
              <div className="absolute inset-0 bg-opacity-60 z-0"></div>
        
              {/* Page content over background */}
              <div className="relative z-10">
                <nav className="w-full px-6 py-4 flex justify-between items-center">
                  <h1 className="text-2xl font-bold">Agentic AI</h1>
                  <div className="space-x-4 text-lg sm:block hidden md:flex font-bold font-serif">
                    <Link href="/" className="hover:text-sky-400">Home</Link>
                    <Link href="/Documentation" className="hover:text-sky-400">Documentation</Link>
                    <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Core Tools</Link>
                    <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Learn</Link>
                  </div>
                </nav>
        
                <div className="min-h-screen px-6 py-12">
                  <div className="max-w-5xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">📘 Agentic AI Documentation</h1>
        
                    
                  </div>
              
             
        
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 ">🧠 What is Agentic AI?</h2>
            <p className="text-lg text-gray-200">
              Agentic AI refers to a type of artificial intelligence system designed to act as an <strong>autonomous agent</strong> — capable of making its own decisions, setting goals, planning actions, and learning from interactions. Unlike traditional AI systems that only respond to specific inputs, Agentic AI can initiate tasks, handle complex objectives, and adapt its behavior dynamically.
            </p>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 ">🔍 Key Characteristics</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-200">
              <li>🧭 <strong>Goal-Oriented:</strong> Sets and pursues goals autonomously.</li>
              <li>🤖 <strong>Autonomous Execution:</strong> Operates without continuous human input.</li>
              <li>📚 <strong>Memory and Learning:</strong> Remembers and adapts from past experiences.</li>
              <li>🗺️ <strong>Planning & Reasoning:</strong> Breaks down and solves tasks logically.</li>
              <li>🔗 <strong>Tool Use:</strong> Integrates external tools for extended abilities.</li>
              <li>💬 <strong>Interactive:</strong> Communicates via natural language or APIs.</li>
            </ul>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 ">🆚 Agentic AI vs. Generative AI</h2>
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
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 ">🛠️ How It Works</h2>
            <p className="text-gray-200 mb-4">Agentic AI is built using a combination of:</p>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Large Language Models (LLMs) for language understanding.</li>
              <li>Frameworks like LangChain or AutoGPT for building agents.</li>
              <li>Memory systems for storing context and past data.</li>
              <li>Planners and executors for decision-making.</li>
              <li>Tool integration for extended capability.</li>
            </ul>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 ">🎯 Use Cases</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>AI Personal Assistants</li>
              <li>Customer Support Bots</li>
              <li>Automation Agents</li>
              <li>Education Tutors</li>
              <li>DevOps or Code Assistants</li>
            </ul>
          </section>
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 ">✅ Benefits</h2>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li>Reduces human effort by automating tasks.</li>
              <li>Increases workflow efficiency.</li>
              <li>Operates 24/7 without fatigue.</li>
              <li>Scales across different domains and industries.</li>
            </ul>
          </section>
  
          
  
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 ">🚀 Getting Started</h2>
            <p className="text-gray-200 mb-4">Explore tools and frameworks:</p>
            <ul className="list-disc list-inside text-gray-200 space-y-2">
              <li><a href="https://www.langchain.com/" target="_blank" className="text-cyan-400 hover:underline">LangChain</a></li>
              <li><a href="https://github.com/Torantulino/Auto-GPT" target="_blank" className="text-cyan-400 hover:underline">AutoGPT</a></li>
              <li><a href="https://platform.openai.com/" target="_blank" className="text-cyan-400 hover:underline">OpenAI SDK</a></li>
              <li><a href="https://www.llamaindex.ai/" target="_blank" className="text-cyan-400 hover:underline">LlamaIndex</a></li>
            </ul>
          </section>
        </div>
        </div>
              </div>
    );
  }
  