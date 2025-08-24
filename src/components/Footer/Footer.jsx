import "./Footer.css";
import Footer1 from "../../../public/images/Footer/footer-icon1.png";
import Footer2 from "../../../public/images/Footer/footer-icon2.png";
import Footer3 from "../../../public/images/Footer/footer-icon3.png";
import Footer4 from "../../../public/images/Footer/footer-icon4.png";
const Footer = () => {
  return (
    <>
      <div className="footer">
     <div className="footer1">
       <div className="footer2">
              <img src={Footer1} alt="footer1" />
              <h2>چای گلستان</h2>
   <li>
            <a href="#">چای ممتاز هندوستان​</a>
          </li>
          <li>
            <a href="#">چای ممتاز ارل گری​</a>
          </li>
          <li>
            <a href="#">چای سيلان عطری​</a>
          </li>
          <li>
            <a href="#">چای ممتاز سيلان​</a>
          </li>
          <li>
            <a href="#">چای صبحانه گلستان​</a>
          </li>
        </div>   
        <div className="footer3">
          <img src={Footer2} alt="" />
          <h2>تی بگ گلستان</h2>
          <li>
            <a href="#">تی بگ بلک لاين</a>
          </li>
          <li>
            <a href="#">تی بگ ارل گری</a>
          </li>
          <li>
            <a href="#">دمنوش نعناع</a>
          </li>
          <li>
            <a href="#">دمنوش بابونه</a>
          </li>
          <li>
            <a href="#">دمنوش چای سبز</a>
          </li>
        </div>
        <div className="footer4">
          <img src={Footer3} alt="" />
          <h2>ادويه گلستان</h2>
          <div>

   <li>
            <a href="#">زعفران ممتاز خراسان</a>
          </li>
          <li>
            <a href="#">ادویه کاری</a>
          </li>
          <li>
            <a href="#">ادویه ماست و خیار</a>
          </li>
          <li>
            <a href="#">فلفل سياه خالص</a>
          </li>
          <li>
            <a href="#">زردچوبه ممتاز</a>
          </li>
          </div>
        </div>
        <div className="footer5">
          <img src={Footer4} alt="" />
          <h2>حبوبات گلستان</h2>
             <li>
            <a href="#">لوبيا قرمز ممتاز</a>
          </li>
          <li>
            <a href="#">لوبيا چيتی گلستان</a>
          </li>
          <li>
            <a href="#">عدس كانادايی</a>
          </li>
          <li>
            <a href="#">نخود زودپز كرمانشاه</a>
          </li>
          <li>
            <a href="#">لوبيا سفيد گلستان</a>
          </li>
        </div>
     </div>
      </div>
    </>
  );
};

export default Footer;
