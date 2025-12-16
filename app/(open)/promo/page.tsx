import White from "./content/White";
import Black from "./content/Black";
import { getUserLayer } from "@/utils/ContentFilter";
// import { headers } from "next/headers";

export default async function Page() {
  // GET DOMAIN ID
  // const hdrs = await headers(); // Removido pois não é usado

  // GET USER LAYER
  const userLayer = await getUserLayer();
  const whiteContent = userLayer === 1;

  // WHITE CONTENT
  if (whiteContent) {
    return <White />;
  }

  // BLACK CONTENT
  return <Black />;
} 