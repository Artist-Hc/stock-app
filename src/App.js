import React, { useEffect, useState } from 'react'
import { Switch, Route } from 'react-router-dom'


import axios from 'axios';

function App() {
  const [movie, setMovie] = useState([]);
  const url = `http://www.omdbapi.com/?i=tt3896198&apikey=8a1765d3`;

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const { data } = await axios(url);
      setMovie(data?.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        {movie && (
          <ul>
            {movie.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;