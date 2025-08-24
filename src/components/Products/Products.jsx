import "./Products.css";
import Icon1 from "../../../public/images/product/icon-1.png";
import Icon2 from "../../../public/images/product/icon-2.png";
import Icon3 from "../../../public/images/product/icon-3.png";
import Icon4 from "../../../public/images/product/icon-4.png";
import Rice from "../../../public/images/product/rice.jpg";
import Tea from "../../../public/images/product/tea.jpg";
import Nuts from "../../../public/images/product/nuts.jpg";
const Products = () => {
  return (
    <>
      <div className="products">
        <div className="product">
          <div>
            <img src={Icon1} alt="" />
            <p>سرمایه انسانی</p>
          </div>
          <div>
            <img src={Icon2} alt="" />
            <p>مراكز فروش</p>
          </div>
          <div>
            <img src={Icon3} alt="" />
            <p>محصولات گلستان</p>
          </div>
          <div>
            <img src={Icon4} alt="" />
            <p>مشتریان گلستان</p>
          </div>
        </div>
      </div>
      <div className="products2">
        <div className="rice">
          <img src={Rice} alt="rice" />
          <div className="red">
            <h2>برنج گلستان</h2>
            <h4>معرفی محصول</h4>
          </div>
        </div>
        <div className="rice2">
          <h2>رکن اول غذای ایرانی</h2>
          <p>
            مرغوب‌ترین برنج دنیا، برنج ایران است و بهترین نوع برنج ایرانی،‌ طارم
            و هاشمی. این برنج‌ها از بهترین شالیزارهای مازندران برداشت شده، پس از
            كنترل كیفیت در آزمایشگاه‌های تخصصی گلستان وارد چرخه بسته‌بندی و در
            وزن‌های مختلف به بازار عرضه می‌شوند. عطر و طعم بی‌نظیر برنج گلستان
            با هیچ برنج دیگری قابل مقایسه نیست. با گلستان،‌ كیفیت زندگی بالاتر
            از همیشه است چرا كه مشتریان گلستان؛‌ لایق بهترین‌ها هستند.
          </p>
          <div className="click">
            <button type="button">محصولات برنج</button>
            <button>آشپزخانه گلستان</button>
          </div>
        </div>
      </div>
      <div className="products3">
        <div className="tea">
          <img src={Tea} alt="tea" />
          <div className="red">
            <h2>چای گلستان</h2>
            <h4>معرفی محصول</h4>
          </div>
        </div>
        <div className="tea2">
          <h2>سابقه‌ای به قدمت یک عمر</h2>
          <p>
            چای تنها یك نوشیدنی گرم نیست.‌ یک گفتمان است؛‌ گرمابخش وجود و
            بهانه‌ای برای آغاز یك معاشرت دل‌چسب. بی‌دلیل نیست كه نام «محبوب‌ترین
            نوشیدنی دنیا» را با خود یدک می‌كشد. نوشیدنش خستگی‌ها را فراری داده،‌
            حس خوب آرامش را به همراه دارد.
          </p>
          <p>
            با چای پیوند خورده است؛‌ قدیمی‌ترین محصول مجموعه گلستان،‌ با
            مدرن‌ترین و بهداشتی‌ترین دستگاه‌های روز دنیا تهیه و بسته‌بندی
            می‌شود. چیزی كه باعث شده مشتریانش یك عمر به نام گلستان اعتماد كنند،
            كیفیت، ‌عطر و طعم به یادماندنی آن است.{" "}
          </p>
          <div className="tea3">
            <button type="button">محصولات چای</button>
          </div>
        </div>
      </div>
      <div className="products4">
        <div className="nuts">
          <img src={Nuts} alt="nuts" />
          <div className="red">
           <h2>پسته گلستان</h2>
            <h4>معرفی محصول</h4>
          </div>
        </div>
        <div className="nuts2">
          <h2>آجيل‌های خوش خنده</h2>
          <p>
            خواص فوق‌العاده پسته بر كسی پوشیده نیست. پسته را منبع ویتامین و مواد
            معدنی می‌نامند، یك پمپ خون‌ساز قوی و تسكین دهنده قلب و اعصاب.
          </p>
          <p>
             {" پسته گلستان"}
            اما حسابش از دیگر پسته‌های بازار جداست. مرغوب‌ترین پسته خام از
            بهترین باغ‌های پسته ایران دستچین می‌شود.‌ پس از كنترل كیفیت در
            آزمایشگاه و اطمینان از سلامت محصول،‌ با زعفران درجه یک و نمک، بوداده
            و برشته شده و‌ پسته گلستان را با طعم و رنگ و عطری بی‌نظیر به ارمغان
            می‌آورد.
          </p>
          <div className="nuts3">
            <button type="button">ناتس گلستان</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
