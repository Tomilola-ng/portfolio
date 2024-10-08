import Header from "@/components/Header";
import HeroSection from "@/components/Home/Hero";
import ProjectSection from "@/components/Home/Projects";

export default function Home() {
  return (
    <main role="main" className="maxContainer">
      <Header />
      <HeroSection />
      <ProjectSection />
    </main>
  );
}
