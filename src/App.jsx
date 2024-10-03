import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Toast from "./components/Toast";
import ChooseFile from "./components/ChooseFile";
import Input from "./components/Input";
import Footer from "./components/Footer";
import MobileMockup from "./components/MobileMockup";
import BrowserMockup from "./components/BrowserMockup";
import BadgeLinks from "./components/BadgeLinks";
import GitHubEmbed from "./components/GitHubEmbed";

function App() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
        <hr />
      </div>
      <div>
        <Hero />

        <Stats />

        <GitHubEmbed />
        <BadgeLinks />

        <Toast />

        <ChooseFile />

        <Input />

        <div className="flex flex-col lg:flex-row gap-5 m-4 justify-around items-center">
          <MobileMockup />
          <BrowserMockup />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
