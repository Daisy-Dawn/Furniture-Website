import axios from 'axios';
import { closePaymentModal, useFlutterwave, } from 'flutterwave-react-v3';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../features/addToCartSlice';
import { notification } from 'antd';
import { useEffect, useState } from 'react';
import { resetTotalPayment } from '../features/checkoutFormSlice';




export default function Flutterwave() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [totalAmount, setTotalAmount] = useState();
    const [cartItems, setCartItems] = useState();


    // total amount of the cart from redux store
    const totalCheckoutPayment = useSelector(
        (state) => state.checkoutForm.totalPayment
    );
    // total of everything on the checkout form
    const subTotal = totalCheckoutPayment;

    // all billing details called from redux store
    const { firstName, lastName, email, contactNumber, companyName,
        address, city, state, country, postalCode, otherNotes,
    } = useSelector((state) => state.form.checkoutFormData);

    // const totalProductToBeBought = useSelector(
    //     (state) => state.addTocart.cartListGroup
    // );
    // console.log(totalProductToBeBought)
    // all the input from billing details called to be sent to the database
    const billingData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        contactNumber: contactNumber,
        companyName: companyName,
        address: address,
        city: city,
        state: state,
        country: country,
        postalCode: postalCode,
        otherNotes: otherNotes,
    }

    // the api that sents the billing details
    const url = "https://freefurnitura.000webhostapp.com/reactApiPhp/api/billingDetails.php";
    const phpMailerAdmin = "https://freefurnitura.000webhostapp.com/reactApiPhp/api/invoiceToAdmin.php";



    // for email to the admin
    useEffect(() => {
        const getTotalAmount = sessionStorage.getItem('totalPayment')
        const getCartItems = JSON.parse(localStorage.getItem('cartItems'))
        setTotalAmount(getTotalAmount)
        setCartItems(getCartItems)
    }, [])
    // api to the backend 
    // the required destails to be sent to the backend
    const paymentPoroductDetails = {
        cartItems: cartItems,
        total: totalAmount,
        email: email,
    }




    const sendPHPMail = async () => {
        const promise = await axios.post(phpMailerAdmin, paymentPoroductDetails)
        // send to the server-side
        const response = await axios.post(url, billingData)
        if (promise && response === true) {
            console.log("success:");
        }
    }



    // flutterwave config for the payment modal
    const config = {
        public_key: "FLWPUBK_TEST-741d0a677821b7119d95573b1c444080-X",
        tx_ref: Date.now(),
        amount: subTotal,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: email,
            phone_number: contactNumber,
            name: firstName + "" + lastName,
        },
        customizations: {
            title: companyName,
            description: 'Payment for the product bought by you.',
            // we can use the company's logo here
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="flex mt-[1.5rem] justify-center">
            {/* the buttons that makes the neccessary payment option for flutterwave */}
            <button
                className="py-[1rem] px-[2rem] rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[18px] font-bold text-center flex items-center justify-center"
                onClick={() => {

                    handleFlutterPayment({

                        callback: (response) => {
                            // upon payment success post the payment details to the database if it does not exists yet!
                            if (response.status) {
                                try {
                                    // send email to the admin about the buyers orders and billing details
                                    sendPHPMail();


                                    // navigate('/shop')
                                    // reset the cart automatcally
                                    dispatch(resetCart());

                                } catch (error) {
                                    console.log(error)
                                    notification.error({
                                        message: "something went wrong",
                                        description: `payment was not successful try again later! ${error}`,
                                    });
                                }
                                // then navigate to the shop page
                                navigate('/shop')
                                // reset the cart automatcally
                                dispatch(resetCart());
                                // reset totalPayment automatically
                                dispatch(resetTotalPayment());


                            }


                            setTimeout(() => {
                                closePaymentModal() // this will close the modal programmatically
                            }, 2000)
                        },

                        onClose: () => {
                            // upon closing the modal navigate to the checkout page
                            // this has a programable alert message, asking if your sure u want to close the page
                            // you can handle few errors here upon closing the modal
                            navigate('/cart/checkout')

                        },
                    });
                }}
            >
                {/* both visa and master card uses this flutterwave config for payment */}
                Continue With Your transaction.
            </button>
        </div>
    );
}