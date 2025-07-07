import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import catPicture from "./assets/cat2.jpg";

function App() {
  // создать компонент, который возвращал div, внутри которого
  //  находится следующая информация
  // "Thank you for using our services!"
  // назвать компонент ThankYou
  // отобразить рядом с Greeting
  // прислать код App и код компонента

  // 2. Создайте компонент с картинкой, назвать Card
  // тег img внутри div
  // Пусть ссылка на картинку передается при помощи props url

  const userName = "Vasiliy";
  const myUrl =
    "https://developer.alexanderklimov.ru/android/java/sampleapp.jpg";
  //const myAlt = "cat";

  return (
    <>
      {/* вызов функции в декларативном стиле*/}
      <Greeting name={userName} />
      <Greeting name={"Evgenii"} age={18} />
      <ThankYou />

      <Card url={myUrl} alt="cat" />
      {/* вариант1 - если картинка в папке public */}
      {/* лучше для меняющихся картинок - внешняя ссылка*/}
      <img src="/cat.jpg" alt="cat1" />
      {/* вариант2 - если картинка в папке assets */}
      {/* лучше для наших лого - постоянных картинок */}
      <img src={catPicture} alt="cat2" />
    </>
  );
}

export default App;
