import React,{useState} from 'react';



const ListItem = (props)=>{
    let [line,setLine] = useState(false);
    const toggleLine =()=>{
        if(line)
            setLine(false);
        else
            setLine(true);
    }
    return <>
        <li style={{textDecoration:line ? "line-through":"none"}}>
            <button className="removeButton" 
                onClick={()=>{
                    props.onSelect(props.id); 
                }}>X</button> {props.itemName}
            <button className="strike_btn" 
                onClick={()=>{
                    toggleLine();
                }}>-</button>
        </li>
    </>;
}
export default ListItem;