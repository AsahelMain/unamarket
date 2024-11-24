import React from 'react';

function ImageDecoder({ base64Image }) {
  // Decodificar la imagen Base64
  const decodedImage = base64Image && `data:image/jpeg;base64,${base64Image}`;

  return (
    <div>
      {decodedImage && (
        <img src={decodedImage} alt="Decoded Image" />
      )}
    </div>
  );
}

export default ImageDecoder;
