import React from 'react';

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-stone-100">
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url('/background.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
    </div>
  );
}