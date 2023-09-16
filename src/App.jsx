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

const data = [
  {
    id: 1,
    itemName: 'eggs',
    quanatiy: 12,
    completed: false,
  },
  {
    id: 2,
    itemName: 'juice',
    quanatiy: 1,
    completed: true,
  },
  {
    id: 3,
    itemName: 'chicken legs',
    quanatiy: 4,
    completed: false,
  },
  {
    id: 4,
    itemName: 'carrots',
    quanatiy: 8,
    completed: true,
  },
];

function App() {
  return (
    <>
      <ShoppingList items={data} />
    </>
  );
}

export default App;
