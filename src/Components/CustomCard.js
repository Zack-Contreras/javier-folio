import React from 'react';


const CustomCard = (props) => {
  return(
    <div style={{backgroundImage: `url(${props.photo})`}} className='custom-card'>
    </div>
  );
}

export default CustomCard;
