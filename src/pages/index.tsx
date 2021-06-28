import { useState } from "react";
import { HeroSection } from "../components/HeroSection";
import { InfoSection } from "../components/InfoSection";
import Head from "next/head";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import { Navbar } from "../components/Navbar";
import { ServicesSection } from "../components/ServicesSection";
import { Sidebar } from "../components/Sidebar";
import { GetStaticProps } from "next";

export default function Home() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const toggleSidebarIsOpen = () => {
    setSidebarIsOpen(!sidebarIsOpen);
  };

  return (
    <>
      <Head>
        <title>Dolla | Home</title>
      </Head>
      <Navbar toggleSidebarIsOpen={toggleSidebarIsOpen} />
      <Sidebar
        sidebarIsOpen={sidebarIsOpen}
        toggleSidebarIsOpen={toggleSidebarIsOpen}
      />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <ServicesSection />
      <InfoSection {...homeObjThree} />
    </>
  );
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {},
    revalidate: 60 * 60 * 24, //Revalidate every 24 hours
  };
};
