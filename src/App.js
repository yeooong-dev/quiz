import React, { useState } from 'react';
import './App.css';
import User from './components/User';

const App = () => {
  const [users, setUsers] = useState([
      // {
      //   id : 0,
      //   title : "title",
      //   memo : "memo",
      //   isDone : false, 
      // }
  ]);

  const [title, setTitle] = useState('');
  const [memo, setMemo] = useState('');

  const titleAddHandler = (event) => {
    setTitle(event.target.value);
  }
  const memoAddHandler = (event) => {
    setMemo(event.target.value);
  }
  //toggle button
  const clickToggleButtonHandler = (id) => {
    const newUser = users.map((user)=> user.id === id ? {...user,isDone : !user.isDone}:user)
    setUsers(newUser);
  }

  //추가 버튼
  const clickAddButtonHandler = (id) => {
    const newUser = {
      id : users.length + 1,
      title : title,
      memo : memo,
      isDone : false,
    }
    setUsers([...users, newUser])
    setMemo('')
    setTitle('')
  }
   

  return (
    <div>
      <h1 className='todo_title'>My Todo List</h1>
      <div className='a_style'>
          <input className='title_style' type='text' placeholder='제목' value={title} onChange={titleAddHandler} />
          <button onClick={clickAddButtonHandler}>추가하기</button>
      </div>

      <div className='center'>
        <div className='m'>
          {users.filter(v=>v.isDone === false).map(function(item){
          return <User className="bg_style" key={item.id} item = {item} toggleFuction = {clickToggleButtonHandler} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
