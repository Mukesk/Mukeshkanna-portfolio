import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { About } from "@/components/main/about";
import { Projects } from "@/components/main/projects";
import { CodingProfiles } from "@/components/main/coding-profiles";
import { Skills } from "@/components/main/skills";
import { Certifications } from "@/components/main/certifications";
import { Awards } from "@/components/main/awards";
import { Contact } from "@/components/main/contact";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Skills />
        <Encryption />
        <Projects />
        <CodingProfiles />
        <Certifications />
        <Awards />
        <Contact />
      </div>
    </main>
  );
}
