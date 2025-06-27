

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const PhoneNumberInput = ({ label }) => {
  const [phone, setPhone] = useState('');

  return (
    <div>
      {label && (
        <> <label htmlFor="phone">Phone Number</label></>
      )}
      <PhoneInput
        country={'us'}
        value={phone}
        onChange={setPhone}
        inputStyle={{
          width: '100%',
          padding: '10px',
          paddingLeft: '50px',
          fontSize: '16px'
        }}
      />
    </div>
  );
};

export default PhoneNumberInput;
