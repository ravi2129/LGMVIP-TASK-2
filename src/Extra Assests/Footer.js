import React from "react";
import "./style.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div class="contain">
          <div class="col">
            <h1>@RavirajDange</h1>
            <ul>
              <li>
                Contact: <a href="mailto:xyz@gmail.com">raviraj@gmail.com</a>
              </li>
              <li>
                Tel: <a href="tel: +123456789012">+91 937290515</a>
              </li>
            </ul>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
    </>
  );
}
export default Footer;
