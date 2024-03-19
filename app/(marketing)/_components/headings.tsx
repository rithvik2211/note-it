"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";


export const Heading = ()=>{
    return(

        <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">A Journal, Notes & Plan. Welcome to <span className="underline">Note-it</span> </h1>

            <h3 className="text-base sm:text-xl md:text-2xl">Easier Simpler Comfortable</h3>
            <Button>Enter Note-it <ArrowRight/> </Button>
        </div>
    )
    
}

