import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "./Footer.css";
import { Typography } from "@material-ui/core";


export const Footer = () => {
 return (
   <footer style={{ backgroundColor: "#011627", color: "#FDFFFC" }}>
     <div className="logoFooter">Future Skills</div>
 
     <div className="columnsFooter">
       <div className="leftColumnFooter" >
       <Typography>Social Media</Typography>
         <div className="socialMEdiaIcons">
           <FacebookIcon />
           <TwitterIcon />
           <InstagramIcon />
           <LinkedInIcon />
         </div>
       </div>
 
       
       <div className="rightColumnFooter">
         <Typography>Company</Typography>
         <nav>
           <ul className="aboutUsList">
             <li>
               <a href="">About us</a>
             </li>
             <li>
               <a href="">Contact us</a>
             </li>
           </ul>
         </nav>
       </div>
     </div>
     <p className="copyright">© 2021 FUTURE SKILLS</p>
   </footer>
 );
}
