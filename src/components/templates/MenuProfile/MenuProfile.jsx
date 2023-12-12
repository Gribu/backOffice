import styles from './MenuProfile.module.scss';

import imageProfile from '../../../assets/images/icon-profile.jpg';
import iconArrow from '../../../assets/images/icon/arrow-down.svg';
import { Image } from '../../atoms/Image/Image';

export const MenuProfile = () => {
  return (
    <div className={styles.menuProfile__container}>
        <div className={styles.menuProfile__userLogin}>
            <div className={styles.menuProfile__userImage}>
                <Image src={imageProfile} alt={'image'}/>
                <p>Admira Brom</p>
            </div>
            <div className={styles.menuProfile__userArrow}>
                <Image src={iconArrow} alt="" />
            </div>
        </div>
    </div>
  )
}
