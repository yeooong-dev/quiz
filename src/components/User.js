import React from 'react';

const User = ({item})=> {

    return(
      <div key = {item.id} className='m_style'>
        <div className='todotitle'>
        {item.title}-{item.memo}
        </div>     
      </div>
    );
  };

  export default User;