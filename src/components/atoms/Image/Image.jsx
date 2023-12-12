import { useEffect, useState } from 'react';
import styles from './Image.module.scss';

export const Image = ({src, alt, title=''}) => {

    const [propsImage, setPropsImage] = useState({
        srcImage: '',
        altImage: '',
        titleImage: ''
    });

    useEffect(() => {
        setPropsImage(
            {...propsImage, 
                srcImage: src !== '' ? src : '',
                altImage: alt !== '' ? alt : '',
                titleImage: title && title.trim() !== '',
            }
        )
    }, [])

    
  return (
    <figure className={styles.image__container}>
        <img
            src={propsImage.srcImage} 
            alt={propsImage.altImage}
            title={propsImage.titleImage ? title : undefined}
        />
    </figure>
  )
}
