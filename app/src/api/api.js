/* import axios from 'axios'; */

//a getData igual se le puede cambiar el nombre por getUsers y se le pasa por parametro teachers y students

export const getData = async (endpoint) => {
  try {
    const response = await fetch(`http://localhost:8080/${endpoint}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('hubo un error');
  }
};
