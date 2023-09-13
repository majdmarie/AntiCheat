import pdf from 'pdf-parse';

async function extractTextFromPDF(pdfFile) {
  const dataBuffer = await pdfFile.arrayBuffer();
  const data = new Uint8Array(dataBuffer);
  const text = await pdf(data);
  return text.text;
}

export default extractTextFromPDF;