import React from "react";

export default function Loader() {
  return (
    <div style={{
      height: '100vh',
      backgroundColor: '#0b0f18',
      color: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '1.2rem',
    }}>
      <img src="/company-logo.webp" alt="Outdoor Movie Pros Logo" style={{ width: '25%' }} />
    </div>
  );
}