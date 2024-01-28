import shortid from "shortid";

let coupons = [];

setInterval(() => {
    const now = Date.now();
    coupons = coupons.filter(coupon => now - coupon.timestamp < 3600000); // Keep coupons valid for less than a minute
}, 3600000); // Run every hour

function generateCoupon() {
    const couponCode = shortid.generate().substring(0, 7).toUpperCase();
    const timestamp = Date.now();
    coupons.push({ couponCode, timestamp });
}

generateCoupon();

export {coupons};
