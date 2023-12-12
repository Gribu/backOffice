import { Link } from "react-router-dom"
import logo from "../../../assets/images/gribu-icon.png";
import styles from "./Logo.module.scss";
import { Image } from "../Image/Image";



export const Logo = () => {
  return (
    
    <Link className={styles.logo__link} to={"/"}>
      <Image className={styles.log__image} src={logo} alt={"icon gribu"}/>
    </Link>
  )
}
