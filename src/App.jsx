import React from 'react';
import './styles/reset.scss';
import './styles/general.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
