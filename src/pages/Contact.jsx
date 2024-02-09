import { LuMail } from 'react-icons/lu';
import { GiWorld } from 'react-icons/gi';
import { FaGithub, FaTwitter, FaPhoneAlt } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { FaLinkedinIn } from 'react-icons/fa6';
import { SiUpwork } from 'react-icons/si';
import { useNavigate } from 'react-router-dom';
import { notification } from 'antd';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {Tooltip} from 'antd';

const Contact = () => {
  const navigate = useNavigate()
  const [inputFields, setInputFields] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
    phone: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
    phone: ''
  })

  const handleChange = e => {
    const { name, value } = e.target

    setInputFields({
      ...inputFields,
      [name]: value
    })

    setErrors({
      ...errors,
      [name]: ''
    })
  }

  const onSubmit = e => {
    e.preventDefault()

    // validate inputs
    const newErrors = {}
    if (inputFields.name.trim() === '') {
      newErrors.name = 'Name is required!'
    }
    if (inputFields.subject.trim() === '') {
      newErrors.subject = 'Subject is required!'
    }
    if (inputFields.message.trim() === '') {
      newErrors.message = 'Message is required!'
    }
    if (inputFields.email.trim() === '') {
      newErrors.email = 'Email is required!'
    }
    if (inputFields.phone.trim() === '') {
      newErrors.phone = 'Phone is required!'
    }

    // check for errors
    if (Object.values(newErrors).some(error => error !== '')) {
      setErrors(newErrors)
    } else {
      console.log('successfull!!!!!!!!')
      // send the email to the client
      const serviceId = 'service_k8h5j7r'
      const templateId = 'template_l54457h'
      const publicKey = 'I7vBHtDJ2VoaVM5hB'

      // create new object that contains dynamic template params
      const templateParams = {
        from_name: inputFields.name,
        to_name: 'Daisy Dawn',
        from_subject: inputFields.subject,
        message: inputFields.message,
        from_phone: inputFields.phone,
        from_email: inputFields.email
      }

      // send email using emailjs
      emailjs
        .send(serviceId, templateId, templateParams, publicKey)
        .then(response => {
          console.log('Email sent successfully', response)
          notification.success({
            message: 'Message Sent Successfully!',
            description:
              'Your Message was successfully sent and we will get back to you shortly.'
          })
          navigate('/')
        })
        .catch(error => {
          console.log('Error sending mail', error)
          notification.error({
            message: 'Error sending mail',
            description:
              'There has been an error sending your message, while rectifying the error, please refresh and try again after a few seconds.'
          })
        })
    }
  }

  const contactList = [
    {
      icon: <FaPhoneAlt />,
      href: '#',
      text: '123-456-789'
    },
    {
      icon: <LuMail />,
      href: '#',
      text: 'info@furniture.com'
    },
    {
      icon: <GiWorld />,
      href: '#',
      text: 'www.furnitures.com'
    }
  ]

  const socialIconList = [
    {
      icon: <FaGithub />,
      href: "#",
      style: "#bd2c00",
      title:"github"
    },
    {
      icon: <GrInstagram />,
      href: "#",
      style: "#C13584",
      title:"instagram"
    },
    {
      icon: <FaTwitter />,
      href: "#",
      style: "#55acee",
      title:"twitter"
    },
    {
      icon: <FaLinkedinIn />,
      href: "#",
      style: "#0077B5",
      title:"linkedIn"
    },
    {
      icon: <SiUpwork />,
      href: "#",
      style: "#0085CA",
      title:"upwork"
    },
  ];
  return (
    <div className="flex flex-col justify-center  min-h-screen xl:mx-[4rem] 2xl:mx-[8rem] lg:mx-[2rem] mx-[1rem] my-[5rem]  font-nunito">
      <div className="flex flex-col items-center">
        <h2 className="text-lead text-center font-bold text-[30px] lg:text-[45px]">
          Contact
        </h2>
        <p className='text-center mt-[1rem] lg:mb-[3rem] mb-[1rem] text-bGrey lg:w-[50%] w-[90%] font-semibold text-[16px] lg:text-[20px]'>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item.
        </p>
      </div>

      {/* FORM COMPONENT */}
      <h2 className='text-lead font-bold lg:text-[30px] text-[25px] text-left mb-[0.7rem] lg:mb-[1.5rem]'>
        Get a quote
      </h2>
      <form className='' onSubmit={onSubmit}>
        <div className='grid w-full gap-[1.3rem] grid-cols-1 lg:grid-cols-2 xl:grid-cols-3'>
          {/* First Column */}
          <div className=''>
            {/* NAME SECTION */}
            <p className='text-lead lg:text-[20px] text-[16px] font-semibold mb-2'>
              Name
            </p>
            <input
              name='name'
              id='name'
              value={inputFields.name}
              onChange={handleChange}
              className='w-full bg-lynx p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none'
            />
            {errors.name && (
              <p className='text-red-600 text-[0.75rem] lg:text-[1rem]'>
                {errors.name}
              </p>
            )}

            {/* SUBJECT SECTION */}
            <p className='text-lead lg:text-[20px] text-[16px] font-semibold mb-2'>
              Subject
            </p>
            <input
              name='subject'
              id='subject'
              value={inputFields.subject}
              onChange={handleChange}
              className='w-full bg-lynx p-[0.4rem] md:p-[0.6rem] capitalize rounded-[10px] mb-5 border-none outline-none'
              type='text'
            />
            {errors.subject && (
              <p className='text-red-600 text-[0.75rem] lg:text-[1rem]'>
                {errors.subject}
              </p>
            )}

            {/* MESSAGE SECTION */}
            <p className='text-lead lg:text-[20px] text-[16px] font-semibold mb-2'>
              Message
            </p>
            <textarea
              name='message'
              id='message'
              value={inputFields.message}
              onChange={handleChange}
              className='w-full bg-lynx p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none'
              cols='30'
              rows='7'
            ></textarea>
            {errors.message && (
              <p className='text-red-600 text-[0.75rem] lg:text-[1rem]'>
                {errors.message}
              </p>
            )}
          </div>

          <div>
            {/* SECOND SECTION */}
            {/* EMAIL SECTION */}
            <p className='text-lead lg:text-[20px] text-[16px] mt-[-20px] lg:mt-0 font-semibold mb-2'>
              Email
            </p>
            <input
              name='email'
              id='email'
              value={inputFields.email}
              onChange={handleChange}
              className='w-full bg-lynx p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none'
              type='email'
            />
            {errors.email && (
              <p className='text-red-600 text-[0.75rem] lg:text-[1rem]'>
                {errors.email}
              </p>
            )}

            {/* Phone SECTION */}
            <p className='text-lead lg:text-[20px] text-[16px] font-semibold mb-2'>
              Phone
            </p>
            <input
              name='phone'
              id='phone'
              value={inputFields.phone}
              onChange={handleChange}
              className='w-full bg-lynx p-[0.4rem] md:p-[0.6rem] rounded-[10px] mb-5 border-none outline-none'
              type='tel'
            />
            {errors.phone && (
              <p className='text-red-600 text-[0.75rem] lg:text-[1rem]'>
                {errors.phone}
              </p>
            )}
          </div>

          {/* THIRD SECTION */}

          <div className='bg-lynx flex flex-col xl:py-[6rem] py-[2rem] xl:px-[4rem] px-[1rem] gap-[3rem] rounded-[10px]'>
            {contactList.map((contact, index) => (
              <div key={index} className='flex gap-[1.2rem]'>
                <span className='size-[20px] text-lead w-[30px] h-[30px] rounded-full bg-steam flex items-center justify-center'>
                  {contact.icon}
                </span>
                <a href={contact.href}> {contact.text} </a>
              </div>
            ))}
            <div className='flex items-center  w-full md:w-fit md:justify-center gap-[2rem]'>
              {socialIconList.map((icon, index) => (
                <div
                  className='w-[28px] h-[28px]  rounded-full bg-lead flex justify-center items-center '
                  key={index}
                >
                   <Tooltip 
                    title={icon.title === "github" ? "github" :
                     icon.title === "instagram" ? "instagram" : 
                     icon.title === "twitter" ? "twitter" : 
                     icon.title === "linkedIn" ? "linkedIn" : 
                     icon.title === "upwork" ? "upwork" : "whatsapp"
                    }
                  >
                    <a href={icon.href} target="_blank" rel="noopener noreferrer">
                      <span className={`hover:text-[${icon.style}] size-[18px] text-lynx transition-all duration-300`}>{icon.icon}</span>
                    </a>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="flex justify-center items-center bg-lead rounded-[10px] md:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] lg:hidden xl:block transform hover:scale-[1.02] transition-all duration-300"
          >
            Send Now
          </button>
        </div>
        <button
          type='submit'
          className='justify-center items-center bg-lead rounded-[10px] md:w-1/2 lg:w-1/3 xl:w-1/2 w-full py-[12px] text-white text-center font-bold text-[18x] hidden lg:flex xl:hidden'
        >
          Send Now
        </button>
      </form>
    </div>
  )
}

export default Contact;
