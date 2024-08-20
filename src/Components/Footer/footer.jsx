import React from 'react'
import "./footer.css";
import Logo2 from "../../assets/logo2.png";
import Footer from "../../assets/Footer.jpg";
import Payment from "../../assets/payments.png";

import { Link } from 'react-scroll';
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest } from "react-icons/fa";
const footer = () => {
  return (
    <div className='Footer'>
                                        {/* Section  */}
      <section >
        <div className='Parent'>
            <div className='Child1'>
                <img src={Logo2} alt='Logo'></img>
                <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem <br/>Ipsum passages, and more recently with desktop publishing software.</p>
                <div className='Child11'>
                <Link className='Child12'><FaFacebookF /></Link>
                <Link className='Child123'><FaTwitter /></Link>
                <Link className='Child123'><FaInstagram /></Link>
                <Link className='Child123'><FaPinterest /></Link>
                </div>
            </div>
            <div className='Child2'>
                <h3>NEWSLETTER SIGN UP</h3>
                <p>Enjoy 15% off* your first order when you sign up to our newsletter</p>
                <input type='email' placeholder='Your email address'>  
                </input>
                <button type="button">SUBSCRIBE</button>
                </div>
               
        </div>
      </section>
      
                                             {/* Section  */}
      
         <section>
            <div className='main-box'>
                <div className="box">
                    <h2>DELIVERY & RETURN</h2>
                    <li><a href="#">Check Order</a></li>
                    <li><a href="#">Delivery & Collection</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Delivery Return</a></li>

                </div>
                <div className="box">
                    <h2>DELIVERY & RETURN</h2>
                    <li><a href="#">Check Order</a></li>
                    <li><a href="#">Delivery & Collection</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Delivery Return</a></li>

                </div>
                <div className="box">
                    <h2>DELIVERY & RETURN</h2>
                    <li><a href="#">Check Order</a></li>
                    <li><a href="#">Delivery & Collection</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Delivery Return</a></li>

                </div>
               
            </div>

         </section>
     
                                             {/* Section  */}
<section className='Fcontent'>
<img src={Footer} alt='footer' className='Fimage'></img>
<h2>10% off New Revolve<br/>Customers</h2>
<p>Free Express Shipping</p>
<button type="button">SHOP NOW</button>
</section>
                                             {/* Section  */}

        <section>
        <p className='last'>© Jaroti. All Rights Reserved.</p>    
        <img src={Payment} alt='payment' className='Pimage'></img>
        </section>                                   

    </div>
  )
}

export default footer
