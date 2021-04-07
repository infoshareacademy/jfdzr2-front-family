import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";
import { Typography } from "@material-ui/core";
import logoWhite from "../../assets/img/logo_white.svg";
import { NavLink } from 'react-router-dom';


export const Footer = () => {
 return (
   <footer style={{ backgroundColor: "#011627", color: "#FDFFFC" }}>
     <div className="logoFooter"><NavLink exact to="/"><img src={logoWhite} alt="Future Skills" /></NavLink></div>

     <div className="columnsFooter">
       <div className="leftColumnFooter">
         <Typography>Social Media</Typography>
         <div className="socialMEdiaIcons">
           <FacebookIcon className="socialIcon" />
           <TwitterIcon className="socialIcon" />
           <InstagramIcon className="socialIcon" />
           <LinkedInIcon className="socialIcon" />
         </div>
       </div>

       <div className="rightColumnFooter">
         <Typography>Company</Typography>
         <nav>
           <ul className="aboutUsListFooter">
             <li>
               <a className="linkFooter" href="">
                 About us
               </a>
             </li>
             <li>
               <a className="linkFooter" href="">
                 Contact us
               </a>
             </li>
           </ul>
         </nav>
       </div>
     </div>
     <p className="copyright">© 2021 FUTURE SKILLS</p>
   </footer>
 );
}
