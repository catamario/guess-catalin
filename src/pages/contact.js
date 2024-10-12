import Header from '../components/header.js';
import Footer from '../components/footer.js';
import contactimg from '../SURSE/logos/Untitled_logo_4_free-file.jpg';

function Contact()
{
    return(
        <>
        <Header />
        <div className='w-full h-[400px] max-[640px]:h-[200px] relative flex items-center justify-center pl-10 pr-10 '>
            <div className='bg-[#748F80] overflow-hidden sm:h-[300px] h-[150px] w-[950px] rounded-full relative flex items-center justify-center'>
            <img src={contactimg} className='rounded-full relative min-[640px]:scale-75 max-[640px]:h-[100px] ml-5' />
                <div className='w-full relative pt-5 sm:pt-10 text-white'>
                <h3 className='text-white sm:text-base text-xs font-bold text-center relative'>GUESS ELITE shop:</h3>
                <br />
                <h3 className='text-white sm:text-base text-[10px] font-bold text-center relative'>&#x1F4CD; : 123 Consectetur at ligula 10660</h3>
                <h3 className='text-white sm:text-base text-[10px] font-bold text-center relative'> &#9742; : 010-020-0340</h3>
                <h3 className='text-white sm:text-base text-[10px] font-bold text-center relative'>&#9432; : info@company.com</h3>
                </div>
            </div>
        </div>
        <div className='w-full block h-[250px] relative text-center items-center justify-center pl-10 pr-10 '>
            <h1 className='text-xl font-bold'>Produsele noastre</h1>
            <small>Produsele noastre GUESS oferă o gamă variată de ceasuri care combină stilul modern cu eleganța atemporală. Fiecare ceas este realizat cu atenție la detalii, folosind materiale de înaltă calitate, pentru a reflecta spiritul inovator și sofisticat al brandului. De la modele casual, perfecte pentru utilizarea zilnică, la piese statement, ideale pentru ocazii speciale, ceasurile GUESS sunt expresia echilibrului între funcționalitate și designul rafinat. Indiferent de preferințele tale, ceasurile noastre aduc un plus de stil și personalitate fiecărui moment.</small>
        </div>
        <Footer />
        </>
    )
}

export default Contact;