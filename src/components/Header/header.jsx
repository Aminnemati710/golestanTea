import "./Header.css";
import logo from "../../../public/images/Logo.png";
import Tea from "../../../public/images/tea-pic1.png";
const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <a href="#" className="text">
                صفحه اصلی
              </a>
            </li>
            <li>
              <a href="#">شرکت گلستان</a>
            </li>
            <li>
              <a href="#">محصولات</a>
            </li>
            <li>
              <a href="#">وبلاگ</a>
            </li>
            <li>
              <a href="#">قرعه کشی</a>
            </li>
            <li>
              <a href="#">استخدام</a>
            </li>
            <li>
              <a href="#">تماس با ما</a>
            </li>
            <li>
              <a href="#">EN</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="top">
        <div className="childe1">
          <h2>قرعه‌کشی مصرف‌کنندگان گلستان</h2>
          <h3>قرعه‌کشی دوره‌ای مصرف‌کنندگان چای گلستان </h3>
          <p>
            هر یک از مصرف‌کنندگان محصولات چای و چای کیسه‌ای گلستان می‌توانند با
            ارسال کد قرعه‌کشی روی بسته به شماره 30007405 در قرعه کشی‌های دوره‌ای
            گلستان شرکت کنند. نگهداری از بسته‌بندی محصول برای اهدای جایزه الزامی
            است.
          </p>
          <button>اطلاعات بیشتر</button>
        </div>
        <div className="childe2">
          <img src={Tea} alt="tea" />
        </div>
      </div>
    </>
  );
};

export default Header;
