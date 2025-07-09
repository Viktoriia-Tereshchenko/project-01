import "./App.css";
import Card from "./components/Card/Card";
import Greeting from "./components/Greeting/Greeting";
import ThankYou from "./components/ThankYou/ThankYou";
import catPicture from "./assets/cat3.jpg";
import Goodbye from "./components/Goodbye/Goodbye";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import { Counter } from "./components/Counter/Counter";
import PersonalGreeting from "./components/PersonalGreeting/PersonalGreeting";
import WeightCalculator from "./components/WeightCalculator/WeightCalculator";
import { SpaceMissionForm } from "./components/SpaceMissionForm/SpaceMissionForm";

function App() {
  const userName = "our favourite user";
  const myUrl =
    "https://developer.alexanderklimov.ru/android/java/sampleapp.jpg";
  const profileName = "Anna Ivanova";
  const aboutMe =
    "A desperate housewife and cat lover. Knits tiny hats for kittens in her free time.";
  const user = {
    name: "test",
    avatar: "test.img",
    description: "test",
  };

  return (
    <>
      <SpaceMissionForm />
      <WeightCalculator />
      <Counter />
      <Counter />
      <PersonalGreeting />
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

      {/* <ProfileCard {...user} /> */}
    </>
  );
}

export default App;
