import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Simple Counter App</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="text-2xl mb-4">Count: {count}</p>
        <div className="flex space-x-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={() => setCount(count - 1)}
          >
            Decrement
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;