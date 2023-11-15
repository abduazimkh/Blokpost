import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import "./Create.scss";
import { Button } from "../../../utils";

const Create = () => {
  const [value, setValue] = useState(''); 
  return (
    <div className='create'>
      <form className='create__form'>
        <input className='form__input' type="text" placeholder='Title'/>
        <ReactQuill theme="snow" value={value} onChange={setValue} />

        <select name="" id="" className='form__input'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <Button text={"Create"} />
      </form>
    </div>
  )
}

export default Create