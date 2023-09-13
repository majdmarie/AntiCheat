import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';

const AzureOCRComponent = () => {
  const [extractedText, setExtractedText] = useState('');
  const [loading, setLoading] = useState(false);

  // Your Azure OCR API endpoint and API key
  const azureEndpoint = 'YOUR_AZURE_ENDPOINT';
  const azureApiKey = 'YOUR_AZURE_API_KEY';

  const onDrop = async (acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setLoading(true);
      const formData = new FormData();
      formData.append('file', file);

      try {
        // Make a POST request to Azure OCR service
        const response = await axios.post(`${azureEndpoint}/vision/v3.0/ocr`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Ocp-Apim-Subscription-Key': azureApiKey,
          },
        });

        // Process the response and extract the text
        const extractedText = response.data.regions.map((region) =>
          region.lines.map((line) => line.words.map((word) => word.text).join(' ')).join('\n')
        );

        setExtractedText(extractedText.join('\n'));
        setLoading(false);
      } catch (error) {
        console.error('Error extracting text:', error);
        setLoading(false);
      }
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div>
      <h2>OCR Text Extraction</h2>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag & drop an image or document here, or click to select one.</p>
      </div>
      {loading ? (
        <p>Extracting text...</p>
      ) : (
        <div>
          <h3>Extracted Text:</h3>
          <pre>{extractedText}</pre>
        </div>
      )}
    </div>
  );
};

export default AzureOCRComponent;
