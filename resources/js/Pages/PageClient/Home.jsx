import React from 'react';

import Event from '../MyPages/ImgStyle';
import About from './About';
import Comments from './Comments';
 import AfficherChambres from './ListeTypeChambres';
// import AfficherChambres from './ListeChambres';
// import Footer from '@/Layouts/Footer1';
import AboutPage from './AboutPage';
import Footer from './Footer';
// import About from './AboutPage';


export default function Home({ typechambres, comments }) {
    return (
        <div>
            <AfficherChambres typechambres={typechambres} />
            <About/>
            <h1 className="text-center mb-24 text-gray-700 " style={{ fontSize:'30px' }}>
      Notre Gallery
    </h1>            <Event/>
            <AboutPage/>
            <Comments comments={comments} />
           
            <Footer/>
            
        </div>
    );
}


