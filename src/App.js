import React,{useState} from 'react';
import ListItem from './ListItem';

import './App.css';
const App = ()=>{

  let [item, setItem] =useState('');
  let [listItems,setListItems] = useState([]);

  const updateValue = (event)=>{
    setItem(event.target.value);
  }
  const addItemToList= ()=>{
    setListItems((previousItemList)=>{
      let newItemList = [item,...previousItemList];
      return newItemList;
    });
    setItem('');
  }
  const removeItem = (id)=>{
    // alert('delete '+id);
    // listItems.splice(id,1);
    // setListItems((previousItemList)=>{
    //   return [...listItems];
    // }); 

    // above and below both ways works fine

    setListItems((previousItemList)=>{
      return previousItemList.filter((value,index)=>{
        return id !== index}
       )
    });

  }
  return <>
  <div className="main_div">
    <div className="center_div">
      <br/>
      <h1>To Do List</h1>
      <br/>
      <input type="text" placeholder="Add item" value={item} onChange={updateValue} />
      <button onClick={addItemToList}>+</button>
      <ol>
      {   
        listItems.map((value, index)=>{
          return <ListItem key={index} id={index} itemName={value} onSelect={removeItem} />
        })
      }
      </ol>

    </div>

  </div>
  </>;
}

export default App;