const isNairaDollar = (currency = '') =>
   (currency?.toLowerCase() === "naira" ? "₦" : "$");

export default isNairaDollar;