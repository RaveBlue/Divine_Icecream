import { useRef, useState } from 'react';
import "./ItemForm.css";
import Input from "./Input";

const ItemForm = (props) => {
  const amountInputRef = useRef();


  const submitHandler = event => {
    event.preventDefault();

     const enteredAmount = amountInputRef.current.value;
     const enteredAmountNumber = +enteredAmount;

     if (enteredAmount.trim().length === 0 || 
     enteredAmountNumber < 1 || 
     enteredAmountNumber > 5
     ){
      return;
     }
  };


  return (
  <form className="form" on Submit={submitHandler}> 
    <input
    ref={amountInputRef}
    label="Amount"
    input={{
      id:'amount_' + props.id,
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1',
    }}
    />
    <button> + Add</button>
  </form>
  );
};


export default ItemForm;