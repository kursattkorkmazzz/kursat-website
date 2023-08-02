import LandingPage from "@/components/pages/landingPage";
import BiographyPage from "@/components/pages/biography";

export default function Home({ params }: { params: { page: string } }) {
  return (
    <main>
      <LandingPage />
      <BiographyPage />
    </main>
  );
}
