import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import images from '../../constants/images'
import { createCard } from '../../methods/postData';

function BankDetails() {
    const history = useNavigate();
    const [data, setData] = useState(undefined);
    const handleChange = (e) => {
      setData({ ...data, [e.target.id]: e.target.value });
    };
    const handleSubmit = async () => {
      const res = await createCard(data);
      console.log(res);
      if (res) {
        history("/signin");
      }
    };
  return (
    <>
      <div className="form-section">
        <div className="form-container">
          <img className="form-img" src={images.bank} alt="" />
          <div className="form" onChange={(e) => handleChange(e)}>
            <h1 className="form-title">Fill Up Bank Details</h1>
            <input
              type="text"
              autoComplete="off"
              id="account_name"
              placeholder="Name On Card"
              required
            />
            <input
              type="text"
              autoComplete="off"
              id="account_no"
              placeholder="Card Number"
              required
            />
            <legend style={{'opacity':"0.5",'fontSize':"12px",'margin-left':"-14rem",'margin-bottom':"-1rem"}}>Expiration Date</legend>
            <input id="MMYY"type="date" name="expire" placeholder='Expiration'/>
            <input
              type="password"
              autoComplete="off"
              id="CVV"
              placeholder="Card Verification Code"
              required
            />
            <input
              type="password"
              autoComplete="off"
              id="secret"
              placeholder="Enter a secret key"
              required
            />
            <input
              type="password"
              autoComplete="off"
              id="password"
              placeholder="Re-enter the secret key"
              required
            />
      
            <button onClick={handleSubmit} className="Sproduct-btn rounded">
              Confirm
            </button>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default BankDetails
