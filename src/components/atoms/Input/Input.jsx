import { useEffect, useState } from 'react'

import PropTypes from 'prop-types';


export const Input = ({type, placeholder, id, onChange}) => {

  const [state,setState] = useState({
    id: '',
    type: '',
    placeholderState: ''
  })

    useEffect(() => {
        setState(
          {...state, 
            type, 
            placeholderState: placeholder, 
            id
          })
      
    }, []);
        
    const handleOnChange = (e) => {
       const value = e.target.value.trim();
       const id = e.target.id
       onChange({value, id})
    }

  return (
    <input 
        type={type !== '' ? type : 'text'} 
        placeholder={state.placeholderState !== '' ? state.placeholderState : 'Ingresa texto'}        
        id={id !== '' ? id : ''}
        onChange={handleOnChange}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
