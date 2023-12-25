import BlocoMenu from "../components/BlocoMenu";
import Salada from './../img/menu-1-370x278.jpg'
import Pizza from './../img/menu-2-370x278.jpg'
import Burguer from './../img/menu-3-370x278.jpg'
import Sobremesa from './../img/menu-4-370x278.jpg'
import Bebida from './../img/menu-5-370x278.jpg'
import Frutos from './../img/menu-6-370x278.jpg'
import { BiLeaf } from "react-icons/bi";
import { LuPizza } from "react-icons/lu";
import { GiHamburger } from "react-icons/gi";
import { IoIceCreamOutline } from "react-icons/io5";
import { BiSolidDrink } from "react-icons/bi";
import { GiSushis } from "react-icons/gi";

function Menu(){
    return(
        <div className="mt-24 h-screen mb-10">
            <h1 className="font-Asfalto text-center  text-5xl">Nosso Menu</h1>
            <div className=" mt-20 ml-24 mr-24  grid grid-cols-3 items-start justify-items-center gap-8 overflow-hidden ">
                <BlocoMenu Logo={<BiLeaf/>} wallpaper={Salada} alimento="Saladas"/>
                <BlocoMenu Logo={<LuPizza />} wallpaper={Pizza} alimento="Pizzas"/>
                <BlocoMenu Logo={<GiHamburger />} wallpaper={Burguer} alimento="Hambúrguer"/>
                <BlocoMenu Logo={<IoIceCreamOutline />} wallpaper={Sobremesa} alimento="Sobremesas"/>
                <BlocoMenu Logo={<BiSolidDrink />} wallpaper={Bebida} alimento="Bebidas"/>
                <BlocoMenu Logo={<GiSushis />} wallpaper={Frutos} alimento="Frutos do mar"/>

            </div>

        </div>
    )
}
export default Menu;