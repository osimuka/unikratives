// import CASHEW_NUT from "../public/cashew.png";
import CASHEWNUT from "../public/cashew_nut.jpg";
import CHIN_CHIN from "../public/chin_chin.jpg";
import GROUND_NUT from "../public/ground_nut.jpg";
import KILISHI_BOX from "../public/kilishi_box.jpg";
import KULIKULI from "../public/kuli_kuli.jpg";
import PEA_NUT from "../public/pea_nut.jpg";
import PLANTAIN_CHIPS from "../public/plantain_chips.jpg";

const products = [
  {
    id: 10, name: "Kilishi Special",
    description: "Premium sun-dried spiced beef, finished for modern retail shelves.",
    image: KILISHI_BOX,
    price: "NGN 2,500",
    variants: ["Original", "Spicy"],
    linkToProduct: "https://selar.com/575f51691g"
  },
  {
    id: 20, name: "Kuli Kuli",
    description: "Crunchy groundnut snack with clean packaging and consistent quality.",
    image: KULIKULI,
    price: "NGN 1,800",
    variants: ["Classic"],
    linkToProduct: "https://selar.com/7ctb0157k3"
  },
  {
    id: 30, name: "Plantain Chips",
    description: "Crisp sliced plantains, naturally sweet and ready for distribution.",
    image: PLANTAIN_CHIPS,
    price: "NGN 2,000",
    variants: ["Sweet", "Savory"],
    linkToProduct: "https://selar.com/381dh38111"
  },
  {
    id: 40, name: "Roasted Cashew",
    description: "Premium cashews sourced from local farms and roasted in small batches.",
    image: CASHEWNUT,
    price: "NGN 2,000",
    variants: ["Salted"],
    linkToProduct: "https://selar.com/78l8701884"
  },
  {
    id: 50, name: "Roasted Peanuts",
    description: "Fresh roasted peanuts with a familiar Nigerian taste and shelf-ready finish.",
    image: PEA_NUT,
    price: "NGN 1,500",
    variants: ["Salted"],
    linkToProduct: "https://selar.com/72i6r22917"
  },
  {
    id: 60, name: "Chin Chin",
    description: "Crunchy fried dough snacks built for everyday enjoyment and gifting.",
    image: CHIN_CHIN,
    price: "NGN 2,200",
    variants: ["Traditional", "Coconut"],
    linkToProduct: "https://selar.com/b3414pi6k4"
  },
  {
    id: 70, name: "Groundnut",
    description: "Fresh roasted peanuts with a familiar Nigerian taste and shelf-ready finish.",
    image: GROUND_NUT,
    price: "NGN 1,500",
    variants: ["Salted"],
    linkToProduct: "https://selar.com/150vj71240"
  },

];

export default products;