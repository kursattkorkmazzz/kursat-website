import LandingPage from "@/components/pages/landingPage";
import BiographyPage from "@/components/pages/biographyPage";
import SkillsPage from "@/components/pages/skillsPage";
export default function Home({ params }: { params: { page: string } }) {
  return (
    <>
      <LandingPage />
      <main className="flex flex-col gap-20 py-20 px-5 md:px-[20%]">
        <BiographyPage />
        <SkillsPage />
      </main>
    </>
  );
}
