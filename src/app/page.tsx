import NavBar from "@/components/NavBar/NavBar";
import Header from "@/components/Header/Header";
import AboutMe from "@/components/AboutMe/AboutMe";
import Knowledge from "@/components/Knowledge/Knowledge";
import WorkSamples from "@/components/WorkSamples/WorkSamples";
export default function Home() {
  return (
    <>
      <NavBar />
      <Header />
      <AboutMe />
      <Knowledge />
      <WorkSamples />
    </>
  );
}
