import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { getData } from '../api/api';
import plus from '../assets/plus.png';
import { Button } from '../components/Button';
import { ImgModalInfo } from '../components/Modals/ModalInfo';
import { ImgModalNew } from '../components/Modals/ModalNewUser';
import { Table, Td, Thead, Tr } from '../components/Table';
/* import { Img } from '../componentsui/Img'; */
import { Parraf } from '../componentsui/Parraf';
import { Div } from '../componentsui/StyledDiv';

export const Students = () => {
  const [estudiantes, setStudents] = useState([]);

  useEffect(() => {
    (async () => {
      const allstudents = await getData('students');
      setStudents(allstudents);
    })();
  }, [JSON.stringify(estudiantes)]);

  console.log(estudiantes);

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

  const renderStudents = () => {
    return estudiantes.map((item) => {
      return (
        <Tr key={uuidv4()}>
          <Td>offline</Td>
          <Td>
            {item.name} {item.surname}
          </Td>
          <Td>{item.username}</Td>
          <Td>{item.email}</Td>
          <Td>{item.phone}</Td>
          <Td>
            <ImgModalInfo item={item} cursor="pointer" />
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
      <Button newgreen>
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
      </Button>
      <Table>
        {renderHeader()}
        <tbody>{renderStudents()}</tbody>
      </Table>
    </Div>
  );
};
