import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import Internship from './Pages/Internship';
import ContactUs from './Pages/ContactUs';
import ResponsiveWebsite from './Pages/ResponsiveWebsite';
import Ecommerce from './Pages/Ecommerce';
import BIS from './Pages/BIS';
import SEO from './Pages/SEO';
import SMM from './Pages/SMM';
import CustomApplication from './Pages/CustomApplication';

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/responsivewebsitedesign" element={<ResponsiveWebsite />} />
          <Route path="/ecommercesolutions" element={<Ecommerce />} />
          <Route path="/businessinterlligence" element={<BIS />} />
          <Route path="/seo" element={<SEO />} />
          <Route path="/smm" element={<SMM />} />
          <Route path="/desktopwebmobile" element={<CustomApplication />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
