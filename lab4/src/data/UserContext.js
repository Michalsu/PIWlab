import { createContext } from "react";

const UserContext = createContext(["", ()=>{}]);
//     {
//     userName: "",
//     userPassword: "",
//     setUserName: () => {}
// })

export default UserContext;
