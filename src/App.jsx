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
    item: 'eggs',
    quanatiy: 12,
    completed: false,
  },
  {
    item: 'juice',
    quanatiy: 1,
    completed: true,
  },
  {
    item: 'chicken legs',
    quanatiy: 4,
    completed: false,
  },
  {
    item: 'carrots',
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
