// import React from 'react'
// import icon from "../src/assets/banner_img1.png"
// import jpeg from "../src/assets/note_book.jpg"
// import Uzum from './components/Uzum'
import "./App.css"

// const App = () => {
//   const uzumData = [
//     {
//       id: 0,
//       image: jpeg,
//       span_title: "11.11",
//       subtitle_item: "Легкий ноутбук Lenovo IdeaPadSlim 3, 15,6 FullHD, 8/256GB, SSD, FreeDOS, IntelCore i3-N305", 
//     },
//     {
//       id: 1,
//       image: jpeg,
//       span_title: "11.11",
//       subtitle_item: "Легкий ноутбук Lenovo IdeaPadSlim 3, 15,6 FullHD, 8/256GB, SSD, FreeDOS, IntelCore i3-N305",
//     },
//     {
//       id: 2,
//       image: jpeg,
//       span_title: "11.11",
//       subtitle_item: "Легкий ноутбук Lenovo IdeaPadSlim 3, 15,6 FullHD, 8/256GB, SSD, FreeDOS, IntelCore i3-N305", 
//     }
//   ]
 
//   return (
//     <div className='content'>
//       {uzumData.map(el => (
//         <Uzum key={el.id} image={el.image} title={el.subtitle_item} text={el.span_title} /> 
//       ))}
//     </div>
//   )
// }

// export default App


import {useState} from "react";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: "Title 1",
      complated: false,
    },
    {
      id: 1,
      title: "Title 1",
      complated: false,
    },
    {
      id: 1,
      title: "Title 1",
      complated: false,
    },

  ]);

  const[todoTitle, setTodoTitle] = useState("");
  function addTodo(e){
    if (e.key == "Enter"){
      setTodo([...todo, {
        id: Date.now(),
        title: todoTitle,
        complated: false,
      }]);
      setTodoTitle("");
    }
  }
  return (
    <div>
      <input type="text" 
      placeholder="Type here"
      onChange={(e) => setTodoTitle(e.target.value)}
      value={todoTitle}
      onKeyDown={addTodo} />
      {todo.map((el) => (
        <TodoList key={el.id} {...el}/>
      ))}
    </div>
  );
}

export default App;