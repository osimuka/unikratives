import CASHEW_NUT from "../public/cashew.png";
import CASHEWNUT from "../public/cashew_nut.jpg";
import CHIN_CHIN from "../public/chin_chin.jpg";
import GROUND_NUT from "../public/ground_nut.jpg";
import KILISHI_BOX from "../public/kilishi_box.jpg";
import KULIKULI from "../public/kuli_kuli.jpg";
import PEA_NUT from "../public/pea_nut.jpg";
import PLANTAIN_CHIPS from "../public/plantain_chips.jpg";

const products = [
  {
    id: 10, name: "Kilishi",
    description: "Premium sun-dried spiced beef, finished for modern retail shelves.",
    image: KILISHI_BOX,
    price: "NGN 2,500",
    variants: ["Original", "Spicy"],
  },
  {
    id: 20, name: "Kuli Kuli",
    description: "Crunchy groundnut snack with clean packaging and consistent quality.",
    image: KULIKULI,
    price: "NGN 1,800",
    variants: ["Classic"],
  },
  {
    id: 30, name: "Plantain Chips",
    description: "Crisp sliced plantains, naturally sweet and ready for distribution.",
    image: PLANTAIN_CHIPS,
    price: "NGN 2,000",
    variants: ["Sweet", "Savory"],
  },
  {
    id: 40, name: "Roasted Cashew",
    description: "Premium cashews sourced from local farms and roasted in small batches.",
    image: CASHEW_NUT,
    price: "NGN 3,500",
    variants: ["Salted"],
  },
  {
    id: 50, name: "Roasted Peanuts",
    description: "Fresh roasted peanuts with a familiar Nigerian taste and shelf-ready finish.",
    image: PEA_NUT,
    price: "NGN 1,500",
    variants: ["Salted"],
  },
  {
    id: 60, name: "Chin Chin",
    description: "Crunchy fried dough snacks built for everyday enjoyment and gifting.",
    image: CHIN_CHIN,
    price: "NGN 2,200",
    variants: ["Traditional", "Coconut"],
  },
  {
    id: 70, name: "Groundnut",
    description: "Fresh roasted peanuts with a familiar Nigerian taste and shelf-ready finish.",
    image: GROUND_NUT,
    price: "NGN 1,500",
    variants: ["Salted"],
  },

];

export default products;