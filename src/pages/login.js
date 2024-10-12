import Header from '../components/header.js';
import Footer from '../components/footer.js';
import registerimg from '../SURSE/imagini-use/register.jpg';
import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";  // Importă metodele de autentificare din Firebase
import { useNavigate } from 'react-router-dom';
import app from '../firebase';  // Importă instanța Firebase

function Login() {


    //    LOGARE CU FIREBASE //    LOGARE CU FIREBASE // LOGARE CU FIREBASE
    const [loginData, setLoginData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [resetEmail, setResetEmail] = useState(''); // State pentru emailul de resetare parolă
    const [message, setMessage] = useState('');
    const navigate = useNavigate();  // folosește pentru redirecționare

    const handleLogin = (e) => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, loginData.email, loginData.password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Obține tokenul de autentificare
                user.getIdToken().then((token) => {
                    // Stochează tokenul în localStorage
                    const timpexpirare= Date.now() + 3600*1000;
                    localStorage.setItem('tokenExpiration', timpexpirare)
                    localStorage.setItem('authToken', token);
                    localStorage.setItem('userEmail', user.email);
                    // Redirecționează la /account
                    navigate('/account');
                });
            })
            .catch((error) => {
                setError("Adresa email sau parola greșită");
            });
    };
    
    //    LOGARE CU FIREBASE//    LOGARE CU FIREBASE//  LOGARE CU FIREBASE

    const [isOpen, setIsOpen] = useState(false);
    const onClose = (e) => {
        e.preventDefault();
        setIsOpen(false); // Setează overlay-ul pe "invisibil"
      };
    const onOpen = (e) => {
        e.preventDefault();
        setIsOpen(true); // Setează overlay-ul pe "visibil"
    };
    const handlePasswordReset = (e) => {
        e.preventDefault();
        const auth = getAuth();
        sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                setMessage('Emailul de resetare a fost trimis.');
            })
            .catch((error) => {
                setMessage('Eroare la trimiterea emailului de resetare.');
            });
    };

    return (
        <>
            <Header />
            {error && <p className="font-bold text-red-700 absolute top-[170px] left-1/2 translate-x-[-50%] bg-red-950 rounded">{error}</p>}
            {isOpen && (<div className="fixed inset-0 bg-[rgba(75,85,99,0.5)] flex justify-center items-center z-50" onClick={onClose}>
            <div className="bg-white relative p-6 rounded drop-shadow-3xl w-full max-w-md" onClick={(e) => e.stopPropagation()}>
                <button className="absolute top-0 right-0 font-bold text-xl" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-xl mb-4">Recuperare parolă</h2>
                        <form onSubmit={handlePasswordReset}>
                            <input 
                                type="email" 
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)} 
                                placeholder="Introdu adresa de email"
                                className="bg-gray-200 w-full h-10 mb-3 drop-shadow-3xl rounded border-[#844E19] border-b-2 text-sm md:text-base"
                                required
                            />
                            <input 
                                type="submit" 
                                value="Trimite email de resetare"
                                className="bg-[#844E19] h-[50px] rounded text-center font-bold w-full mt-2 md:mt-10" 
                            />
                        </form>
                        {message && <p className="mt-4 text-sm text-center">{message}</p>}
            </div>
        </div> )}
            <div className='w-full h-[539px] relative flex items-center justify-center'>
                <div className='relative flex md:w-[800px] md:h-[400px] max-[768px]:h-[300px] w-[400px] rounded-xl drop-shadow-3xl'>
                    <div className='relative flex flex-col h-full w-1/2 bg-gray-300 items-center'>
                        <h1 className='font-bold text-center mt-5 text-5xl font-italianno'>Login</h1>
                        <div className='relative flex flex-col w-3/4 h-52 mt-2 md:mt-10'>
                            <form onSubmit={handleLogin}>
                                <input type='email' value={loginData.email}
                                    onChange={e => setLoginData({ ...loginData, email: e.target.value })} 
                                    placeholder='&#9993; Enter your email'
                                    className='bg-gray-200 w-full h-10 mb-3 drop-shadow-3xl rounded border-[#844E19] border-b-2 text-sm md:text-base'
                                    required />
                                <input type='password' value={loginData.password}
                                    onChange={e => setLoginData({ ...loginData, password: e.target.value })}
                                    placeholder='&#128274; Enter your password'
                                    className='bg-gray-200 w-full h-10 drop-shadow-3xl rounded border-[#844E19] border-b-2 text-sm md:text-base'
                                    required />
                                <a href='' className='text-sm md:text-base' onClick={onOpen}>Ai uitat parola?</a>
                                <input type='submit' value="LOGIN" className='bg-[#844E19] h-[50px] rounded text-center font-bold w-full mt-2 md:mt-10' />
                            </form>
                            <p className='text-center mt-2 text-xs md:text-base cursor-default'>Inca nu ti-ai facut cont? <br /> <a href='/register' className='font-bold'>Fa-ti acum.</a></p>
                        </div>
                    </div>

                    <div className='relative h-full w-1/2 bg-gray-500'>
                        <img src={registerimg} className="w-full h-full" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
