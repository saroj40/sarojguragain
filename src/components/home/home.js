import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Expertise from "@/components/portfolio/Expertise";
import LatestPosts from "@/components/portfolio/LatestPosts";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const MainComponent = () => {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        text-slate-700
        antialiased
        transition-colors
        duration-300
        dark:bg-[#120711]
        dark:text-white/70
      "
    >
      <Navbar />

      <main id="content">
        <Hero />

        <Marquee />

        <About />

        <Experience />

        <Projects />

        <Expertise />

        <LatestPosts />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default MainComponent;