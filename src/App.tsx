import Card from "./components/ui/gameplay/card";
import Layout from "./components/ui/layout/layout";
import amandaImage from "./assets/amanda_assasin.png";
import geraldImage from "./assets/gerald_sniper.png";

function App() {
  const testCardPropsOne = {
    cardName: "test",
    cardDescription: "Test Description",
    image: geraldImage,
    isFacingUp: false,
    isActive: true,
  };
  const testCardPropsTwo = {
    cardName: "A.M.A.N.D.A",
    cardDescription: "Test Description",
    image: amandaImage,
    isFacingUp: true,
    isActive: true,
  };
  return (
    <Layout>
      <Card {...testCardPropsOne}></Card>
      <Card {...testCardPropsTwo}></Card>
    </Layout>
  );
}

export default App;
