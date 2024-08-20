import React from 'react'
import "./intro.css";
import Makeup1 from "../../assets/Makeup1.jpg";
import Makeup2 from "../../assets/Makeup2.jpg";
import Bus from "../../assets/Bus.png";
import Dollar from "../../assets/Dollar.png";
import Headphone from "../../assets/Headphone.png";
import Box from "../../assets/Box.png";
import Ring1 from "../../assets/Ring1.jpg";
import Ring2 from "../../assets/Ring2.jpg";

const intro = () => {
  return (
    <div>
      <div className='parent4'>
      <div className='child41'>
        <h2 className='child42'>Ring Packs and<br/>Matching Sets</h2>
        <p className='child43'>NOW ONLY $7-LIMITED TIME ONLY</p>
        <button className='child44'>SHOP NOW</button>
      </div>
      <div className='Makeup'>
        <img src={Makeup1} alt='Makeup' className='Makeup1'></img>
        <img src={Makeup2} alt='Makeup' className='Makeup2'></img>
      </div>
      </div>

                                               {/* Section 1*/} 

      <div className='parent5'> 
      <div className='child51'>
        <img src={Bus} alt='Bus'></img>
        <h5>Free Shipping</h5>
        <p>Tell about your service.</p>
      </div>
      <div className='child51'>
        <img src={Dollar} alt='Dollar' className='Dollar'></img>
        <h5>Money Guarantee</h5>
        <p>Within 30 days for an exchange.</p>
      </div>
      <div className='child51'>
        <img src={Headphone} alt='Headphone' className='Headphone'></img>
        <h5>Online Support</h5>
        <p>24 hours a day, 7 days a week</p>
      </div>
      <div className='child51'>
        <img src={Box} alt='Box' className='Box'></img>
        <h5>Free In Store Returns</h5>
        <p>Items with a receipt can be returned</p>
      </div>

      </div>

                                               {/* Section 2*/}

      <section>
        <div className='parent6'>
        <div className='child61'>
          <img src={Ring1} alt='Ring1'></img>
          <div className='child62'>
          <p>UP TO 20 OFF</p>
          <h2>Love Your Way</h2>
          <button type='SHOP NOW'>SHOP NOW</button>
          </div>
        </div>

        <div className='child63'>
          <img src={Ring2} alt='Ring2'></img>
          <div className='child64'>
          <p>NEW COLLECTION</p>
          <h2>Mix Layered Necklace</h2>
          <button type='SHOP NOW'>SHOP NOW</button>
          </div>
        </div>
        </div>

      </section>

      <section>
        <div></div>
      </section>



    </div>
  )
}

export default intro
