"use client";

import React, {useState, useEffect} from 'react';

const API_URL = '/api/clicks';

const Clicker: React.FC = () => {
  // TypeScript automatically infers `count` as a number
  const [count, setCount] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const saveClickCount = async () => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ clickCount: count }), // Send the current click count
      });
      if (!response.ok) throw new Error('Failed to save count');
    } catch (err) {
      setError('Failed to save count');
    }
  };

  // Function to handle click and increment the count
  const handleClick = (): void => {
    setCount(count + 1);
  };

  // Function to handle the button click and save the count
  const handleSaveClick = (): void => {
    saveClickCount(); 
    window.location.reload();
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }} >
        <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal mb-4`}>
            <strong>Relax.</strong> Take a breath and click away.
        </p>
        <div className="flex justify-center mb-4">
            <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }} className="self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base mr-4">
                Click Me
            </button>
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal flex`}>
                You've clicked the button {count} {count === 1 ? "time" : "times" }.
            </p>
        </div>
        <button onClick={handleSaveClick} style={{ padding: '10px 20px', fontSize: '16px' }} className="self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base mr-4">
            Add to Saved Count
        </button>
      
    </div>
  );
};

export default Clicker;
