import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import catPicture from "./assets/cat3.jpg";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";

function App() {
  // 1. Cоздать компонент, который возвращал div, внутри которого находится следующая информация "Thank you for using our services!".
  // Назвать компонент ThankYou и отобразить рядом с Greeting. Прислать код App и код компонента
  // 2. Создайте компонент с картинкой, назвать Card (тег img внутри div). Пусть ссылка на картинку передается при помощи props url

  const userName = "our favourite user";
  const myUrl =
    "https://developer.alexanderklimov.ru/android/java/sampleapp.jpg";
  const profileName = "Anna Ivanova";
  const aboutMe =
    "A desperate housewife and cat lover. Knits tiny hats for kittens in her free time.";

  return (
    <>
      {/* вызов функции в декларативном стиле*/}
      <Greeting name={userName} />
      {/* <Greeting name={"Evgenii"} age={18} /> */}
      <ThankYou />
      <Goodbye />

      <Card url={myUrl} alt="cat" />
      {/* вариант1 - если картинка в папке public */}
      {/* лучше для меняющихся картинок - внешняя ссылка*/}
      {/* <img src="/cat2.jpg" alt="cat1" style={{ height: "200px" }} /> */}
      {/* вариант2 - если картинка в папке assets */}
      {/* лучше для наших лого - постоянных картинок */}
      {/* <img src={catPicture} alt="cat3" style={{ height: "200px" }} /> */}

      <ProfileCard
        name={profileName}
        avatar={catPicture}
        description={aboutMe}
      />
    </>
  );
}

export default App;
