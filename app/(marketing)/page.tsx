import { Button } from "@/components/ui/button";
import { Heading } from "./_components/headings";
import Image from "next/image";
import { Heros } from "./_components/heros";
import { Footer } from "./_components/footer";

const MarketingPage = ()=> {
  return (
    // <p className="text-red-300 font-bold">page notion</p>

    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
        <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
            <Heading/>
            <Heros/>
        <Footer/>
        </div>
    </div>

  );
}

export default MarketingPage;