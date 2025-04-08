import React from 'react';
import './App.css';
import UploadButtons from './components/UploadButtons';
import ProductDropdown from './components/ProductDropdown';

function App() {
  return (
    <div className="App">
      <h1 style={{
        fontSize: '24px',
        color: '#333',
        marginBottom: '2rem',
        textAlign: 'center'
      }}>
        Gooten Lifestyle Image Creator
      </h1>

      <div className="steps-container">
        <section className="step-section">
          <h2 className="step-title">Step 1: Product Selection</h2>
          <ProductDropdown />
        </section>

        <section className="step-section">
          <h2 className="step-title">Step 2: Upload Images</h2>
          <UploadButtons />
        </section>

        <section className="step-section">
          <h2 className="step-title">Step 3: Place Order</h2>
          <button className="order-button">
            Place Order
          </button>
        </section>
      </div>
    </div>
  );
}

export default App;
