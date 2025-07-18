import type { Route } from "./+types/home";
import Carousel from "./components/home/carousel";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Nest Capital" },
    { name: "description", content: "Nest Capital" },
  ];
}

export default function Home() {
  return (
    <div>
      <Carousel />
    </div>
  );
}
