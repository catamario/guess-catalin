import React, { useState } from 'react';

import Header from "../components/header";
import Footer from "../components/footer";
import ceasul1 from '../SURSE/stockpoze/ceasul1.png';
import ceasul2 from '../SURSE/stockpoze/ceasul2.png';
import ceasul3 from '../SURSE/stockpoze/ceasul3.png';
import ceasul1argint from '../SURSE/stockpoze/ceasul1-argint.jpg';
import ceasul2argint from '../SURSE/stockpoze/ceasul2-argint.jpg';
import ceasul2fade from '../SURSE/stockpoze/ceasul1fade.png';
import ceasul1fade  from '../SURSE/stockpoze/ceasul2fade.png';

function Produs() {

    const [img1, setImg1] = useState(ceasul1);
    const [img2, setImg2] = useState(ceasul2);

    const culoaregalbena = () => {
        setImg1(ceasul1);
        setImg2(ceasul2);
    };

    const culoareargint = () => {
        setImg1(ceasul1argint); 
        setImg2(ceasul2argint); 
    };

    const culoarefade = () => {
        setImg1(ceasul1fade); 
        setImg2(ceasul2fade); 
    };

    const schimbaculoare = () => {
        if(img1 === ceasul1)
        {
            setImg1(ceasul1argint); 
            setImg2(ceasul2argint); 
        }
        if(img1 === ceasul1argint)
        {
            setImg1(ceasul1fade);
            setImg2(ceasul2fade);
        }
        if(img1 === ceasul1fade)
        {
            setImg1(ceasul1);
            setImg2(ceasul2);
        }
    };

    return (
        <>
            <Header />
            <div className="bg-[rgba(202,212,212,0.75)] flex  w-screen h-fit pt-[100px] pb-[100px]">
                {/* Secțiunea imagini */}
                <div className="w-1/2 h-full items-end flex flex-col">
                    <img src={img1} alt="ceas" id="img1" className="min-[800px]:mr-[85px] max-[800px]:w-[200px] p-[10px]" height="250px" width="250px" />
                    <div className="flex max-[800px]:flex-col flex-row">
                        <img src={img2} alt="ceas2" id="img2" className="h-[300px] w-[200px] p-[10px] object-cover" />
                        <img src={ceasul3} alt="ceas3" className="h-[300px] w-[200px] object-cover p-[10px]" />
                    </div>
                </div>

                {/* Secțiunea descriere produs */}
                <div className="ml-[20px] w-[40vw] flex flex-col justify-center">
                    <h2 className="text-[48px] underline cursor-default">Ceas GUESS</h2>
                    <small className="font-bold text-gray-500 text-[32px]">349,99 RON</small>
                    <br /><br />
                    <small className="text-medium">Un ceas Guess este un accesoriu de modă elegant și sofisticat, renumit pentru designul său modern și atrăgător.</small>
                    <br /><h3 className="font-bold">Descriere</h3> <br />
                    <p>Acesta combină elemente de stil clasic cu tendințe contemporane, fiind adesea decorat cu detalii rafinate precum cristale și finisaje metalice de înaltă calitate.
                        Guess oferă o gamă variată de modele atât pentru bărbați, cât și pentru femei, fiecare ceas fiind proiectat să fie atât funcțional, cât și estetic plăcut.
                    </p>

                    <br /><h3 className="font-bold">TRANSPORT</h3> <br />
                    <p>Transport oriunde în ROMANIA!</p>

                    {/* Secțiunea butoane pentru culori */}
                    <div className="w-fit h-[50px] flex space-x-2">
                        <button
                            id="buton1"
                            onClick={culoaregalbena}
                            className="w-[25px] h-[25px] bg-yellow-400 border-none rounded-[5px] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        ></button>
                        <button
                            id="buton2"
                            onClick={culoareargint}
                            className="w-[25px] h-[25px] bg-gray-200 border-none rounded-[5px] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        ></button>
                        <button
                            id="buton4"
                            onClick={culoarefade}
                            className="w-[25px] h-[25px] bg-purple-500 border-none rounded-[5px] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] cursor-pointer"
                        ></button>
                        <button
                            id="buton3"
                            onClick={schimbaculoare}
                            className="transform bg-gray-300 translate-y-[-5%] rounded-md h-fit w-fit  border-black border-[0.5px] drop-shadow-3xl pl-1 pr-1"
                        >
                            Schimba
                        </button>
                    </div>

                    {/* Butonul de cumpărare */}
                    <div className="mt-4">
                        <button className="bg-[rgb(255,196,88)] text-[28px] font-[fantasy] rounded-[8px] px-[20px] py-[10px] shadow-[12px_12px_12px_black] border-[1.5px] cursor-pointer active:border-[wheat] active:scale-[1.05]">
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Produs;
