import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function BlogLayout({ children }) {
  return (
    <div
      className="
        min-h-screen
        overflow-x-hidden
        bg-white
        text-slate-700
        antialiased
        dark:bg-[#120711]
        dark:text-white/70
      "
    >
      <Navbar />

      <main id="content">{children}</main>

      <Footer />
    </div>
  );
}