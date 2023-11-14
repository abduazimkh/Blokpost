import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';


const Create = () => {
  const [value, setValue] = useState(''); 
  return (
    <div>
      <form >
        <input type="text" placeholder='Title'/>
        <ReactQuill theme="snow" value={value} onChange={setValue} />

        <select name="" id="">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
    </div>
  )
}

export default Create