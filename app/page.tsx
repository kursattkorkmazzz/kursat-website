import LandingPage from "@/components/pages/landingPage";
import Navbar from "@/components/navbar";

export default function Home({ params }: { params: { page: string } }) {
  console.log(params.page);
  return (
    <main>
      <LandingPage />
      <div id="about-me" className="h-screen bg-red-500"></div>
    </main>
  );
}
