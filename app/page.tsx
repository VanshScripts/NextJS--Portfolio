"use client";
import Image from "next/image";
import Hero from "./components/Hero";
import { Spotlight } from "./components/ui/Spotlight";
import { FloatingNav } from "./components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "./components/Grid";
import { useEffect } from "react";
import { gapi } from "gapi-script";
import RecentProjects from "./components/RecentProjects";
import { navItems } from "./components/ui/data";
import Clients from "./components/Clients";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Footer from "./components/Footer";

const clientId = "280500639819-eo4jkjogq2jk8v1rrfbff3091nee9gdt.apps.googleusercontent.com"; 

export default function Home() {
 
  useEffect(() => {
    function start () {
      gapi.client.init({
        clientId:clientId,
        scope:""
      })
    };
    gapi.load('client:auth2' , start);

  });
  return (
    <main className="relative bg-black flex justify-center items-center overflow-hidden flex-col mx-auto sm:px-10 pz-5 ">
      <div className=" max-w-7xl w-full">
        
        <FloatingNav navItems={navItems} />
        
        <Hero/>
        <Grid/>
        <RecentProjects/> 
        <Clients/>
        <Experience/>
        <Approach/>
        <Footer/>
        
        <Spotlight/>
        
        </div> 
    </main>
  );
}
