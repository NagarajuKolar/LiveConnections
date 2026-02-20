import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Components/Navbar'
import Footprint from './Components/Footprint';
import TeamLive from './Components/TeamLive';
import Jobposting from './Components/Jobposting';
import { recentjobs } from './Data/Jobpost';
import HrResource from './Components/HrResource';
import Company from './Pages/Company';
import Services from './Pages/Services';
import Home from './Pages/Home'
import Contact from './Pages/Contact';
import Article from './Pages/Article';
import Jobs from './Pages/Jobs';
import FindJobPage from './Pages/FindJobPage';
import DiversityInclusion from './Pages/DiversityInclusion';
import DomainSpecialist from './Pages/DomainSpecialist';
import Footer from './Components/Footer';
import ScrolltoTop from './Components/ScrolltoTop';
function App() {


  return (
    <>
      <ScrolltoTop />
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/services" element={<Services />} />
        <Route path="/domains" element={<DomainSpecialist />} />
        <Route path="/diversity-inclusion" element={<DiversityInclusion />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/findjobs' element={<FindJobPage />} />
        <Route path='/article/:articleslug' element={<Article />} />
        <Route path='/jobs/:jobslug' element={<Jobs />} />
      </Routes>

      <Footer />





    </>
  )
}

export default App
