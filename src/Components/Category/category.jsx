import React from 'react'
import './category.css'
import k40 from '../../assets/k40.jpg'
import k41 from '../../assets/k41.jpg'
import k42 from '../../assets/k42.jpg'
import k43 from '../../assets/k43.jpg'
import k44 from '../../assets/k44.jpg'
import k46 from '../../assets/k46.jpg'



const category = () => {
  return (
    <div>
      <div className='CATEGORY'>
      <h2>SHOP BY CATEGORY</h2>
      </div>
                                        {/* List items section */}

      <section>
      <div className="Whole">
          <div className='Row1' >
          <li><a href="#">Jewelry</a></li>
          <li><a href="#">Earring Accessories</a></li>
          <li><a href="#">Jewellery Sets</a></li>
          <li><a href="#">Rope Chain</a></li>
          <li><a href="#">Sensitive Jewellery</a></li>
          </div>
          <div className='Row1'>
          <li><a href="#">90s</a></li>
          <li><a href="#">Figaro Chain</a></li>
          <li><a href="#">Link Chain</a></li>
          <li><a href="#">Rose Gold Essentials</a></li>
          <li><a href="#">Silver Essentials</a></li>
          </div>
          <div className='Row1'>
          <li><a href="#">Boutique Collection</a></li>
          <li><a href="#">Gold Essentials</a></li>
          <li><a href="#">Mariner Chain</a></li>
          <li><a href="#">Rose Gold Plated Sterling Silver</a></li>
          <li><a href="#">Sterling Silver</a></li>
          </div>
         <div className='Row1'>
          <li><a href="#">Cubic Zirconia</a></li>
          <li><a href="#">Gold Plated Sterling Silver</a></li>
           <li><a href="#">Precious Pieces</a></li>
          <li><a href="#">Semi Precious Elements</a></li>
         <li><a href="#">Shop all</a></li>
         </div>
        </div>
        </section>
                                        {/* Product items section */}

        <section>
          <div className='parent20'>
            <img src={k40} alt='Product'></img>
            <img src={k41} alt='Product'></img>
            <img src={k42} alt='Product'></img>
            <img src={k43} alt='Product'></img>
            <img src={k44} alt='Product'></img>
            <img src={k46} alt='Product'></img>
            <button className='child201'>INSTASHOP</button>
          </div>
        </section>
        
            
          
    </div>
  )
}

export default category
