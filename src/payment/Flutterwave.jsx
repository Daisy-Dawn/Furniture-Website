import axios from 'axios';
import { closePaymentModal, useFlutterwave, } from 'flutterwave-react-v3';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { resetCart } from '../features/addToCartSlice';




export default function Flutterwave() {
    const navigate = useNavigate();
    const disptach = useDispatch();


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
    const url = "http://localhost/reactApiPhp/api/billingDetails.php";

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
                className="py-[0.8rem] px-[2rem]  rounded-[10px] font-nunito bg-lead hover:bg-stone-600 text-white text-[14px] lg:text-[18px] font-bold text-center flex items-center justify-center"
                onClick={() => {

                    handleFlutterPayment({

                        callback: async (response) => {
                            // upon payment success post the payment details to the database if it does not exists yet!
                            if (response.status === "successful") {
                                try {
                                    // send to the server-side
                                    await axios.post(url, billingData)

                                } catch (error) {
                                    console.log(error)
                                }
                                // then navigate to the shop page
                                navigate('/shop')
                                // reset the cart automatcally
                                disptach(resetCart());


                            }
                            setTimeout(() => {
                                closePaymentModal() // this will close the modal programmatically
                            }, 4000)
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