import React from "react";

export default function Loader() {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#0b0f18',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
    }}>
      <img src="/american_flag.png" alt="Chinook Water Testing Logo" style={{ width: '25%' }} />
    </div>
  );
}
