import search from '../SURSE/search.png';
import account from '../SURSE/account.png'
import cart from '../SURSE/cart.png'
import menu from '../SURSE/menu.png'
import { useEffect } from 'react';

function Header() {

    useEffect(() => {
      let meniu = document.getElementById('butonmeniu');
      let mini = document.getElementById('minimenu');
      let navigatie = document.getElementById('tabs');
      meniu.addEventListener('click', () => {
        if(window.innerWidth <= 640 && mini.classList.contains('hidden'))
           {mini.classList.remove('hidden');
             mini.classList.add('flex');
            navigatie.classList.remove('max-[640px]:hidden');
            navigatie.classList.add('max-[640px]:flex');}
        else  
        {mini.classList.remove('flex');
           mini.classList.add('hidden');
           navigatie.classList.remove('max-[640px]:flex');
           navigatie.classList.add('max-[640px]:hidden');}


           window.addEventListener('resize', () => 
            {
              if (window.innerWidth > 640) {
                // Ascunde meniul automat când fereastra este mai mare de 640px
                mini.classList.remove('flex');
                mini.classList.add('hidden');
                navigatie.classList.remove('max-[640px]:flex');
                navigatie.classList.add('max-[640px]:hidden');
              }
            });
      })


      return () => {
        meniu.addEventListener('click', () => {
          if(window.innerWidth <= 640 && mini.classList.contains('hidden')) 
            {mini.classList.remove('hidden');
               mini.classList.add('flex');}
          else  
          {mini.classList.remove('flex');
             mini.classList.add('hidden');}
        })
      };
    })





    return (
      <>
      <header className="w-[100vw] h-[130px] fixed flex z-40 bg-white drop-shadow-3xl">
      <div className="logo w-[600px] h-full flex items-center sm:justify-center sm:ml-0 ml-[10px] cursor-default">
        <h1 className="font-italianno sm:text-[3.5vw] text-[36px]">GUESS Elite</h1>
      </div>
  
      <div className="bg-white hidden fixed top-[130px] w-full h-[60px] shadow-inner z-30" id="minimenu"></div>

      <div id="tabs" className="taburi min-[640px]:flex max-[640px]:hidden items-center w-full text-[#535353]        max-[639px]:absolute max-[639px]:w-full max-[639px]:text-center max-[639px]:justify-between       max-[640px]:top-[150px]        max-[640px]:pl-10 max-[640px]:pr-10 z-40">
        <a href="/acasa" className="min-[640px]:ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Acasa</a>
        <a href="/produs" className="ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Produse</a>
        <a href="/politica" className="ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Politica</a>
        <a href="/contact" className="ml-[5vw] xl:text-[32px] min-[640px]:text-[22px] text-[18px] cursor-pointer hover:scale-110 transition xl:ml-[150px]">Contact</a>
      </div>
  
      <div className="icons w-[250px] h-full ml-auto flex items-center justify-center">
      <a href="">
          <img 
            src={search} 
            alt="Search" 
            className="md:w-[25px] w-[15px] md:h-[25px] h-[15px] mr-2.5 hover:scale-125 "  
          />
        </a>
        <a href="/account">
          <img 
            src={account} 
            alt="Account" 
            className="md:w-[25px] w-[15px] md:h-[25px] h-[15px] mr-2.5 hover:scale-125" 
          />
        </a>
        <a href="">
          <img 
            src={cart} 
            alt="Cart" 
            className="md:w-[25px] w-[15px] md:h-[25px] h-[15px] hover:scale-125" 
          />
        </a>
        
          <img 
            src={menu} 
            alt="Menu" 
            className="h-[50px] w-[50px] sm:hidden"
            id="butonmeniu"
          />
        
      </div>
    </header>
    <div className="spatiuocupatheader relative w-full h-[130px] z-0"></div>
    </>
    );
  }

  export default Header;