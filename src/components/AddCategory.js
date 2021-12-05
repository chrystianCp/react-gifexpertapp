import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
    
    const [inputvalue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputvalue.trim().length > 2) {
            setCategories( cat => [ inputvalue, ...cat ] );
            setInputValue('');
            
        }
               
        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputvalue}
                onChange={ handleInputChange }
            />
        </form>
    )
}

AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
  }

export default AddCategory
