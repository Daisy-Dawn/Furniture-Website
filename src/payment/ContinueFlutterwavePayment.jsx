import Flutterwave from "./Flutterwave";
import {debitCard} from '../assets'

function ContinueFlutterwavePayment() {


    return (
        <div className="h-full flex justify-center items-center mx-[1rem] xl:mx-[8rem] lg:mx-[2rem] my-[4rem] font-nunito bg-white">
            <section className="flex gap-[1rem] flex-col justify-center items-center">
                <h4 className="text-lead font-bold mb-[1rem] text-[1.3rem] capitalize lg:text-[1.7rem]">Continue with your payment</h4>
                <div className="md:w-[65%] w-[75%] lg:w-[75%] flex justify-center">
                    <img src={debitCard} alt="" />
                </div>
                <div>
                    <Flutterwave />
                </div>
            </section>
        </div>
    )
}

export default ContinueFlutterwavePayment