
// const calculateDiscount = (cartTotalAmount, discountPercentage) => {
//     return cartTotalAmount * (discountPercentage / 100);
// }

const calculateShippingFee = (cartTotalWeight, baseRatePerPound) => {
    return cartTotalWeight * baseRatePerPound;
};

function checkCoupon(coupons, enteredCoupon, cartTotalAmount) {
    const now = Date.now();
    const coupon = coupons.find(coupon => coupon.couponCode === enteredCoupon && now - coupon.timestamp < 3600000);
    if (coupon) {
        // Apply 10% discount
        const discount = cartTotalAmount * 0.1;
        return discount;
    } else {
        return null;
    }
}

export { calculateShippingFee, checkCoupon};