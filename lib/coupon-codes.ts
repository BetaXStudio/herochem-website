// Coupon codes configuration
export interface CouponCode {
  code: string;
  discountPercentage: number; // Percentage to reduce from price (0-100)
  description?: string;
  isActive: boolean;
}

// Available coupon codes
export const couponCodes: CouponCode[] = [
  {
    code: "HERO20",
    discountPercentage: 20, // 20% discount (price * 0.8)
    description: "20% discount on your order",
    isActive: true,
  },
  {
    code: "GHOST20",
    discountPercentage: 20, // 20% discount (price * 0.8)
    description: "20% discount on your order",
    isActive: true,
  },
  {
    code: "SNOW15",
    discountPercentage: 15, // 15% discount (price * 0.85)
    description: "15% Winter Sale discount on your order",
    isActive: true,
  },
  {
    code: "XMAS15",
    discountPercentage: 15, // 15% discount (price * 0.85)
    description: "15% Christmas Sale discount on your order",
    isActive: true,
  },
  // Add more coupon codes here as needed
  // {
  //   code: 'WELCOME10',
  //   discountPercentage: 10,
  //   description: '10% discount for new customers',
  //   isActive: true
  // }
];

// Function to validate and get coupon discount
export const validateCouponCode = (code: string): CouponCode | null => {
  const coupon = couponCodes.find(
    (c) => c.code.toLowerCase() === code.toLowerCase() && c.isActive,
  );
  return coupon || null;
};

// Function to calculate discount amount
export const calculateCouponDiscount = (
  subtotal: number,
  couponCode: string,
): number => {
  const coupon = validateCouponCode(couponCode);
  if (!coupon) return 0;

  return subtotal * (coupon.discountPercentage / 100);
};
