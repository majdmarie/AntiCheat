import React, { Component } from 'react';
import { Copyleaks } from 'copyleaks-api';

class PlagiarismChecker extends Component {
  constructor() {
    super();
    this.state = {
      document: null,
      plagiarismResult: null,
    };
  }

  handleFileUpload = (event) => {
    const file = event.target.files[0];
    this.setState({ document: file });
  };

  checkPlagiarism = async () => {
    const { document } = this.state;

    if (!document) {
      alert('Please select a document to check for plagiarism.');
      return;
    }

    // Initialize Copyleaks API with your API key
    const copyleaks = new Copyleaks({
      apiKey: 'YOUR_API_KEY_HERE',
    });

    try {
      // Upload the document for plagiarism check
      const result = await copyleaks.scanFile(document);

      // Set the plagiarism result in the state
      this.setState({ plagiarismResult: result });
    } catch (error) {
      console.error('Plagiarism check failed:', error);
    }
  };

  render() {
    const { plagiarismResult } = this.state;

    return (
      <div>
        <h1>Plagiarism Checker</h1>
        <input type="file" accept=".txt" onChange={this.handleFileUpload} />
        <button onClick={this.checkPlagiarism}>Check Plagiarism</button>

        {plagiarismResult && (
          <div>
            <h2>Plagiarism Result:</h2>
            <p>Similarity Score: {plagiarismResult.SimilarityScore}</p>
            <ul>
              {plagiarismResult.ScannedResources.map((resource) => (
                <li key={resource.Id}>
                  {resource.Title} - {resource.SimilarityLevel}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default PlagiarismChecker;
