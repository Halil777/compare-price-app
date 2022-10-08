import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="footer-col">
          <h3>Top products</h3>
          <li>Manage Reputation</li>
          <li>Power Tools</li>
          <li>Managed Website</li>
          <li>Marketing Service</li>
        </div>
        <div class="footer-col">
          <h3>Quick Links</h3>
          <li>Jobs</li>
          <li>Marketing Service</li>
          <li>Top Products</li>
          <li>Managed Reputation</li>
        </div>
        <div class="footer-col">
          <h3>Features</h3>
          <li>Jobs</li>
          <li>Marketing Service</li>
          <li>Top Products</li>
          <li>Managed Reputation</li>
        </div>
        <div class="footer-col">
          <h3>Resources</h3>
          <li>Jobs</li>
          <li>Marketing Service</li>
          <li>Top Products</li>
          <li>Managed Reputation</li>
        </div>
        <div class="footer-col">
          <h3>NewsLetter</h3>
          <p>You can trust us. We only send promo offers .</p>
          <div class="subscribe">
            <input type="text" placeholder="Your Email Address" />
            <a href="#" class="yellow">
              SUBSCRIBE
            </a>
          </div>
        </div>

        <div class="copyright">
          <p>
            Copyright @2022 All right reserved | This template is made by
            Gayypov Halil
          </p>
          <div class="pro-links">
            <i>
              <IconButton style={{ color: "orange" }}>
                <FacebookIcon />
              </IconButton>
            </i>
            <i>
              <IconButton style={{ color: "orange" }}>
                <InstagramIcon />
              </IconButton>
            </i>
            <i>
              <IconButton style={{ color: "orange" }}>
                <LinkedInIcon />
              </IconButton>
            </i>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
