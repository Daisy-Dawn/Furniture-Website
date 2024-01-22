import React, { useState } from 'react'

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
        contactNumber: "",
        email: "",
        otherNotes: "",
    })
    const [errors, setErrors] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        pinCode: "",
        contactNumber: "",
        email: "",
        otherNotes: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setErrors({
            ...errors,
            [name]: "",
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        //validate inputs
        const newErrors = {};
        if (formData.firstName.trim() === "") {
            newErrors.firstName = "First Name is required!"
        }
        if (formData.lastName.trim() === "") {
            newErrors.lastName = "Last Name is required!"
        }
        if (formData.companyName.trim() === "") {
            newErrors.companyName = "Company Name is required!"
        }
        if (formData.address.trim() === "") {
            newErrors.address = "Address is required!"
        }
        if (formData.city.trim() === "") {
            newErrors.city = "City is required!"
        }
        if (formData.state.trim() === "") {
            newErrors.state = "State is required!"
        }
        if (formData.country.trim() === "") {
            newErrors.country = "Country is required!"
        }
        if (formData.pinCode.trim() === "") {
            newErrors.pinCode = "Pin Code is required!"
        }
        if (formData.contactNumber.trim() === "") {
            newErrors.contactNumber = "Contact Number is required!"
        }
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required!"
        }
        if (formData.otherNotes.trim() === "") {
            newErrors.otherNotes = "Other Notes is required!"
        }

        //check for errors
        if(Object.values(newErrors).some((error) => error !== '')) {
            setErrors(newErrors);
        } else {
            //form submission successful
            console.log('Form submitted', formData);
        }

    }
  return (
    <div className='xl:px-[5rem] md:px-[2rem] px-[1rem] font-nunito md:py-[3rem] py-[2rem]'>
        <h2 className='capitalize text-center text-lead font-bold text-[40px] mb-[2rem] '> Cart <span className='text-brown'>Checkout</span> </h2>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className=''>
                <h2 className='text-lead font-extrabold text-[25px] mb-[1rem] '>Billing Details</h2>
                <form onSubmit={handleSubmit} className='flex w-full flex-col gap-[1rem]' action="">
                {/* FIRST NAME */}
                <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> First Name</p>
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.firstName} onChange={handleChange} name="firstName" id="firstName" />
                    {errors.firstName && <p className='text-red-600 text-[16px]'> {errors.firstName} </p> }
                </div>

                {/* LAST NAME */}
                <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> Last Name</p>
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.lastName} onChange={handleChange} name="lastName" id="lastName" />
                    {errors.lastName && <p className='text-red-600 text-[16px]'> {errors.lastName} </p> }
                </div>

                 {/* COMPANY NAME */}
                 <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> Company Name</p>
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.companyName} onChange={handleChange} name="companyName" id="companyName" />
                    {errors.companyName && <p className='text-red-600 text-[16px]'> {errors.companyName} </p> }
                </div>

                {/* ADDRESS */}
                <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> Address</p>
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.address} onChange={handleChange} name="address" id="address" />
                    {errors.address && <p className='text-red-600 text-[16px]'> {errors.address} </p> }
                </div>

                {/* CITY */}
                <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> City</p>
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.city} onChange={handleChange} name="city" id="city" />
                    {errors.city && <p className='text-red-600 text-[16px]'> {errors.city} </p> }
                </div>

                {/* STATE */}
                <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> State</p>
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.state} onChange={handleChange} name="state" id="state" />
                    {errors.state && <p className='text-red-600 text-[16px]'> {errors.state} </p> }
                </div>

                {/* STATE */}
                <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> Country</p>                   
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.state} onChange={handleChange} name="country" id="country" />
                    {errors.country && <p className='text-red-600 text-[16px]'> {errors.country} </p> }
                </div>

                {/* STATE */}
                <div className='flex flex-col gap-2'>
                    <p className='text-lead text-[18px] font-semibold'> <span className='text-red-600'>*</span> Country</p>                   
                    <input className='md:bg-slate-200 bg-white lg:p-[0.7rem] p-[0.4rem] capitalize rounded-[10px] lg:mb-2 mb-0 border-none outline-none' type="text" value={formData.state} onChange={handleChange} name="country" id="country" />
                    {errors.country && <p className='text-red-600 text-[16px]'> {errors.country} </p> }
                </div>

                <button type="submit">Submit</button>
                    
                </form>
            </div>

            <div></div>
        </div>
    </div>
  )
}

export default CheckoutForm