import BestSeller from "../components/BestSeller";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import LatestCollection from "../components/LatestCollection";
import NewsletterBox from "../components/NewsletterBox";
import Ourpolicy from "../components/Ourpolicy";

export default function Home() {
  return (
    <div >
        <Hero/>
        <LatestCollection/>
        <BestSeller/>
       <Ourpolicy/>
       <NewsletterBox/>
       
    </div>
  );
}
