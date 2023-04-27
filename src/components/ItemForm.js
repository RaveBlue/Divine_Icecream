import "./ItemForm.css";
import Input from "./Input";

const ItemForm = (props) => {
  return (
  <form className="form"> 
    <input
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