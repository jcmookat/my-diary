import {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Footer from './components/Footer'

function App() {
  // const firstName = 'Juan';
  // const lastName = 'Tae';
  // const age = 35;
  // const arr = [1,2,3,4,5]
  // const students = [
  //   {
  //     lastName: 'pogi',
  //     firstName: 'tae',
  //     age: 20
  //   },
  //   {
  //     lastName: 'pogisad',
  //     firstName: 'taeasd',
  //     age: 26
  //   },
  // ]



  // const [num, setNum] = useState(1);

  // const initialState = 1
  // const [num, setNum] = useState(initialState)
  // const [userName, setUserName] = useState("tea")

  const[diary, setDiary] = useState('');

  const[showForm, setShowForm] = useState(true);

  const[example, setExample] = useState('');

  const changeHandler = (e) => {
    setDiary(e.target.value)
  }

  useEffect(() => {
 
    return () => {
      console.log("unmount")
    }
  }, [example])

  return (
    <>
      <Header />
      <main>
      <button onClick={() => setShowForm(!showForm)}>Toggle</button>
        
        <input name="example" value={example} onChange={(e) => setExample(e.target.value)}/>
        
        {/* <h1>{students.firstName} {lastName} {students.age}</h1>
        {arr.map((num => <p>{num * 5}</p>))}
        {students.map((s => <p>{s.lastName} {s.firstName} {s.age} </p>))} */}

        {/* <h1>{num}</h1> */}
        {/* <button onClick={()=> setNum(num + 1)}>ADD</button> */}
        {/* <button onClick={()=> setNum(currentNum => currentNum + 2)}>ADD</button>
        <br/>
        <h1>{userName}</h1>
        <input type="text" value={userName} onChange={(e)=> setUserName(e.target.value)}/><br/><br/><br/> */}
        {showForm &&
        <Form myDiary={diary} handleChange={changeHandler}/>
        } 
      </main>
      <Footer />
    </>
  );
}

export default App;
