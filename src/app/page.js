import Card from "@/components/Card";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="grid place-items-center gap-8 h-screen relative">
      <Card />
      <Sidebar />
    </main>
  );
}
