import BlocoReserva from "../components/BlocoReserva";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoMapOutline } from "react-icons/io5";
import { IoWifiSharp } from "react-icons/io5";
import { BiLike } from "react-icons/bi";

function Reserva(){
    return(
        <div className="mt-14 flex flex-col justify-start items-center ">
            <h1 className="text-6xl text-center font-Asfalto mb-14 tracking-wider">RESERVE SUA MESA</h1>
            <div className=" shadow-xl w-px500 p-12 mb-16">
            <div className="flex gap-6 justify-center items-center">
                <input className="border  outline-none text-gray-500 border-grayFormulario placeholder:text-gray-500 py-4 px-6 w-80" placeholder="Seu nome" type="text"/>
                <input className="border outline-none text-gray-500 border-grayFormulario placeholder:text-gray-500 py-4 px-6 w-80" placeholder="Seu e-mail" type="text"/>
                <select className="border outline-none border-grayFormulario text-gray-500 py-4 px-6 w-80" id="escolhaServico" name="opcao">
                    <option className=" text-gray-500" value="opcao1" disabled>Selecione um serviço</option>
                    <option className="text-gray-500" value="opcao2">Jantar no local</option>
                    <option className="text-gray-500" value="opcao3">Local</option>
                    <option className="text-gray-500" value="opcao4">Evento</option>

                </select>
            

            </div>
            <div className="mt-6 flex justify-center items-center">
                
                <textarea className="w-vh200 h-36 px-6 py-4 border text-gray-500 border-grayFormulario placeholder:text-gray-500 outline-none" id="mensagem" placeholder="Mensagem" ></textarea>
               
            </div>
            <div className="flex mt-8 gap-20">
            <div className='py-8 px-6 h-20 w-64 bg-yellow-300  ml-8 flex justify-center items-center cursor-pointer hover:bg-green-400 hover:text-white'>
                <p className='font-black tracking-widest '>ENVIAR MENSAGEM</p>

            </div>
            <div className="w-80 h-20 flex justify-center items-center text-9xl">
                <p className="text-gray-500">&quot;</p>
            <p className="text-gray-500 text-2xl font-light ">Por favor reserve a sua mesa com pelo menos 1 dia de antecedência.</p>
            </div>
            
            
            </div>
            </div>
            <div className="flex gap-3">
            <BlocoReserva icone={<HiOutlineShoppingBag />} titulo="Entrega grátis" texto="Se você pedir mais de 3 pizzas, teremos prazer em entregá-las gratuitamente."/>
            <BlocoReserva icone={<IoMapOutline />} titulo="Localização Conveniente" texto="Nossa pizzaria fica no centro da cidade e é de fácil acesso mesmo nos finais de semana."/>
            <BlocoReserva icone={<IoWifiSharp />} titulo="Wifi grátis" texto="Disponibilizamos Wi-Fi gratuito para todos os clientes e visitantes da nossa pizzaria."/>
            <BlocoReserva icone={<BiLike />} titulo="Melhor serviço" texto="O cliente é nossa prioridade número 1, pois oferecemos atendimento ao cliente de alto nível."/>
            </div>

            

        </div>
    )
}
export default Reserva;