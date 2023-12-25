import BlocoRelatos from "../components/BlocoRelatos";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";


function Relatos(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
        
    return(
        <div className="h-screen  mt-28  flex flex-col items-center ">
            <h1 className="text-6xl font-Asfalto text-center mb-16">O QUE AS PESSOAS DIZEM</h1>
            <div className="flex gap-12">
     <BlocoRelatos relato="PizzaHouse tem ótimas pizzas. Você não só é servido com uma ótima atitude e entrega uma pizza deliciosa, como também consegue um ótimo preço." nome="Henrique Almeida" funcao="Estudante"/>
     <BlocoRelatos relato="PizzaHouse tem ótimas pizzas. Você não só é servido com uma ótima atitude e entrega uma pizza deliciosa, como também consegue um ótimo preço." nome="Henrique Almeida" funcao="Estudante"/><BlocoRelatos relato="PizzaHouse tem ótimas pizzas. Você não só é servido com uma ótima atitude e entrega uma pizza deliciosa, como também consegue um ótimo preço." nome="Henrique Almeida" funcao="Estudante"/>
            
           
            </div>
            
            

        </div>
    )
}
export default Relatos;