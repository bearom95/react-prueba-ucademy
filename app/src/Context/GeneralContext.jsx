import { createContext, useState } from 'react';

const GeneralContext = createContext();

export const GeneralContextProvider = ({ children }) => {
  const [rechargeStudents, setRechargeStudents] = useState(false);

  //en el value pongo todos los estados que queremos compartidos, todo lo que
  //esté dentro podrá acceder a lo que haya en value.
  const value = {
    rechargeStudents,
    setRechargeStudents,
  };

  return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
};

export default GeneralContext;
