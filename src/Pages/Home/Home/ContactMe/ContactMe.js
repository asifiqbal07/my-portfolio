import React, { useRef } from 'react';
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import MapG from './MapG';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const contactForm = e.target;
    emailjs
      .sendForm(
        "service_02mfs3u",
        "template_9m7assf",
        form.current,
        "6j6uBNEnLJ7caIz_P"
      )
      .then(
        (result) => {
          if (result.text) {
            toast.success('Done')
            contactForm.reset();
            // toast.success("Message sent", {
            //   style: {
            //     border: "1px solid #26537C",
            //     backgroundColor: "#14233B",
            //     padding: "16px",
            //     color: "#ffffff",
            //   },
            // });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className='lg:mx-40 mx-auto lg:mt-8'>
      <h5 className='font-light text-4xl text-center my-5'>Contact Me</h5>

      <div className='lg:flex items-center mt-7 '>

        <div className='lg:w-1/2 lg:mr-4 shadow mx-5 lg:mx-0 '>
          {/* <Map></Map> */}
          <MapG></MapG>
        </div>


        <div className="lg:w-1/2 bg-white lg:ml-4 my-5 shadow mx-5 lg:mx-0 p-5">
        <h5 className=' text-2xl mb-5 w-full'>Write a message:</h5>
          <form
            data-aos="fade-up"
            data-aos-duration="1500"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className=''>
              <input
                className='bg-white input w-full my-1'
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
            </div>
            <hr />
            <input
              className='bg-white input w-full my-1'
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
            />
             <hr />
            <div>
              <textarea className=" textarea  my-1 w-full" placeholder="Your Message"></textarea>
            </div>
            <hr />
            <button type="submit" value="Send" className="rounded-none btn bg-[#213038] border-0  hover:bg-white hover:text-[#213038] hover:border-[1px] hover:border-[#213038] mt-4">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;