import Card from "./components/ui/gameplay/card";
import Layout from "./components/ui/layout/layout";
import amandaImage from "./assets/images/amanda_assasin.png";
import geraldImage from "./assets/images/gerald_sniper.png";
import { CardProps } from "./models/cardProps";

function App() {
  const testCardPropsOne: CardProps = {
    cardName: "Gerald",
    cardDescription: "Test Description",
    image: geraldImage,
    isFacingUp: false,
    isActive: true,
    cardStats: {
      damage: 140,
      health: 110,
      cost: 220,
      energy: 80,
      class: "Specialist",
    },
  };
  const testCardPropsTwo: CardProps = {
    cardName: "A.M.A.N.D.A",
    cardDescription: "Test Description",
    image: amandaImage,
    isFacingUp: true,
    isActive: true,
    cardStats: {
      damage: 120,
      health: 80,
      cost: 180,
      energy: 140,
      class: "Specialist",
    },
  };
  return (
    <Layout>
      <Card {...testCardPropsOne}></Card>
      <Card {...testCardPropsTwo}></Card>
    </Layout>
  );
}

export default App;
