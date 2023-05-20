import React, { useState } from 'react';
import Logo from '../images/Vector.png';
import ProfilePic from '../images/Avatar.png';
import '../components/Sidebar.css';
import SettingsIcon from '@mui/icons-material/Settings';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import ApartmentIcon from '@mui/icons-material/Apartment';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import PersonalInfo from './PersonalInfo';

function Sidebar() {
    return (
        <>
            <div className="main_container">
                <div className="sidebar">
                    <div className="sidebar_header">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="setting_icons">
                            <SettingsIcon style={{ paddingLeft: "85px", margin: "10px" }} />
                            <CloseIcon style={{}} />
                        </div>
                    </div>
                    <div className="sidebar_content">
                        <div className="sidebar_category">
                            <div className="icon_category">
                                <PersonIcon style={{ marginTop: "15px" }} />
                                <p>Prospect</p>
                            </div>
                            <div className="icon_category">
                                <ApartmentIcon style={{ marginTop: "15px" }} />
                                <p>Company</p>
                            </div>
                            <div className="icon_category">
                                <SearchIcon style={{ marginTop: "15px" }} />
                                <p>Find Similar</p>
                            </div>
                        </div>
                        <hr style={{ width: "95%", marginTop: "2px" }} />

                        <div className="person_details">
                            <div className="card_profile">
                                <img src={ProfilePic} alt="no img" />
                            </div>
                            <div className="card_socialMedia_icons">
                                <ul>
                                    <li> <FacebookIcon style={{ color: "#D9D9D9" }} /> </li>
                                    <li><InstagramIcon style={{ color: "#D9D9D9" }} /> </li>
                                    <li> <LinkedInIcon style={{ color: "#D9D9D9" }} /> </li>
                                    <li> <YouTubeIcon style={{ color: "#D9D9D9" }} /> </li>
                                    <li><GitHubIcon style={{ color: "#D9D9D9" }} />  </li>
                                    <li><TwitterIcon style={{ color: "#D9D9D9" }} />  </li>
                                </ul>
                            </div>
                        </div>
                        <div className="profile_details">
                            <p style={{ margin: "1px 5px", fontWeight: "bold" }} >Jese Leos</p>
                            <p style={{ margin: "1px 5px" }} >CEO</p>
                            <p style={{ margin: "1px 5px" }} >
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ullam hic dignissimos optio? Laboriosam facere, corporis modi unde corrupti nisi!
                            </p>
                        </div> 
                         <PersonalInfo/>
                    </div>

                </div>
            </div >
        </>
    )
}

export default Sidebar;