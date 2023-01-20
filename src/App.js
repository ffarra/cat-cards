import './App.css';
import {useState} from "react";
import Card from "./Card/Card";
import "bootstrap/dist/css/bootstrap.css";

const data = [
  {
    id: 0,
    title: "Сказочное заморское яство",
    name: "Нямушка",
    info: "с фуа-гра",
    portion: 10,
    gift: ["мышь в подарок"],
    weight: "0,5",
    status: "notSelected",
    selectedText: "Печень утки разварная с артишоками."
  },
  {
    id: 1,
    title: "Сказочное заморское яство",
    name: "Нямушка",
    info: "с рыбой",
    portion: 40,
    gift: ["2 мыши в подарок"],
    weight: "2",
    status: "selected",
    selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка."
  },
  {
    id: 2,
    title: "Сказочное заморское яство",
    name: "Нямушка",
    info: "с курой",
    portion: 100,
    gift: ["5 мышей в подарок", "заказчик доволен"],
    weight: "5",
    status: "disabled",
    selectedText: "Филе из цыплят с трюфелями в бульоне."
  }
]

function App() {
  const [cards, setCards] = useState(data);

  const cardIndex = (id) => {
    let indexOfCard = -1;

    cards.forEach((card, index) => {
      if (card.id === id)
        indexOfCard = index;
    });
    return indexOfCard;
  }

  const toggleStatus = (id) => {
    let index = cardIndex(id)
    let newCards = [...cards]
    if (newCards[index].status !== 'disabled') {
      newCards[index].status = (newCards[index].status === 'notSelected') ? 'selected' : 'notSelected';
    setCards([...newCards]);
      console.log(newCards[index])
    }
  }

  return (
    <div className="App">
      <h1 className="App-title">Ты сегодня покормил кота?</h1>
      <div className="container px-2 px-xl-0">
        <div className="row mx-0">
        {cards.map((card, index) => {
          return (
              <div key={index} className="col-xl-4 d-flex justify-content-center mb-4 mb-xl-0">
                <Card card={card} toggleStatus={toggleStatus}/>
              </div>
          )
      })}
        </div>
      </div>
    </div>
  );
}

export default App;
