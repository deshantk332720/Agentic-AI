import Link from "next/link"
export default function Home() {
  const faqs = [
    {
      question: "What is Agentic AI?",
      answer: "Agentic AI acts independently — it plans, uses tools, and handles complex tasks.",
    },
    {
      question: "What can Agentic AI do?",
      answer: "It can automate tasks, make decisions, use tools, and operate without human input.",
    },
    {
      question: "Why is Agentic AI useful?",
      answer: "It saves time and boosts productivity by handling multi-step tasks autonomously.",
    },
    {
      question: "Why are people building it?",
      answer: "To automate workflows, enhance apps, and solve problems without constant human effort.",
    },
    {
      question: "What problems does it solve?",
      answer: "Agentic AI handles research, support, writing, coding, and task planning efficiently.",
    },
    {
      question: "Where is Agentic AI used in real life?",
      answer: "Used in chatbots, task bots, AI assistants, workflow automation, and research tools.",
    },
    {
      question: "Can Agentic AI work without human input?",
      answer: "Yes — once given a goal, Agentic AI can make decisions, use tools, and complete tasks on its own.",
    },
    {
      question: "How can I build an Agentic AI?",
      answer: "Use OpenAI SDK + LangChain or CrewAI, define tools, and give it a goal.",
    },
    {
      question: "What is needed to start building Agentic AI?",
      answer: "You need coding basics, GPT access, and one agent framework like LangChain.",
    },
    {
      question: "What tools does Agentic AI use?",
      answer: "It uses APIs, search, calculators, file tools, or anything it needs to complete a task.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/30.png')" }} // use the new bg
    >

<nav className="w-full px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Agentic AI</h1>
          <div className="space-x-4 text-lg sm:block hidden md:flex font-bold font-serif ">
            <Link href="/" className="hover:text-sky-400">Home</Link>
            <Link href="/Documentation" className="hover:text-sky-400">Documentation</Link>
            <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Core Tools</Link>
            <Link href="/WorldofAgenticAI" className="hover:text-sky-400">Learn</Link>
          </div>
        </nav>



      <div className="min-h-screen px-4 py-20  bg-opacity-30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900 via-slate-900 to-black border border-blue-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-all duration-300"
              >
                <h2 className="text-xl font-bold text-blue-300 mb-3">
                  {faq.question}
                </h2>
                <p className="text-xl text-blue-100">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center justify-center flex mt-8 gap-8 font-bold">
  <Link
    href="/WorldofAgenticAI"
    className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
  >
    More...
  </Link>

  <Link
    href="/Documentation"
    className="bg-gradient-to-br from-blue-700 via-slate-800 to-black text-white px-6 py-2 rounded-full hover:brightness-110 transition-all duration-300 shadow-md border border-blue-600"
  >
   Documentation
  </Link>


</div>


      </div>
    </div>
  );
}


















































// 'use client';

// import { useEffect, useState } from 'react';

// const words = ['Agentic AI', 'Next.js Projects', 'Full Stack Developer'];

// export default function Test() {
//   const [text, setText] = useState('');
//   const [wordIndex, setWordIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentWord = words[wordIndex];
//     let typeSpeed = isDeleting ? 50 : 120;

//     const timer = setTimeout(() => {
//       setText(currentWord.substring(0, charIndex));

//       if (!isDeleting && charIndex < currentWord.length) {
//         setCharIndex(charIndex + 1);
//       } else if (isDeleting && charIndex > 0) {
//         setCharIndex(charIndex - 1);
//       } else if (!isDeleting && charIndex === currentWord.length) {
//         setIsDeleting(true);
//         typeSpeed = 1000; // pause before deleting
//       } else if (isDeleting && charIndex === 0) {
//         setIsDeleting(false);
//         setWordIndex((wordIndex + 1) % words.length);
//       }
//     }, typeSpeed);

//     return () => clearTimeout(timer);
//   }, [charIndex, isDeleting, wordIndex]);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-black text-white text-3xl font-mono">
//       <h1>
//         {text}
//         <span className="border-r-2 border-white ml-1 animate-pulse">&nbsp;</span>
//       </h1>
//     </div>
//   );
// }


