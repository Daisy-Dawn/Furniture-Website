import axios from 'axios';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';




export default function Flutterwave() {
    const navigate = useNavigate();
    const { firstName, lastName, email, contactNumber, companyName, address, city, state, country, postalCode, otherNotes } = useSelector((state) => state.form.checkoutFormData);
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
    const url = "http://localhost/reactApiPhp/api/billingDetails.php";

    const config = {
        public_key: "FLWPUBK_TEST-741d0a677821b7119d95573b1c444080-X",
        tx_ref: Date.now(),
        amount: 500,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: email,
            phone_number: contactNumber,
            name: firstName + "" + lastName,
        },
        customizations: {
            title: 'Funitura',
            description: 'Payment for items in cart',
            logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    return (
        <div className="flex mt-[1.5rem] justify-center">

            <button
                className="py-[0.8rem] px-[2rem]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[18px] font-bold text-center flex items-center justify-center"
                onClick={() => {

                    handleFlutterPayment({
                        callback: (response) => {
                            // upon payment success post the payment details to the database if it does not exists yet!
                            if (response.status === "completed") {
                                // send to the server-side
                                axios.post(url, billingData)
                                // then navigate to the shop page
                                navigate('/shop')
                            } else {
                                //  you can handle errors here upon failed transaction
                                console.log("payment failed, try again", response.status)
                            }
                            closePaymentModal() // this will close the modal programmatically
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
                Continue With Your transaction.
            </button>
        </div>
    );
}