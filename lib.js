import hammerImage from "./src/assets/hammer.png";
import bookImage from "./src/assets/book.png";
import tvImage from "./src/assets/tv.png";
import diskImage from "./src/assets/disk.png";
import telephoneImage from "./src/assets/tel.png";
import cartImage from "./src/assets/shop.png";

export function getAllProducts() {
  return [
    {
      id: "1",
      name: "Hammer",
      price: "2.00",
      image: hammerImage,
    },
    {
      id: "2",
      name: "Book",
      price: "6.00",
      image: bookImage,
    },
    {
      id: "3",
      name: "TV",
      price: "800.00",
      image: tvImage,
    },
    {
      id: "4",
      name: "Diskette",
      price: "3.00",
      image: diskImage,
    },
    {
      id: "5",
      name: "Telephone",
      price: "200.00",
      image: telephoneImage,
    },
    {
      id: "6",
      name: "Cart",
      price: "50.00",
      image: cartImage,
    },
  ];
}
