import BannerImage from "./../../assets/banner.png";

function Banner() {
  return (
    <div className="container mx-auto my-4">
      <img src={BannerImage} alt="banner" className="w-full" />
    </div>
  );
}

export default Banner;
