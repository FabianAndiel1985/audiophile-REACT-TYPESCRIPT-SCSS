import styles from "./home.module.scss";
import Navbar from "../components/shared/navbar.component";
import { grabWelcomeProduct } from "../services/services";
import ProductDescription from "../components/shared/productDescription.component";
import CategoryBox from "../components/shared/category.component";

const App = (): JSX.Element => {

  const [welcomeProduct] = grabWelcomeProduct(4);

  return (
    <>
    <Navbar/>
    <div
    className={styles.imageContainer}
    >
       <ProductDescription  
        productName={welcomeProduct.name} 
        category={welcomeProduct.category} 
        description={"Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast."}
       />
      
    </div>
    <CategoryBox
      categoryName={"Kategorie"}
    />
    
    </>
  );
}

export default App;
