import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

function FileUpload() {
  const [uploadedFile, setUploadedFile] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setUploadedFile(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: '.pdf',
  });

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag &amp; drop a PDF file here, or click to select one</p>
      </div>
      {uploadedFile && <p>Uploaded File: {uploadedFile.name}</p>}
    </div>
  );
}

export default FileUpload;
