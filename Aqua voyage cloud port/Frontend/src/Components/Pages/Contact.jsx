import React from 'react';
import CustomNavbar from '../CustomNabar';
import './ContactUs.css';
import { Typography } from '@mui/material';

const ContactUs = () => {
  return (
    <div className="container">
      <header>
        <CustomNavbar />
      </header>
      <div className='empty'>
        
      </div>
      <div className='details'>

      </div>
      <main>
        <section className="contact-form">
          <h1>Contact Us </h1>
          <p>If you have any questions or concerns, please feel free to reach out to us:</p>
          <p></p>
          <form>
            <label htmlFor="name">Your Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Your Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Your Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
      <footer className="sticky-footer">
        <Typography variant="body2" color="text.secondary" style={{ color: 'white' }}>
          &copy; 2022 AquaVoyage CloudPort. All rights reserved.
        </Typography>
      </footer>
    </div>
  );
};

export default ContactUs;




// import CustomNavbar from "../CustomNabar";


// const Contact=()=>
// {
//     return (

//         <div className="Container">
//             <header>
//             <CustomNavbar/>
//             </header>
//             <main>
//                 <section>
//                     <div>
//                         Contact
                    
//                     </div>
//                 </section>
//             </main>

//         </div>

//     );
// }
// export default Contact

// import React from 'react';
// import CustomNavbar from '../CustomNabar';

// const ContactUs = () => {
//   return (
//     <div className="container">
//       <header>
//         <CustomNavbar />
//       </header>
//       <main>
//         <section className="contact-form">
//           <h1>Contact Us</h1>
//           <form>
//             <label htmlFor="name">Your Name:</label>
//             <input type="text" id="name" name="name" required />

//             <label htmlFor="email">Your Email:</label>
//             <input type="email" id="email" name="email" required />

//             <label htmlFor="message">Your Message:</label>
//             <textarea id="message" name="message" rows="4" required></textarea>

//             <button type="submit">Send Message</button>
//           </form>
//         </section>
//       </main>
//       <footer>
//         <p>&copy; 2022 AquaVoyage CloudPort. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default ContactUs;
