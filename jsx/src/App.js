import './App.css';
import image from "./insrc.jpg"
import myvideo from "./myvideo.mp4"
function App() {
  return (
    <div className="App">
     <h1>
       Hello jsx
     </h1>
     <>
  <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red"> Amani </h1>
  
    <img src="/imageInSrc.jpg" alt="not found" />
    <div className='img2'>

    <img src="/imageInPublic.jpg" alt="not found"/>

    </div>

    

  </div>
  <video width={320} height={240} controls="controls" >
    <source src={myvideo}  />

  </video>


 <img src={image} alt ='myImage' />

</>
<img src="/imageinpublic.png" alt="myimage" />

    </div>
  );
}

export default App;
