// import "./contact.css";

// const Contact = () => {
//   return <div>Contact</div>;
// };

// export default Contact;



import React, { useState, ChangeEvent, FormEvent } from 'react';
import './contact.css';
import OverlappingSquare from '../../components/overlappingsquare';


interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}


const ContactUs: React.FC = () => {
  // State to handle form inputs
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    // Ensure name is a key of FormData
    setFormData((prevState) => ({
      ...prevState,
      [name as keyof FormData]: value, // Type assertion here
    }));
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Process form submission, e.g., send data to server
    console.log('Form submitted:', formData);
  };

  return (
    <div>
    <div className="heading">
      <h1>Contact Us</h1>
      </div>
      <section className="contact-section">
      <div style={{display:'flex',gap:'10px', marginLeft:'25px'}}>
        <OverlappingSquare/>
          <h6 style={{marginTop:'10px'}}>Contact Us</h6>
        </div>
      
      
        <h2>Contact For Any Query</h2>
        
        
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="mainInput">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="col">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="col">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="col">
              <textarea
                name="message"
                placeholder="Message"
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
      
            <div className="col">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
        
      </section>
    </div>
  );
};

export default ContactUs;

// import React, { useState } from 'react';
// import './contact.css';
// // Define types for the form data (optional, for form validation or TypeScript type checks)
// interface FormData {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// const ContactUs: React.FC = () => {
//   const [formData, setFormData] = useState<FormData>({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log('Form submitted with data:', formData);
//   };

//   return (
//     <div className="contact">
//       <h1>Contact Us</h1>

//       <div className="main">
//         <div className="h1">
//           <h4>Contact Us</h4>
//         </div>
//         <h1>Contact For Any Query</h1>
//       </div>

//       <form className="input-row" onSubmit={handleSubmit}>
//         <div className="col">
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             placeholder="Your Name"
//           />
//           <input
//             type="text"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="Your Email"
//           />
//         </div>
//         <input
//           type="text"
//           name="subject"
//           value={formData.subject}
//           onChange={handleChange}
//           placeholder="Subject"
//         />
//         <textarea
//           name="message"
//           value={formData.message}
//           onChange={handleChange}
//           placeholder="Message"
//         ></textarea>
//         <button type="submit">Send Message</button>
//       </form>

     
//     </div>
//   );
// };

// export default ContactUs;

