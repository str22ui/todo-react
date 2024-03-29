import { useState } from "react"

export function NewTodosForm(props){
    
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        if(newItem === "") return
        
        props.onSubmit(newItem)
    
        setNewItem("")
        
      }
    return(
        <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='for-row'>
          <label htmlFor="item">New Item</label>
            <input type="text" value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            id="item" />
        </div>
        <button className="btn">Add</button>
      </form>
    )
}