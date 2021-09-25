import { createContext } from "react";

const UserContext = createContext({
  nombre: null,
  placa: null,
  monto: 0,
});

export default UserContext;
