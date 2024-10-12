import anpc from '../SURSE/anpc.png'

function Footer()
{
  return(
<footer className="h-[200px] sm:h-[250px] w-full bg-gray-200 drop-shadow-3xl z-20 relative flex">
      <div className=" w-full h-[100px] flex items-center justify-between lg:pl-56 lg:pr-56 pl-14 pr-14">
        <a href="/politica"><h6 className="font-serif text-[2vw] md:text-[1rem]">Despre noi</h6></a>
        <a href="/politica"><h6 className="font-serif text-[2vw] md:text-[1rem]">Returnarea produselor</h6></a>
        <a href="/politica"><h6 className="font-serif text-[2vw] md:text-[1rem]">Termeni si conditii</h6></a>

      </div>

      <h1 className="font-italianno sm:text-[3.5vw] text-[36px] absolute bottom-0 left-1/2 -translate-x-[50%]">GUESS Elite</h1>
      <h1 className="font-italianno sm:text-[1.5vw] text-[12px] absolute bottom-0 right-0">GUESS Elite © 2020-2024. Toate drepturile rezervate.</h1>
  
      <img src={anpc} alt="anpc" className="h-[10vw] md:h-20 absolute left-0 bottom-5 sm:bottom-0 ml-10 mb-10 pointer-events-none" />
  </footer>
  );
}

export default Footer;