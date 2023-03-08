import Head from "next/head";
import Navbar from "@/components/Navbar/Navbar";
import HomeSection from "@/components/Home/HomeSection";
import AboutSection from "@/components/About/AboutSection";
import { useRef } from "react";

export default function Home() {
  const selfIntroRef: any = useRef(null);
  const aboutSectionRef: any = useRef(null);
  const refDefinition: any = {
    "/#intro": selfIntroRef,
    "/#about-me": aboutSectionRef,
  };

  // Get Link click in navigation bar
  const getLinkClicked = (link: string) => {
    executeScroll(link);
  };

  // Scroll on click page event
  const executeScroll = (link: string) => {
    refDefinition[link].current.scrollIntoView({
      block: "start",
      behavior: "smooth",
    });
  };
  return (
    <>
      <Head>
        <title>77 - 歡迎來我的世界</title>
        <meta name="description" content="歡迎來77的世界" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/img/logo-77.svg" />
      </Head>
      <main>
        <Navbar setLink={getLinkClicked} />
        <div ref={selfIntroRef} style={{ padding: "0 3.125rem" }}>
          <HomeSection />
        </div>

        <div ref={aboutSectionRef} style={{ padding: "0 3.125rem" }}>
          <AboutSection />
        </div>
      </main>
    </>
  );
}
