import BlocoRelatos from "../components/BlocoRelatos";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Teste(){
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
        <div className="h-screen w-screen flex justify-center items-start pl-16">
          
        <Carousel responsive={responsive}>
  <div><BlocoRelatos nome="Bill Johnson" relato="PizzaHouse tem pizza incrível. Você não só é servido com uma ótima atitude, mas também ganha uma pizza deliciosa por um ótimo preço!" funcao="Cliente"/></div>

  <div><BlocoRelatos nome="Aaron Wilson" relato="PizzaHouse é a pizzaria mais antiga da cidade e é bem administrada e conta com uma equipe. Os preços são ótimos e me permitem continuar voltando." funcao="Cliente"/></div>

  <div><BlocoRelatos nome="Ashley Fitzgerald" relato="Sou um verdadeiro viciado em pizza e mesmo quando estou em casa prefiro as suas pizzas a todas as outras. Eles têm um sabor incrível e são muito acessíveis." funcao="Cliente"/></div>

  <div><BlocoRelatos nome="Henrique Ameida" relato="Pizza muito boa, vale muito a pena" funcao="Funcionário"/></div>

  <div><BlocoRelatos nome="Carolina Silva" relato="PizzaHouse tem pizza incrível. Você não só é servido com uma ótima atitude, mas também ganha uma pizza deliciosa por um ótimo preço!" funcao="Cliente"/></div>
  
</Carousel>


        </div>
    )
}
export default Teste;