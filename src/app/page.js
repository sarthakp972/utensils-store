
import Image from "next/image";
import Homecart from "@/Components/Homecart";
import Footer from "@/Components/Footer";
import Slide from "@/Components/Slide";

export default function Home() {
  return (
   <>
        <Slide/>
<Homecart/>
<div className="mt-20">
<Footer/>
</div>
   </>
  );
}

