import React, { useEffect } from 'react';
//componente
import Header from '../components/header.js';
import Footer from '../components/footer.js';
//componente

//poze
import principala from '../SURSE/slideshow/men-watch[4]-principala.jpg';
import secundara from '../SURSE/slideshow/men-watch[1].png';
import treia from '../SURSE/slideshow/men-watch[2].png';
import patra from '../SURSE/slideshow/men-watch[3].png';
import etichetacumpara from '../SURSE/eticheta-cumpara.png';
import apasa from '../SURSE/apasa.png';
import check from '../SURSE/check.png'
//poze

import PRODUCTS from '../produse/products.js';
import '../style.css';

function Acasa() {

    useEffect(() => {
        let slides = document.querySelectorAll('.imgslideshow');
        let n = 0;
        let timeout;

        function showslides() {
            slides.forEach((slide) => {
                slide.style.opacity = '0'; // Ascunde toate slide-urile
            });

            slides[n].style.opacity = '1'; // Afișează slide-ul curent

            // Treci la următorul slide după 12 secunde
            timeout = setTimeout(() => {
                n = (n + 1) % slides.length; // Incrementare circulară
                showslides();
            }, 12000);
        }

        // Inițializează slideshow-ul la montarea componentei
        showslides();

        // Săgeata stângă - Trecere la slide-ul anterior
        const sageatastanga = document.querySelector('.stanga');
        sageatastanga.addEventListener('click', () => {
            if (timeout) clearTimeout(timeout); // Oprește slideshow-ul automat
            n = (n - 1 + slides.length) % slides.length; // Decrementare circulară
            showslides();
        });

        // Săgeata dreaptă - Trecere la slide-ul următor
        const sageatadreapta = document.querySelector('.dreapta');
        sageatadreapta.addEventListener('click', () => {
            if (timeout) clearTimeout(timeout); // Oprește slideshow-ul automat
            n = (n + 1) % slides.length; // Incrementare circulară
            showslides();
        });
    }); // Dependențele sunt goale pentru a rula efectul doar o dată, la montare


    return (
        <>
            <Header />
            <div className="slideshow bg-black w-full min-[840px]:h-[550px] h-[450px] flex">
                <div className="imgslideshow"><img src={principala} alt="principala img" /></div>
                <div className="imgslideshow"><img src={secundara} alt="imag 2" /></div>
                <div className="imgslideshow"><img src={treia} alt="imag 3" /></div>
                <div className="imgslideshow"><img src={patra} alt="imag 4" /></div>

                <div className="overlaysageata stanga left-0 md:bg-black bg-transparent opacity-50 h-full w-[100px] flex items-center justify-center z-10">
                    <h1 className="text-6xl text-gray-600 opacity-100 cursor-pointer rotate-180">&#10151;</h1>
                </div>

                <div className="overlaysageata dreapta absolute right-0 md:bg-black bg-transparent opacity-50 h-full w-[100px] flex items-center justify-center z-10">
                    <h1 className="text-6xl text-gray-600 opacity-100 cursor-pointer">&#10151;</h1>
                </div>

                <div className="boxinfo absolute h-fit w-fit bg-gray-500 bg-opacity-40 p-5 px-10 bottom-5 md:right-40 right-10 z-20 text-center flex flex-col items-center">
                    <h1 className="text-2xl pb-2 pointer-events-none">Ceasuri GUESS</h1>
                    <small className="text-base pb-2 pointer-events-none">la cea mai inalta calitate</small>
                    <div className="boxinfosmall h-fit w-fit bg-gray-600 p-1 rounded flex">
                        <a href="#produse"><h3 className="font-serif text-white">PRODUSE</h3></a>
                        <img src={apasa} alt="apasa" className="w-10 absolute right-12 -rotate-45 pointer-events-none" />
                    </div>
                </div>
            </div>





            <div className="w-full h-fit flex items-center justify-center">
      <img src={etichetacumpara} alt="eticheta-cumpara" className="w-6" />
      <h1 className="font-bold text-xl">Cumpara acum!</h1>
      <img src={etichetacumpara} alt="eticheta-cumpara" className="w-6" />
             </div>

             <div className="parteprodus h-fit p-20 w-full relative z-10 flex max-[920px]:flex-col  items-center justify-center gap-[13vw]" id="produse">
                {PRODUCTS.map((product) => 
                (
                <a href='/produs'><div key={product.id} className="bg-white drop-shadow-3xl h-[300px] w-[215px] flex flex-col items-center justify-center hover:scale-105 ease-in-out duration-300">
                    <img src={product.productImage} alt={product.productName} className="w-auto h-[200px]" />
                    <h2 className="text-xl font-bold cursor-pointer">{product.productName}</h2>
                    <p className="text-gray-700 absolute right-0 bottom-0">{product.price} LEI</p>
                    <div className=' absolute bottom-0 left-0 flex'><img src={check} alt='bifa' className='h-[20px] w-[25px]' /> <p className='text-green-400'>in stoc</p></div>
                </div></a>))}
            </div>

            <Footer />
        </>
    );
}

export default Acasa;
