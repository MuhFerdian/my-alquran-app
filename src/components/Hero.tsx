import { useContext } from "react";
import Profile from "./Profile";
import Verse from "./Verse";
import Photo from "../assets/alquran.png";
import { ThemeContext } from "../context/ThemeContext";

function Hero() {
  const { theme } = useContext(ThemeContext);
  
  return (
    <div className="relative">
      <div className={`absolute top-0 left-0 w-full h-60 -mt-10 bg-[url('/src/assets/HeroBackgroundImage.png')] bg-cover bg-center bg-no-repeat rounded-2xl ${theme === 'light' ? 'opacity-80' : 'opacity-100'}`}></div>
      <div className="relative z-15 px-4 pt-8 flex flex-col gap-8">
        <Profile greeting="Al-Qur'an App" name="Muh Ferdian 👋🏻 " avatar={Photo} />
        <Verse
          verse="“He said: ‘Don't hope in humans, hope in Allah.  Because only Allah can give everything.’”"
          surah="~Al-Insyirah (94:8)"
        />
      </div>
    </div>
  );
}

export default Hero;
