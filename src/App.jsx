import './App.css';
import Chicken from './Chicken';
import Die from './Die';
import Greeter from './Greeter';
import ListPicker from './ListPicker';
import DoubleDiceRoll from './DoubleDiceRoll';
import Heading from './Heading';
import ColorsList from './ColorsList';
import Slots from './Slots';
import ShoppingList from './ShoppingList';
import PropertyList from './PropertyList';
import Clicker from './Clicker';
import Form from './Form';
import Counter from './Counter';
import Toggler from './Toggler';
const properties = [
  {
    id: 1111,
    name: 'Desurt Yurt',
    ratings: 5,
    price: 230,
  },
  {
    id: 1112,
    name: 'KingsBridge Park',
    ratings: 2.4,
    price: 1000,
  },
  {
    id: 1113,
    name: 'Sugar Land',
    ratings: 3.3,
    price: 500,
  },
  {
    id: 1114,
    name: 'Memorial',
    ratings: 4.8,
    price: 18900,
  },
];

function App() {
  return (
    <>
      <Toggler />
    </>
  );
}

export default App;
