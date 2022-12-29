module.exports = [
  {
    key: "ONSITE",
    name: "Onsite Payment",
    icon: "desk",
    onsite: true,
    excludeCountries: [],
  },
  {
    key: "NEWEBPAY_ATM",
    name: "ATM",
    icon: "atm",
    onsite: false,
    excludeCountries: [],
  },
  {
    key: "NEWEBPAY_CVS",
    name: "超商代碼",
    icon: "store",
    onsite: false,
    excludeCountries: [],
  },
  {
    key: "PAYPAL",
    name: "PayPal",
    icon: "credit-card",
    onsite: false,
    excludeCountries: ["TW"],
  },
];
