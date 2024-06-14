import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div>
          <hr/>
        </div>
      <div>
        <div>
          <div>
            <h1>
            Funiro.
            </h1>
            <p>400 University Drive Suite 200 Coral Gables,</p>
            <p>FL 33134 USA</p>
          </div>

          <div>
            <div>
              <ul>
                <li>Links</li>
                <li>
                  Home
                </li>
                <li>
                  Shop
                </li>
                <li>
                  About
                </li>
                <li>
                  Contact
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>Help</li>
                <li>
                  Payment Options
                </li>
                <li>
                  Returns
                </li>
                <li>
                  Privacy Policies
                </li>
              </ul>
            </div>

            <div>
                <h2>Newsletter</h2>
                <input type="text" placeholder='Enter Your Email Address' />
                <a href="/">SUBSCRIBE</a>
            </div>
            
          </div>
        </div>

        <div>
          <hr/>
        </div>

        <div>
              <p>2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
