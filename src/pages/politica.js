import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Caseta from '../components/politicbox.js';
import politicaimg from '../SURSE/logos/Untitled_logo_1_free-file.jpg';

function Politica(){
    return(
        <>
        <Header />
        <div className='w-full h-[400px] max-[640px]:h-[200px] relative flex items-center justify-center pl-10 pr-10 '>
            <div className='bg-[#96ABAC] sm:h-[300px] h-[150px] w-[950px] rounded-full relative flex items-center justify-center drop-shadow-3xl'>
            <h3 className='w-[160px] md:text-base text-[10px] relative text-center ml-5'>Informațiile prezentate mai jos se referă la politica site-ului. </h3>
            <img src={politicaimg} className='rounded-full relative min-[640px]:scale-75 max-[640px]:w-[100px]' />
            <h3 className='w-[160px] md:text-base text-[10px] relative text-center mr-7'>Aceste politici sunt create pentru a asigura o experiență sigură și consistentă pentru utilizatori, respectând norme de utilizare corectă.</h3>
            </div>
        </div>
        <div className='w-full h-[400px] relative flex items-center justify-between lg:pl-48 lg:pr-48'>
            <Caseta titlu='Politica de returnare' continut='   În cazul în care nu sunteți complet mulțumit de achiziția dvs., aveți posibilitatea să returnați produsul în termen de 14 zile calendaristice de la data primirii'/>
            <Caseta titlu='Garanția Produselor' continut='       Toate produsele noastre beneficiază de o garanție de 24 de luni, conform legislației în vigoare.'/>
            <Caseta titlu='Contact și Asistență' continut='       Echipa noastră de asistență clienți este disponibilă pentru a răspunde tuturor întrebărilor dvs. legate de produse, comenzi sau alte solicitări.'/>
        </div>
        <Footer />
        </>
    );
}

export default Politica;