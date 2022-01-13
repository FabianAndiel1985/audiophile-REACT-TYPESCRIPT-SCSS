import CustomButton from "./customButton.component";
import styles from "./productBox.module.scss";




type AppProps = {
  productTitle?: "zx7 speaker" | "yx1 picture" | "yx1 earphones" ;
}; 

const ProductBox = 
({productTitle}:AppProps): JSX.Element => {

 
  return (
    
   <div
    className={productTitle === "zx7 speaker" ? styles.productBoxZX7 : (productTitle === "yx1 picture" ?  styles.productBoxPicture  : styles.productBoxPlain )}
   >
       {
        productTitle && productTitle !== "yx1 picture"  &&
       <div
        className={styles.productBox_text}
       >    
            <h4>{productTitle}</h4>
            <CustomButton
            theme={"black"}
            />
       </div>

    }
   </div> 
  )
}

export default ProductBox;