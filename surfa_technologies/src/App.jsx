import Header from "./components/Header";
import HomeHero from "./components/HomeHero";

import LogoCarousel from "./components/LogoCarousel";
import ServicesCards from "./components/ServicesCards";

function App() {
  return (
    <>
      <Header />
      <div className="xl:container-xxl mx-auto 2xl:container-2xl">
        <HomeHero />
      </div>

      <div
        className="
      flex justify-center flex-col items-center py-8 pb-20 relative
      
  
      
      "
      >
        <div
          className="
        bg-grey-10  border border-grey-20 rounded-[100px]   py-3.5 px-6 absolute top-0
        lg:-top-7 
         "
        >
          <p className="text-white text-[14px]">Trusted By 250+ Companies</p>
        </div>

        <LogoCarousel />
      </div>

      {/* services-section */}
      <div className="
      bg-section-bg bg-no-repeat bg-center bg-cover  bg-grey-15 bg-blend-overlay py-12 px-4
      md:py-20
      lg:py-24
      
      ">
         <div className="
         flex flex-col items-center justify-center w-[80%] mx-auto gap-2.5
         ">
          <h2>Our Services</h2>
          <p >Transform your brand with our innovative digital solutions that captivate and engage your audience.</p>
         </div>
      </div>


      <ServicesCards />

  


    </>
  );
}

export default App;
