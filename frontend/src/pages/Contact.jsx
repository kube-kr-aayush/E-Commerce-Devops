import { assets } from "../assets/frontend_assets/assets";
import NewsletterBox from "../components/NewsletterBox";
import Title from "../components/Title";

export default function Contact() {
  return (
    <div >
      <div className="text-center text-2xl pt-5  border-t" style={{
    borderTop: "1px solid #d1d5db"}}>
        <Title text1={'CONTACT'} text2={'US'}/>


      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img src={assets.contact_img} className="w-full md:max-w-[480px] " alt="" />
        <div className="flex flex-col justify-center items-start ">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500"> 221 Maple Street,<br /> Apt 4BSpringfield,<br /> IL 62704 USA</p>
          <p className="text-gray-500">Tel: (415) 555-0132 <br /> Email: xyz@gmail.com</p>
          <p className="font-semibold text-xl text-gray-600">Careers at Forever</p>
          <p className="text-gray-500">Learn more about out teams and job opening</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500  ">Explore Jobs</button>
          


        </div>

      </div>
      <NewsletterBox/>
    </div>
  );
}
