import './App.css';
import Chicken from './Chicken';
import Die from './Die';
import Greeter from './Greeter';
import ListPicker from './ListPicker';

function App() {
  return (
    <>
      {/* <Chicken />
      <Greeter name="Henry" /> */}
      {/* <Die numSides={20} />
      <Die />
      <Die numSides={10} /> */}
      <ListPicker values={[1, 2, 3, 4]} />
      <ListPicker values={{ a: 1, b: 2, c: 34 }} />
    </>
  );
}

export default App;
