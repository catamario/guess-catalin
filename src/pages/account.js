import Header from '../components/header.js';
import Footer from '../components/footer.js';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { getAuth, signOut } from "firebase/auth";


function Account() {
    const navigate = useNavigate();

    // Verificăm dacă utilizatorul este autentificat
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        const timpexpirare = localStorage.getItem('tokenExpiration');
        if (!token || (timpexpirare && Date.now() > Number(timpexpirare))) {
            // Redirecționează la login dacă nu există token
            localStorage.removeItem('authToken');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('tokenExpiration');
            navigate('/login');
        }
    }, [navigate]);

    const handleLogout = (e) => {
        e.preventDefault();
        const auth = getAuth();
        signOut(auth).then(() => {
            // Logout-ul a fost efectuat cu succes
            localStorage.removeItem('authToken');
            localStorage.removeItem('userEmail');
            window.location.href = '/login';  // Redirecționează utilizatorul la pagina de login
        }).catch((error) => {
            console.error("Logout failed", error);
        });
    };
    

    const userEmail = localStorage.getItem('userEmail');

    return(
        <>
        <Header />
        <div className='w-full relative h-[500px] relative flex flex-col items-center pl-10 pr-10 '>

            {/* PRIMA CASETA */}
            <div className='w-fit relative h-[200px] flex flex-col items-center top-[5px]'>
                <div className='text-right'>

                     {/* MESAJUL */}    <h1 className='text-black text-[42px] drop-shadow-3xl cursor-default'>Bine ai venit,</h1>
                   {/* EMAILUL*/}     <small className='text-black drop-shadow-3xl text-xl'>{userEmail}</small>

                </div>
            </div>



            {/* A DOUA CASETA */}
            <div className='max-[1440px]:w-fit w-2/4 relative h-fit rounded-3xl p-2 bg-[#c4c4c4] flex flex-col items-center top-5 cursor-default'>
                <div className='text-right'>

                     {/* MESAJUL */}    <h3 className='text-white text-[14px] sm:text-[16px] md:text-[20px] text-center drop-shadow-3xl'>Suntem extrem de bucuroși să te avem alături de noi în această comunitate pasionată de eleganță și precizie. Fiecare ceas pe care îl oferim este mai mult decât un simplu accesoriu; este o declarație de stil și o fereastră către un univers de artizanat de înaltă calitate.
                                        </h3>

                </div>
            </div>
    
<br /> <br /><br /> <br />

            {/* A TREIA CASETA */}
            <div className='w-fit relative h-[200px] flex flex-col items-center top-[5px]'>
                <div className='text-left'>

                     {/* MESAJUL */}    <h1 className='text-black text-[42px] drop-shadow-3xl cursor-default'>Doresti sa parasesti acest cont?</h1>
                     <a href='#' onClick={handleLogout}><small className='text-black drop-shadow-3xl rounded-full bg-red-400 p-2 font-bold'>Apasa aici</small></a>

                </div>
            </div>

        </div>

<br /> <br /><br /> <br /> <br />
        <Footer />
        </>
    )
}

export default Account;