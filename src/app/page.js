import Image from "next/image";
import { nunitoSans } from "./layout";

export default function Home() {
  return (
    <div>
      home
      <h3 className={`${nunitoSans.className}`}>nunito sans</h3>
    </div>
  );
}
