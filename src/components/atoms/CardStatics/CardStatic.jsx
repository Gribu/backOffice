import PropTypes from 'prop-types'; 
import styles from './CardStatic.module.scss';
import { Image } from '../Image/Image';

export const CardStatic = ({ data }) => {
  console.log(data);

  return (
    <div className={styles.cardStatic}>
      <Image src={data.icon} alt='icon' />
      <p>{data.text}</p>
      <p>{data.staticsNumber}</p>
    </div>
  );
};
CardStatic.propTypes = {
  data: PropTypes.shape({
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    staticsNumber: PropTypes.number.isRequired,
    // Agrega otros tipos y requerimientos según sea necesario
  }).isRequired,
};