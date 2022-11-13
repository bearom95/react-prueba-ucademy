import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getData } from '../api/api';
/* import plus from '../assets/plus.png';
import { Button } from '../components/Button';
import { ImgModalNew } from '../components/Modals/ModalNewUser'; */
import { Table, Td, Thead, Tr } from '../components/Table';
/* import { Parraf } from '../componentsui/Parraf'; */
import { Div } from '../componentsui/StyledDiv';

export const Teachers = () => {
  const [profes, setProfes] = useState([]);

  useEffect(() => {
    (async () => {
      const allteachers = await getData('teachers');
      setProfes(allteachers);
      console.log(profes);
    })();
  }, [JSON.stringify(profes)]);

  const renderHeader = () => {
    return (
      <Thead borderbottom="2px solid #262d34">
        <Tr>
          <Td>Conexión</Td>
          <Td>Nombre y Apellidos</Td>
          <Td>Nombre de Usuario</Td>
          <Td>Email</Td>
          <Td>Móvil</Td>
          <Td></Td>
        </Tr>
      </Thead>
    );
  };

  const renderTeachers = () => {
    return profes.map((item) => {
      return (
        <Tr key={uuidv4()}>
          <Td>
            <button
              style={{
                all: 'unset',
                'font-weight': 300,
                'font-size': '10px',
                padding: '0.1rem',
                border: '0.5px solid #9E9E9E',
                'border-radius': '5px',
                'background-color': '#F0F4F3',
              }}
            >
              Offline
            </button>
          </Td>
          <Td>
            {item.name} {item.surname}
          </Td>
          <Td>{item.username}</Td>
          <Td>{item.email}</Td>
          <Td>{item.phone}</Td>
          <Td>
            {/*  <UserContext.Provider value={item}>
              <ImgModalInfo item={item} />
            </UserContext.Provider> */}
          </Td>
        </Tr>
      );
    });
  };

  return (
    <Div
      display="flex"
      flexwrap="wrap"
      flexdir="column"
      width="85%"
      padding="2rem 2rem 0 2rem"
    >
      {/* <Button newgreen>
        <ImgModalNew
          src={plus}
          alt="plus logo"
          display="block"
          cursor="pointer"
          padding="0 0 0 0.5rem"
        />
        <Parraf fontfamily="Poppins" fontcolor="white" padding="0 0.5rem 0 0">
          Nuevo Estudiante
        </Parraf>
      </Button> */}
      <Table>
        {renderHeader()}
        <tbody>{renderTeachers()}</tbody>
      </Table>
    </Div>
  );
};

/* return (
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
 */
