import styles from "./productBoxes.module.scss";
import ProductBox from "../shared/productBox.component";


type AppProps = {
  productTitle: string;
}; 


const ProductBoxes = 
  (): JSX.Element => {

  return (

    <> 
    <div
      className={styles.container}
    >
      <div 
        className={styles.box}
      >
        <ProductBox
         productTitle={"yx1 picture"}
        />
      </div>
      <div
        className={styles.box}
      >
        <ProductBox
         productTitle={"yx1 earphones"}
        />
      </div>
    </div>
    </>
  )
}

export default ProductBoxes;