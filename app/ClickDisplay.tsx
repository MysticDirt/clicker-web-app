"use client";

import React, {useState, useEffect} from 'react';

const API_URL = '/api/clicks';

const ClickDisplay: React.FC = () => {
    const [saved, setSaved] = useState<number>(0);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // Function to fetch the saved count from the backend (GET request)
  const fetchSavedCount = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch saved count');
      const data = await response.json();
      setSaved(data.clickCount);
      setIsLoading(false);
    } catch (err) {
      setError('Failed to load saved count');
      setIsLoading(false);
    }
  };


  // Fetch the saved count when the component mounts (GET request)
  useEffect(() => {
    fetchSavedCount();
  }, []);

  

  // Conditionally render loading, error, or the main content
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

    return(
        <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4">
            <h1 className={`text-3xl text-white md:text-3xl md:leading-normal`}>
                <strong>Clicker.</strong> Saved Clicks: {saved}
            </h1>
        </div>
    );
}

export default ClickDisplay;