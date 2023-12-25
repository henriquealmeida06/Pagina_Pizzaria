import ComponentLogo from "./ComponentLogo";
import ContatoNav from "./ContatoNav";
function NavBar(){
    return(
        <div className="h-20 overflow-hidden grid grid-cols-2 ">

            <ComponentLogo/>
            <ContatoNav/>
            
            
            

        </div>
    )
}
export default NavBar;