import './App.css'
import Api from './assets/components/Api'
import Effect from './assets/components/Effect'
import Herosection from './assets/components/Herosection'
import Navbar from './assets/components/Navbar'
import Signup from './assets/components/Signup'


function App() {
  let pStyle = {
    color: 'red',
    fontFamily: 'cursive'
  }

  // let studentArray = ["John", "OluwaFemi", "Kayode", "Simeon"]
  // console.log(studentArray);

  // let anotherArray = [
  //   {
  //     Name:"John",
  //     School:"SQI",
  //     Age:"211"
  //   },
  //   {
  //     Name:"Olu",
  //     School:"SQI",
  //     Age:"211"
  //   },
  //   {
  //     Name:"Kayode",
  //     School:"SQI",
  //     Age:"211"
  //   },
  //   {
  //     Name:"Simeon",
  //     School:"SQI",
  //     Age:"211"
  //   }
  // ]
  return (
    <>
      {/* <Navbar/> */}
      {/* <Herosection/> */}
      {/* <Signup/> */}
      {/* <Api/> */}
      <Effect/>

      {
        // anotherArray.map((item,index)=>(
        //   <>
        //   <small>{index+1}</small>
        //   <h1>{item.Name}</h1>
        //   <h1>{item.School}</h1>
        //   <h1>{item.age}</h1>
        //   </>
        // ))
      }
    </>
  )
}

export default App
