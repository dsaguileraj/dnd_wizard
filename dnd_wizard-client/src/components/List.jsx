import { useEffect, useState } from 'react';
import { getAllQuery } from '../api.js';

export const List = ({ app, model }) => {
  const [objects, setObjects] = useState([]);
  useEffect(() => {
    getAllQuery(setObjects, app, model);
  }, []);
  return (
    <div>
      <h1>{model.toUpperCase()}</h1>
      <ol>
        {objects.map(object => (
          <li key={object.id}>{object.name}</li>
        ))}
      </ol>
    </div>
  );
};
