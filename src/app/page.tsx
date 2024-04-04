import Feed from "@/components/feed";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />
      <Feed />
    </div>
  );
}
