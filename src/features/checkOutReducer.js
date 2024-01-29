const initialState = {
    checkoutFormData: {
        // Initial state for form data
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
        case "SET_FORM_DATA":
            return {
                ...state,
                checkoutFormData: action.payload,
            };
        default:
        	return state;
    }
}

export default formReducer;