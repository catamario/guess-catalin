import Acasa from './pages/acasa.js';
import Politica from './pages/politica.js';
import Contact from './pages/contact.js';
import Login from './pages/login.js';
import Register from './pages/register.js';
import Account from './pages/account.js';
import Produs from './pages/produs.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function Totalmente()
{
return(
  <BrowserRouter>
    <Routes>
      <Route index element = {<Acasa />} />
      <Route path='/acasa' element = {<Acasa />} />
      <Route path='/politica' element = {<Politica />} />
      <Route path='/contact' element = {<Contact />} />
      <Route path='/login' element = {<Login />} />
      <Route path='/register' element = {<Register />} />
      <Route path='/account' element = {<Account />} />
      <Route path='/produs' element = {<Produs />} />
    </Routes>
  </BrowserRouter>
);
}

export default Totalmente;