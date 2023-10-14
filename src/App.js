import './App.css';
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [files, setFiles] = useState(null);
  const [progress, setProgress] = useState({ started: false, pc: 0 });
  const [msg, setMsg] = useState(null);


  const handleUpload = () => {
    console.log(files);
    if (!files) { setMsg("No File Selected"); return; }

    const fd = new FormData();

    for (let i = 0; i < files.length; i++) {
      fd.append(`file${i + 1}`, files[i]);
    }


    setMsg("Uploading...");

    fetch('https://httpbin.org/post', {
      method: "POST",
      body: fd,
      headers: { "Custom-Header": "value", }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Bad Response")
        }
        setMsg("Upload sucessful")
        return res.json();
      })
      .then(data => console.log(data))
      .catch(error => {
        setMsg("Upload failed")
        console.error(error)
      });



    // axios.post('https://httpbin.org/post', fd, {
    //   onUploadProgress: (progressEvent) => {
    //     setProgress(prevState => { return { ...prevState, pc: progressEvent.progress * 100 } })
    //   },
    //   headers: { "Custom-Header": "value", }
    // })
    //   .then(res => {
    //     setMsg("Upload sucessful")
    //     console.log(res.data)
    //   })
    //   .catch(error => {
    //     setMsg("Upload failed")
    //     console.error(error)
    //   });
  }
  return (

    <div className="App" >
      <h1>Uploading Files in React</h1>
      <input onChange={(e) => { setFiles(e.target.files) }} type="file" multiple accept='images/png , image/jpeg, images/webp' />

      <button onClick={handleUpload}>Upload</button>


      {msg && <span>{msg}</span>}


    </div >
  );

}

export default App;
