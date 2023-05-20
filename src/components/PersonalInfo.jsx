import React from 'react';
import "../components/Sidebar.css";
import '../components/Personalinfo.css';
import EmailIcon from '@mui/icons-material/Email';
import ApartmentIcon from '@mui/icons-material/Apartment';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InfoIcon from '@mui/icons-material/Info';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PersonIcon from '@mui/icons-material/Person';





function PersonalInfo(props) {
    return (
        <>
            <div className="personal_info">

                <div class="infoLogo" >
                    <EmailIcon />
                </div>
                <div class="person_info" >
                    <p>view email address</p>
                </div>
                <div class="person_info_related" >
                    <p>Business</p>
                </div>

                <div class="infoLogo" >
                    <ApartmentIcon />
                </div>
                <div class="person_info" >
                    <p>view HQ Number</p>
                </div>
                <div class="person_info_related" >
                    <p>HQ</p>
                </div>

                <div class="infoLogo" >
                    <LocalPhoneIcon />
                </div>
                <div class="person_info" >
                    <p>view Mobile address</p>
                </div>
                <div class="person_info_related" >
                    <p>Mobile</p>
                </div>

                <div class="infoLogo" >
                    <CreditCardIcon />
                </div>
                <div class="person_info" >
                    <p>Seniority</p>
                </div>
                <div class="person_info_related" >
                    <p>C-Level</p>
                </div>

                <div class="infoLogo" >
                    <LocationOnIcon />
                </div>
                <div class="person_info" >
                    <p>Location</p>
                </div>
                <div class="person_info_related" >
                    <p>New York, USA</p>
                </div>

                <div class="infoLogo" >
                    <PersonIcon />
                </div>
                <div class="person_info" >
                    <p>Gender</p>
                </div>
                <div class="person_info_related" >
                    <p>Female</p>
                </div>
                
                <div class="infoLogo" >
                    <CurrencyExchangeIcon />
                </div>
                <div class="person_info" >
                    <p>Funding</p>
                </div>
                <div class="person_info_related" >
                    <p>$8M</p>
                </div>

                <div class="infoLogo" >
                    <InfoIcon/>
                </div>
                <div class="person_info" >
                    <p>Skills</p>
                </div>
                <div class="person_info_related" >
                    <p style={{wordWrap:"break-word"}} >Microsoft Office, Microsoft Excel, Leadership, Microsoft Word, Research, Powerpoint, Public Speaking, Social Media, Marketing</p>
                </div>

               


            </div>
        </>
    )
}

export default PersonalInfo