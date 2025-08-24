import "./Read.css";
import Pasta from "../../../public/images/product/pasta.jpg";
import Suop from "../../../public/images/product/suop.jpg";
import Steake from "../../../public/images/product/steake.jpg";
import Company from "../../../public/images/product/company.jpg";
const Read = () => {
  return (
    <>
      <div className="read">
        <div className="read1">
          <h2>مجله گلستان</h2>
        </div>
        <div className="read2">
          <div className="read3">
            <div className="read4">
              <img src={Pasta} alt="" />
              <a href="#">ماکارونی با سبزیجات </a>
              <p>
                {" "}
                ابتدا ماکارانی‌ها را در ظرفی‌ به‌ همراه‌ آب‌، روغن‌ مایع‌ و نمک‌
                می‌ریزیم‌ تا کمی‌ بپزد. در این‌ حین‌ پیازها را خرد کرده‌ و روی‌
                روغن‌ تفت‌ می‌دهیم‌ تا طلایی‌ شود…{" "}
              </p>
              <button type="button">ادامه مطلب </button>
            </div>
            <div className="read4">
              <img src={Suop} alt="" />
              <a href="#">سوپ مکزیکی </a>
              <p>
                {" "}
                گوشت بوقلمون را در یک ماهیتابه بزرگ ریخته، آب روی آن بریزید تا
                روی آن را بپوشاند و به مدت نیم ساعت آن را بپزید. گوشت را از مایع
                آن بیرون آورده…{" "}
              </p>
              <button type="button">ادامه مطلب </button>
            </div>
            <div className="read4">
              <img src={Steake} alt="" />
              <a href="#">چیلاکیله </a>
              <p>
                احتمالا نام چیلا کیله را نشنیده باشید ولی اگر یکبار این غذای
                فوق‌العاده خوشمزه را تهیه کنید و نوش جان کنید جزئی جدانشدنی از
                فهرست
              </p>
              <button type="button">ادامه مطلب </button>
            </div>
          </div>
        </div>
      </div>
      <div className="videos">
        <div className="parent">
          <div className="childe">
            <video
              src="../../../public/videos/video-1.mp4"
              type="video"
              controls
            ></video>
            <h2>سالاد نودل</h2>
            <p>
              نودل هاتی کارا یك میان‌وعده‌ی مغذی، در هر موقعیتی كه باشید با كمی
              آب جوش و یك نودل هاتی‌كارا می‌توانید از یك غذای سالم و خوشمزه لذت
              ببرید.
            </p>
            <button>ویدیوهای بیشتر</button>
          </div>
          <div className="childe">
            <video src="../../../public/videos/video-2.mp4" controls></video>
            <h2>اینستاگرام هاتی نودل</h2>
            <p>
              نودل‌های هاتی كارا را می‌توان جایگزین سالمی برای غذاهای فست‌فودی
              دانست. طعم عالی،‌ ارزش غذایی بالا و قیمت مناسب از این محصول غذای
              سالم و كاملی ساخته است.
            </p>
            <button>ادامه مطلب</button>
          </div>
          <div className="childe">
            <video src="../../../public/videos/video-3.mp4" controls></video>
            <h2>برنج گلستان</h2>
            <p>
              عطر و طعم بی‌نظیر برنج گلستان با هیچ برنج دیگری قابل مقایسه نیست.
              با گلستان،‌ كیفیت زندگی بالاتر از همیشه است. چرا كه مشتریان
              گلستان؛‌ لایق بهترین ها هستند.
            </p>
            <button>مشاهده محصولات</button>
          </div>
        </div>
      </div>
      <div className="company">
        <div id="items">
          <div className="item1">
            <h2>مسئوليت‌های اجتماعی شركت گلستان</h2>
            <div>
              <a href="#">Golestan</a>
              <h3>Social Responsibility</h3>
            </div>
            <h4>Mahdi Hospital</h4>
          </div>
          <div id="item2">
            <img src={Company} alt="" />
          </div>
        </div>
      </div>
      <div className="golestan">
        <div className="golestan1">
          <div className="golestan2">
            <h2>مسئوليت‌های اجتماعی گلستان</h2>
            <p>
              كسب‌وكارها اجزای قدرتمند جامعه به شمار می‌آیند و موفق‌ترین،
              قابل‌احترام‌ترین و مطلوب‌ترین كسب‌وكارها آنهایی هستند كه كاری
              فراتر از درآمدزایی ایجاد كنند؛‌ آنهایی كه آمده‌اند تا از تجربه و
              امکاناتشان برای حل مشكلات جامعه و محیط زندگی خود استفاده كنند.{" "}
            </p>
            <button> اطلاعات بيشتر</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Read;
