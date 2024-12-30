'use client'
import Navbar from './../component/Navbar';
import HomePage from './homePage/HomePage';
import BrandBanner from './homePage/BrandBanner';
import NewArrivals from './homePage/NewArrivals';
import DressStyle from './homePage/DressStyle';
import Feedback from './homePage/Feedback';
import Footer from './homePage/Footer';
import { Provider } from 'react-redux';
import { store } from './../store/index';



export default function Home() {
  return (
    <Provider store={store}>
  
   <Navbar/>
   <HomePage />
   <BrandBanner />
   <NewArrivals/>
   <DressStyle />
   <Feedback /> 
   <Footer />
  </Provider>
  );
}
