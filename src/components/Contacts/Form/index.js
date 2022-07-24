import React, {useState, useEffect} from 'react';
import  '../List/styles.css';
const initialFormValues ={ fullname: "", phone_number:""};
function Form({addContact, contacts}) {
  //console.log(addContact)
  const [form, setForm] = useState(initialFormValues);
  useEffect(()=>{
    setForm(initialFormValues)
  },[contacts])
  const onChangeInput = (e) =>{
    setForm({...form, [e.target.name]: e.target.value})
  }
  const  ubmit = (e) => {
    e.preventDefault();
    if(form.fullname === "" || form.phone_number === ""){ 
      return  false; 
    }
    addContact([...contacts, form])
    
    
   // console.log(form)
  }
  return (
    <form id="submit" onSubmit={ubmit}>
      <div>
        <input value={form.fullname} name="fullname" placeholder='Full Name' onChange={onChangeInput}/>
      </div>
      <div>
        
        <input value={form.phone_number} name="phone_number" placeholder='Phone Numper' onChange={onChangeInput}/>
      </div>
      <div>
        <button className="btn">Add</button>
      </div>
    </form>
  )
}

export default Form;
