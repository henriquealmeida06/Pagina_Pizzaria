import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { FaGooglePlusG } from "react-icons/fa6";

function ContatoNav(){
    return(
        <div className="bg-white h-20 font-roboto1 flex items-center justify-end pr-32 gap-9 absolute z-40 w-px700 ">
            
            <div className="flex gap-3"><BsFillTelephoneFill /><p className="text-gray-500 text-base  font-normal">+55 (81) 99739-5011</p></div>
            <div className="flex gap-3 text-base"><FaMapMarkerAlt /><li className="list-none">R. Jean Emile Favre, 1343 - Ipsep</li></div>
            <div className="flex text-base gap-2">
            <span className="bg-gray-200 p-2 text-sm cursor-pointer hover:bg-purple-900 hover:text-white"><FaFacebookF /></span>
            <span className="bg-gray-200 p-2 text-sm cursor-pointer hover:bg-purple-900 hover:text-white"><FaTwitter /></span>
            <span className="bg-gray-200 p-2 text-sm cursor-pointer hover:bg-purple-900 hover:text-white"><TiSocialInstagram /></span>
            <span className="bg-gray-200 p-2 text-sm cursor-pointer hover:bg-purple-900 hover:text-white"><FaGooglePlusG /></span>
            

            </div>
        </div>
    )

}
export default ContatoNav;