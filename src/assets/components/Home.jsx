import CardPizza from "./CardPizza";
import Header from "./Header";

const Home = () => {
  return ( 
    <>
      <Header/>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
            name="Napolitana"
            price={5950}
            ingridients={["mozzarella", "carne", "aceituna", "orégano"]}
            img="/src/assets/img/pizza-1.jpg"
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <CardPizza
            name="Española"
            price={6950}
            ingridients={["mozzarella", "tomate", "rúcula"]}
            img="/src/assets/img/pizza-2.jpg"
          />
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <CardPizza
          name="Pepperoni"
          price={6750}
          ingridients={["mozzarella", "pepperoni"]}
          img="/src/assets/img/pizza-3.jpg"
        />
          </div>
        </div>
      </div>
    </>
   );
}
 
export default Home;