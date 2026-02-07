import Link from "next/link";
import { FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#0F0A1E] text-gray-200 shadow-lg p-6 relative z-50 border-t border-[#7042f88b]">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        <div className="w-full flex flex-row items-start justify-around flex-wrap gap-8">

          {/* Brand / Resume Section */}
          <div className="flex flex-col items-center justify-start min-w-[200px]">
            <h3 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4">
              Mukeshkanna
            </h3>
            <a
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/30 transition-all transform hover:scale-105"
            >
              Download Resume
            </a>
          </div>

          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] flex flex-col items-center justify-start"
            >
              <h3 className="font-bold text-[16px] mb-4 text-gray-100">{column.title}</h3>
              {column.data.map(({ icon: Icon, name, link }) => (
                <Link
                  key={`${column.title}-${name}`}
                  href={link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex flex-row items-center my-2 text-gray-400 hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  {Icon && <Icon className="w-4 h-4" />}
                  <span className="text-[15px] ml-[6px]">{name}</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 text-[14px] text-center text-gray-500 border-t border-gray-800 pt-6 w-full">
          &copy; {new Date().getFullYear()} Mukeshkanna. Crafted with Next.js & Framer Motion.
        </div>
      </div>
    </footer>
  );
};
