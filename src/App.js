import './App.css';
import { useState } from 'react'
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import "bootstrap/dist/css/bootstrap.min.css"
import { storage } from './firebase'
import { ref, uploadBytes } from 'firebase/storage'
import { v4 } from 'uuid'

function App() {

  const [imageUpload, setImageUpload] = useState(null);


  const uploadImg = () => {
    if (imageUpload == null) return;

    const imgRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imgRef, imageUpload).then(() => {
      alert("images uploaded");
    })

  }

  return (

    <div className="App" >
      <h1>Uploading Files in React</h1>

      <Form>
        <Form.Group>
          <Form.Control type="file" onChange={(e) => setImageUpload(e.target.files[0])} />
        </Form.Group>
      </Form>
      <Button variant="outline-primary" onClick={() => uploadImg()} >Upload</Button>

    </div >
  );

}

export default App;
