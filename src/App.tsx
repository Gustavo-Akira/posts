import React from 'react';
import Routes from './Routes';
import Header from './components/Header';
import Footer from './components/Footer';

const App : React.FC = ()=>{
    return(
        <>
            <Header />
            <Routes/>
            <Footer/>
        </>
    );
}

export default App;