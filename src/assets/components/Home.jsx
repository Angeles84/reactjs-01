import CardPizza from "./CardPizza";
import Header from "./Header";
import pizzas from '../components/pizzas.js'

const Home = () => {
  return ( 
    <>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          {
            pizzas.map(pizza => (
              <div className="col-12 col-md-6 col-lg-4" key={pizza.name}>
                <CardPizza 
                  img={pizza.img}
                  name={pizza.name}
                  price={pizza.price}
                  ingredients={pizza.ingredients}
                  desc={pizza.desc}
                />
              </div>
            ))
          }
        </div>
      </div>
    </>
   );
}
 
export default Home;