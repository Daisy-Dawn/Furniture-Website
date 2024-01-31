const initialState = {
    checkoutFormData: sessionStorage.getItem("checkoutFormData") 
    ? JSON.parse(sessionStorage.getItem("checkoutFormData")) 
    : {
        // Default form data structure
        firstName: "",
        lastName: "",
        companyName: "",
        address: "",
        city: "",
        state: "",
        country: "",
        postalCode: "",
        contactNumber: "",
        email: "",
        otherNotes: "",
    }
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_FORM_DATA":{

            const newState = {
                ...state, 
                checkoutFormData: action.payload
            };
            sessionStorage.setItem("checkoutFormData", JSON.stringify(newState.checkoutFormData));
            return newState;
        }
        default:
            return state;
    }
}

export default formReducer;