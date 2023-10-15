import './App.css';
import { useState, useEffect } from 'react'
import Button from "react-bootstrap/Button"
import InputGroup from "react-bootstrap/InputGroup"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import "bootstrap/dist/css/bootstrap.min.css"
import { storage } from './firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

function App() {

  const [imageUpload, setImageUpload] = useState(null);
  const [imgList, setImgList] = useState([]);
  const imgListRef = ref(storage, "images/");
  const [loading, setLoading] = useState(false);



  const uploadImg = () => {
    if (imageUpload == null) return;
    setLoading(true);
    const imgRef = ref(storage, `images/${imageUpload.name + v4()}`);

    uploadBytes(imgRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(url => {

        setImgList((prev) => [...prev, url]);
        setLoading(false);
      });
    })
  }

  useEffect(() => {
    listAll(imgListRef).then((res) => {
      console.log(res);
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setImgList((prev) => [...prev, url]);
        })
      })
    })
  }, [])


  return (

    <div className="App" >
      <h1>Uploading Files to Firebase</h1>

      <Form>
        <Form.Group>
          <Form.Control type="file" accept="image/png, image/jpeg, image/webp" onChange={(e) => setImageUpload(e.target.files[0])} />
        </Form.Group>
      </Form>
      <Button variant="outline-primary" onClick={() => uploadImg()} >Upload</Button>
      {loading && <h1>Uploading...</h1>}
      <Stack className="img_con" direction="horizontal" gap={3}>

        {imgList.map((item) => <img src={item}></img>
        )}

      </Stack>
    </div >
  );

}

export default App;
