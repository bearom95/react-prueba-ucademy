import styled from 'styled-components';

const TableStyled = styled.table`
  font-size: 13px;
  margin: 2rem 2rem 0 0;
  border-collapse: collapse;
  table-layout: auto;
  width: 100%;
`;

export const Table = ({ children }) => {
  return <TableStyled>{children}</TableStyled>;
};

const THeadStyled = styled.thead`
  border-bottom: 2px solid #262d34;
  font-weight: 600;
`;
export const Thead = ({ children }) => {
  return <THeadStyled>{children}</THeadStyled>;
};

const TrStyled = styled.tr`
  border-collapse: collapse;
  height: 3.5rem;
`;
export const Tr = ({ children }) => {
  return <TrStyled>{children}</TrStyled>;
};

const ThStyled = styled.th`
  font-weight: 600;
`;
export const Th = ({ children }) => {
  return <ThStyled>{children}</ThStyled>;
};

const TdStyled = styled.td`
  border-bottom: 1px solid #cdcdcd;
  justify-content: flex-start;
  padding: 0 0.5rem;
`;
export const Td = ({ children }) => {
  return <TdStyled>{children}</TdStyled>;
};
