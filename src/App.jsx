import React, { useState , useEffect }from 'react'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

const App = () => {

 

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: 'dkqdts2ye'
  //   }
  // });
  // const myImage = cld.image('autoCloud.webp'); 
  // myImage.resize(fill().width(250).height(250));


  const [image, setImage] = useState(null);

  const handleImageUpload = async () => {
    // Crear un objeto FormData para enviar la imagen a Cloudinary
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'prueba'); // Reemplaza con tu propio upload preset

    // Hacer una solicitud POST a la API de Cloudinary para subir la imagen
    const response = await fetch(`https://api.cloudinary.com/v1_1/dkqdts2ye/upload`, {
      method: 'POST',
      body: formData,
    });

    // Analizar la respuesta de Cloudinary y mostrar la URL de la imagen subida
    const data = await response.json();
    console.log(data.secure_url);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

 


  return (
    <div className="App-body">
      <h1>React Quick Start</h1>
      {/* <div>
        <AdvancedImage cldImg={myImage} />
      </div> */}
      <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>Subir imagen</button>
    </div>
    </div>
  )
}

export default App
