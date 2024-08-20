import React from "react";
import "./topbar.css";
import { Link } from "react-scroll";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import Logo1 from "../../assets/Logo1.png";

const topbar = () => (
    <div>
      <section>
        <div className="parent1">
          <div className="child11">
            <p>
              ENJOY 15% OFF WITH TWO OR MORE ITEMS & FREE SHIPPING ON ALL
              ORDERS.
            </p>
          </div>

          <div className="child12">
            <select className="child13">
              <option value='ENGLISH'>ENGLISH</option>
              <option value='Français'>Français</option>
              <option value='Deutsch'>Deutsch</option>
            </select>
          </div>

          <div className="child14">
            <select className="child15">
              <option value='USD'>USD</option>
              <option value='EUR'>EUR</option>
            </select>
          </div>

        </div>
      </section>

                                      {/*Another Section  */}

      <section>
        <div className="parent2">
          <div className="child21">
            <span className="child22"><CiSearch />SEARCH</span>
            <span className="child23"><Link><CiLocationOn />FIND A STORE</Link></span>
          </div>
          <img src={Logo1} alt="Logo" className="child24"></img>
          <div className="child25">
            <select className="child26">
              <option value="Help">NEED HELP?</option>
              <option value="Chat"><b>Chat</b>: Let’s Chat</option>
              <option value="Phone"><b>Phone</b>: +1-234-345-86357</option>
              <option value="Email"><b>Email</b>: jaroti@jewelry.com</option>
              <option value="Orders"><b>Order</b>: Track Your Order</option>
            </select>
          </div>
        </div>
      </section>
    </div>
);

export default topbar;
