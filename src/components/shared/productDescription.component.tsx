import styles from "./productDescription.module.scss";
import OrangeButton from "./orangeButton.component";

type  ProductDescriptionProps = {
  productName: string,
  category: string,
  description: string,
}

const ProductDescription = ({productName,category,description}:ProductDescriptionProps): JSX.Element => {

  const darkBackground = true;

  return (
    <>
        <div 
        className={styles.container}
        >
            
        	<h3
             className={ darkBackground ? styles.container_headingSilver : styles.container_headingOrange}
            > 
                NEW PRODUCT
            </h3>
            

            <h1
            className={ darkBackground ? styles.container_productNameBig : styles.container_productNameSmall}
            > 
                {productName} <br/>
                {category}
            </h1>
            <p
              className={ darkBackground ? styles.container_textSilver : styles.container_textBlack}
            > {description}r</p>
            <OrangeButton/>
        </div>
    </>
  );
}

export default ProductDescription;