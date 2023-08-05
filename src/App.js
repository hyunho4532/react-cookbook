import { useRef, useState } from 'react';
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// const dummyList = [
//   {
//     id: 1,
//     author: "Hyunho4532",
//     content: "Hello 1",
//     emotion: 5,
//     create_date: new Date().getTime(),
//   },

//   {
//     id: 2,
//     author: "홍길동",
//     content: "Hello 2",
//     emotion: 4,
//     create_date: new Date().getTime(),
//   },

//   {
//     id: 3,
//     author: "아무개",
//     content: "Hello 3",
//     emotion: 2,
//     create_date: new Date().getTime(),
//   },
// ]

function App() {

  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const create_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      create_date,
      id : dataId.current
    }

    dataId.current += 1;
    
    setData([...data, newItem]);
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} />
    </div>
  );
}

export default App;
