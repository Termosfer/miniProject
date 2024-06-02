import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import GeneralRoutes from "./routes/GeneralRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import { useContext } from "react";
import { UserContex } from "./context/UserContext";
import { useEffect } from "react";

if (localStorage.getItem("alluser") === null) {
  localStorage.setItem("alluser", []);
}

function App() {
  const {active}= useContext(UserContex)
  useEffect(()=>{
    console.log(active)
  },[active])
  /* const islogged = true */
  return (
    <BrowserRouter>
      {active ? <GeneralRoutes /> : <AdminRoutes />}
      <Toaster position="top-center" reverseOrder={false} />
    </BrowserRouter>
  );
}

export default App;


// signup plunduqdan sonram localda tuturuq tokeni, id ni ,passwordu tuturuq
// login olunduqda sorgu atiriq single usere ordan name tutaq, 
// login olmamisdan qabaq localda tutdughumuz tokenden sorgu gonderdiyimiz token ust uste dushurmu deye shert verecik
// passwoduda state de tuturuq bunu localda saxladihimiz passwordla yoxlayiriq 
// toster chixarsin gondersin home page sonram
// 25ci sertdeki id ni localda tutub headere gonderecik
// name varsa dropdown chixarsin ad da chixsin headerde


