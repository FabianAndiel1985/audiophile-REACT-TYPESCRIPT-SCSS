import styles from "./home.module.scss";
import Navbar from "../components/shared/navbar.component";
import { grabWelcomeProduct, grabCategories } from "../services/services";
import ProductDescription from "../components/shared/productDescription.component";
import CategoryBoxes from "../components/shared/categoryBoxes.compontent";
import ProductBox from "../components/shared/productBox.component";
import ProductBoxes from "../components/home/productBoxes.component";
import Footer from "../components/shared/footer.component";


const App = (): JSX.Element => {

  const [welcomeProduct] = grabWelcomeProduct(4);
  const categories: string[] = Array.from(grabCategories());

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

    <main className={styles.mainContainer}>

      <div>
        <CategoryBoxes
          categories = {categories}
        />
      </div>


      <div
      className={styles.firstBox}
      >
        <ProductBox
        productTitle={"zx7 speaker"}
        />
      </div>

      <ProductBoxes/>

    </main>
    <Footer/>
    </>
  );
}

export default App;
