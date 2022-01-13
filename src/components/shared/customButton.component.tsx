import styles from "./customButton.module.scss";

type AppProps = {
  theme: "orange" | "black";
}; 


const CustomButton = ({theme}:AppProps): JSX.Element => {
  
  return (
    <>
        <button 
        className={theme === "orange" ? styles.buttonOrange : styles.buttonBlack }
        >
            SEE PRODUCT
        </button>
    
    </>
  );
}

export default CustomButton;