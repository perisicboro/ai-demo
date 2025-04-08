import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          color: '#333',
          marginBottom: '2rem'
        }}>
          Gooten Lifestyle Image Creator
        </h1>
        <div style={{
          width: '80%',
          maxWidth: '800px',
          height: '400px',
          backgroundColor: '#f5f5f5',
          border: '2px dashed #ccc',
          borderRadius: '8px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '2rem'
        }}>
          <p style={{ color: '#666' }}>Image View Area</p>
        </div>
        <button style={{
          backgroundColor: '#2196F3',
          color: 'white',
          padding: '12px 24px',
          border: 'none',
          borderRadius: '4px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}
        onMouseOver={(e) => e.target.style.backgroundColor = '#1976D2'}
        onMouseOut={(e) => e.target.style.backgroundColor = '#2196F3'}>
          Place an Order
        </button>
      </div>
    </div>
  );
}

export default App;
