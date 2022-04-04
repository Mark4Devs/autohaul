import React from "react";



function Contacts(){

    return <div className="contacts_wrapper">
        <div className="contacts_heading">
            <h3>How to find us</h3>
            <p>
            Have questions or ready to use our service? We will be glad to see you at our place.
            </p>
        </div>
        <div className="contacts_info">
            <div className="address_info">
                <h5>Address</h5>
                <span>Country, city, Rexford st. 11/9</span>
            </div>
            <div className="phone_info">
                <h5 className="mb-4">Phone</h5>
                <span>+380 66-391-66-05</span>
            </div>
            <div className="schedule_info">
                <h5 className="mb-4">Work Hours</h5>
                <span>Mon-Fri: 9:00 - 20:00</span>
                <span>Sat: 9:00 - 18:00</span>
                <span>Sun: day off</span>
            </div>
            <div className="email_info">
                <h5>Email</h5>
                <span>sixletters@gmail.com</span>
            </div>
        </div>

    </div>
}

export default Contacts;