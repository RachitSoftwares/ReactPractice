import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import PageNotFound from "../Components/PageNotFound";
import Users from "../Components/Users";
import Home from "../Components/Home";
import Login from "../Components/Login";
import ColorChange from "../Components/ColorChange";
import TableOpr from '../Components/TableOpr';

const Routing = () => {
  const isLogin = true;

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/"element={isLogin ? <Home /> : <Navigate to="/login" />}>
            <Route>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="users" element={<Users />} />
              <Route path="colorChange" element={<ColorChange/>}/>
              <Route path="table-opr" element={<TableOpr/>}/>
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
