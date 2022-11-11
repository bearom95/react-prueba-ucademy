import { useEffect, useState } from 'react';

import { getData } from '../api/api';

export const Teachers = () => {
  const [profes, setProfes] = useState([]);

  useEffect(() => {
    (async () => {
      const allteachers = await getData('teachers');
      setProfes(allteachers);
      console.log(profes);
    })();
  }, [JSON.stringify(profes)]);

  return (
    <>
      <h2>Dashboard page Profes</h2>
      <div>
        {profes.map((profe) => (
          <h1 key={profe.id}>{profe.name}</h1>
        ))}
      </div>
    </>
  );
};
