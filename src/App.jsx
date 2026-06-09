import Stud from './Stud';
import Car from './Car';
import S from './Student';
import T from "./Timer";
import UseEffectExample from './UseEffectExample';


function App() {
  return (
    <>
      <UseEffectExample />
      
      <h1>useState Hook - Timer</h1>
      <T />

      <h1>Props</h1>

      <S name="Kaviya" age="20" />
      <S name="Pooja" age="21" />

      <Car brand="Maruthi" model="Zen" />
      <Car brand="Toyota" model="Supra" />

            <h1>Props with Children</h1>

      <Stud name="kaviya" age="20" >
        <p>Course: M.Tech Integrated Software Engineering</p>
      </Stud>

      <Stud name="Rahul" age="21">
        <button>View Profile</button>
      </Stud>
    </>
  );
}

export default App;
