import './App.css';
import Chicken from './Chicken';
import Die from './Die';
import Greeter from './Greeter';
import ListPicker from './ListPicker';
import DoubleDiceRoll from './DoubleDiceRoll';
import Heading from './Heading';
import ColorsList from './ColorsList';

function App() {
  return (
    <>
      <Heading text={'Welcome'} />
      <DoubleDiceRoll />
      <ColorsList
        colors={['red', 'green', 'blue', 'yellow', 'orange', 'black']}
      />
    </>
  );
}

export default App;
