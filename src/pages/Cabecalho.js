import LogoPizza from './../img/logo-inverse-198x66.png'
import { MdLocalPhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa";

function Cabecalho(){
    return(
        <div className="h-screen py-1 -mt-11 bg-grayCabecalho">
            <div className=" my-20 flex gap-10  px-24">
                <div className="">
                <h1 className="font-bold tracking-wider text-2xl mb-7 text-white">O que nós oferecemos</h1>
                <ul className=" w-72 font-normal gap-2 grid grid-cols-2 text-grayFormulario">
                    <li className="">Pizzas</li>
                    <li>Bebidas</li>
                    <li>Hambúrger</li>
                    <li>Frutos do mar</li>
                    <li>Saladas</li>
                    
                </ul>
                </div>
                <div className=" ml-8">
                <h1 className="font-bold tracking-wider text-2xl mb-7 text-white">Informação</h1>
                <ul className=" w-72 font-normal gap-2 grid grid-cols-2 text-grayFormulario">
                    <li>Sobre nós</li>
                    <li>Nosso cardápio</li>
                    <li>Últimas notícias</li>
                    <li>Contate-nos</li>
                    
                    
                </ul>
                </div>

                <div className=" w-screen">
                <h1 className="font-bold tracking-wider text-2xl mb-7 text-white">Reserva</h1>
                <p className="text-grayEscuro mb-2">Faça já sua reserva.</p>
                <div className="flex">
                <input className="border border-white flex-grow placeholder:text-grayFormulario px-5 py-4 outline-none  bg-grayInput" type="text" placeholder="Seu e-mail"/>
                <div className="py-4 px-7 bg-yellow-300 flex justify-center items-center  hover:bg-green-400 hover:text-white cursor-pointer">
                    <p className="font-bold px-2 text-sm">ENVIAR</p>
                </div>
                </div>
                </div>

            </div>

            <div className="border border-gray-600 px-24 py-12 flex justify-center">
                <div className="flex justify-center items-center w-screen">
                    <img className='w-40' src={LogoPizza}/>
                    <div className='text-white ml-10 flex justify-center items-end gap-3'>
                    <span className='text-2xl bg-grayFundo px-1 py-4  h-8  flex justify-center items-center 
                    text-center m-0 text-white '><MdLocalPhone /></span>
                    <p className='text-xl'>+55 (81) 99739-5011</p>
                    <div className='flex gap-3 ml-10'>
                        <span className='text-2xl bg-grayFundo px-1 py-4  h-8  flex justify-center items-center 
                    text-center m-0 text-white '><IoMailOutline /></span>
                        <p className='text-xl'>pizzahouse@gmail.com.br</p>
                    <div className='flex gap-3 ml-10'>
                    <span className='text-2xl bg-grayFundo px-1 py-4  h-8  flex justify-center items-center 
                    text-center m-0 text-white '><FaFacebookF /></span>
                    <span className='text-2xl bg-grayFundo px-1 py-4  h-8  flex justify-center items-center 
                    text-center m-0 text-white '><FaTwitter /></span>
                    <span className='text-2xl bg-grayFundo px-1 py-4  h-8  flex justify-center items-center 
                    text-center m-0 text-white '><TiSocialInstagram /></span>
                    <span className='text-2xl bg-grayFundo px-1 py-4  h-8  flex justify-center items-center 
                    text-center m-0 text-white '><FaGooglePlusG /></span>

                    </div>
                    </div>
                    </div>



                </div>
                
            </div>

            

        </div>
    )
}
export default Cabecalho;