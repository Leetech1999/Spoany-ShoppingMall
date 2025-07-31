import BestItem from "../Components/BestItem";
import CollectionWrap from "../Components/CollectionWrap";
import Footer from "../Components/Footer";
import InterView from "../Components/InterView";
import MainBanner from "../Components/MainBanner";
import MainBottom from "../Components/MainBottom";
import SpecialItem from "../Components/SpecialItem";

function Home(){
  return(
    <main className="home">
      <MainBanner />
      <CollectionWrap />
      <BestItem />
      <SpecialItem />
      <InterView />
      <MainBottom />
      <Footer />
    </main>
  )
}

export default Home;