import './App.css';
import Chicken from './Chicken';
import Die from './Die';
import Greeter from './Greeter';
import ListPicker from './ListPicker';
import DoubleDiceRoll from './DoubleDiceRoll';
import Heading from './Heading';

function App() {
  return (
    <>
      <Heading text={'Welcome'} />
      <DoubleDiceRoll />
    </>
  );
}

export default App;
