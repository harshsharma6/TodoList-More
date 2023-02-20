import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
export const TodoList = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState([]);
    const [click, setClick] = useState(false)
    function addItem() {
        if (!inputData) {
            window.alert("Please Enter Something");
        } else {
            setItems([...items, inputData])
            console.log(inputData)
        }
    }
    function deleteItem(id) {
        const updatedItems = items.filter((newItems, ind) => {
            return ind !== id;
        })
        setItems(updatedItems)
    }
    function editItem(id) {
        if (!inputData) {
            window.alert("Please Enter Something");
        } else {
            setItems([...items, inputData])
            console.log(inputData)
            setClick(false)
        }
    }
    return (
        <>
            <div className='todo'>
                <div className='txt-white'>
                    <h1>TODO - LIST</h1>
                </div>
                <div className="input-group mb-3">
                    <input type="text" className='form-control' placeholder='Type Here' value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
                    <button className="input-group-text" onClick={addItem}><i className="zmdi zmdi-plus" title="Add"></i></button>
                </div>
                <h3 className='txt-white'>
                    To Do -
                </h3>
                <div className="input-group mb-3">
                    {items.map((listItem, ind) => {

                        return (
                            <div className="input-group mb-3">
                                <div className='form-control'>{listItem}</div>
                                <button className="input-group-text" onClick={()=>deleteItem(ind)}><i className="zmdi zmdi-minus" title="Remove"></i></button>
                            </div> 
                        )
                    })}
                </div>
            </div>
        </>
    )
}
//code for edit to replace in the return value of map
{/* <div className="input-group mb-3">
                                <div className='form-control'>{listItem}</div>
                                {click ? <div className="input-group mb-3"><input type="text" className='form-control' placeholder='Type Here' value={inputData} onChange={(e) => setInputData(e.target.value)}></input>
                                    <button className="input-group-text" onClick={() => editItem(ind)}><i className="zmdi zmdi-check-all" title="Save"></i></button> </div>
                                    : <div className='form-control'>{listItem}</div>}

                                <button className="input-group-text" onClick={() => setClick(true)}><i className="zmdi zmdi-edit" title="Edit"></i></button>
                                <button className="input-group-text" onClick={() => deleteItem(ind)}><i className="zmdi zmdi-minus" title="Remove"></i></button>
                            </div> */}