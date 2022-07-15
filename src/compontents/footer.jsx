
import '../App.css';
import React from 'react';
import { AiFillFacebook,AiFillTwitterSquare } from "react-icons/ai";
import { useTranslation, Trans } from "react-i18next";
import { useContext } from "react";
import AuthContext from './useContext';




function Footer() {
         {/* useTranslation this import to store context convrt*/}

  const [t, i18n] = useTranslation()
       {/* ref this import to store context*/}


  const { styleDir} = useContext(AuthContext);

  return (
    <>
     {/* ref this in order to convert dir */}

 <footer  ref={styleDir} >
    <div class="container_fluid buttoms">
      <div class="row ">
      <div class="col-12 col-sm-6  lastfooter1">
      <h3>{t('bosta')}</h3>
      <p>help@trust.com</p>
      <span className='iconface'><AiFillFacebook/> <AiFillTwitterSquare/></span>
    </div>
    <div class="col-12 col-sm-6 lastfooter1">
      <h3 style={{color:'red'}}>{t('Shipments')}</h3>
      <p>{t('Pricing')}</p>
    </div>
<h5 id='lastfooter2' className='col'>Copyright ©2022 Hnzaker.com</h5>            
          </div>
        
        </div>

  </footer>
      
 
    </>
  );
}

export default Footer;







