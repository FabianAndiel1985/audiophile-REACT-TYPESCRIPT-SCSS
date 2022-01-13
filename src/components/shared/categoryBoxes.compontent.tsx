import styles from "./categoryBoxes.module.scss";
import CategoryBox from "./category.component";


type AppProps = {
  categories: string[];
}; 


const CategoryBoxes = 
({categories}:AppProps): JSX.Element => {



  return (
    <>
      <div
            className={styles.boxes}
          >
      {categories &&
        categories.map((category:string,i:number)=>{
          if( i == 0) {
            return(
            <CategoryBox
              categoryName={category}
              setMarginLeft={false}
              backgroundImage={require(`../../assets/shared/desktop/image-category-thumbnail-${category}.png`)}
            />
            )
          }

          else {
            return(
            <CategoryBox
            categoryName={category}
            setMarginLeft={true}
            backgroundImage={require(`../../assets/shared/desktop/image-category-thumbnail-${category}.png`)}
          />
          )
          }
          })
      }
          </div>
        
    </>
  );
}

export default CategoryBoxes;