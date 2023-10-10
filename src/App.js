import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [files, setFiles] = useState(null);


  function handleUpload() {

    if (!files) {
      console.log("No File Selected");
      return;
    }

    const fd = new FormData();
    fd.append('file', files);

    axios.post('https://httpbin.org/post', fd, {
      onUploadProgress: (progressEvent) => { console.log(progressEvent.progress * 100) },
      headers: {
        "Custom-Header": "value",
      }
    })
      .then(res => console.log(res.data))
    https://www.youtube.com/watch?v=ijx0Uqlo3NA
  }

  return (

    < div className="App" >
      <h1>Uploading Files in React</h1>
      <input onChange={(e) => { setFiles(e.target.files[0]) }} type="file" />

      <button onClick={handleUpload}>Upload</button>
    </div >
  );
}

export default App;
