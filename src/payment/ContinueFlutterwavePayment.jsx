import Flutterwave from "./Flutterwave";

function ContinueFlutterwavePayment() {


    return (
        <div>
            <center>
                <h4>Continue with your payment</h4>
                {/* daisy design a responsive UI for the continue to payment */}
                {/* pls do not use modal for this just a nice UI and a the button bellow */}
                <div style={{ padding: "20px" }}>
                    <Flutterwave />
                </div>
            </center>
        </div>
    )
}

export default ContinueFlutterwavePayment