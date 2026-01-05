import UtilityBar from "@/components/customer/layout/UtilityBar";

import HomeClient from "@/components/customer/home/HomeClient";

export default function Home() {
  return (
    <main className="min-h-screen">
      <UtilityBar />
      {/* Client-only heavy UI */}
      <HomeClient />

    </main>
  );
}
