import HomeClient from "@/components/customer/home/HomeClient";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Client-only heavy UI */}
      <HomeClient />
    </main>
  );
}
