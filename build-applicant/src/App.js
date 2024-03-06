import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import TentangSBI from "./components/pages/TentangSBI";
import LowonganKerja from "./components/pages/LowonganKerja";
import SignIn from "./components/pages/SignIn";
import Register from "./components/pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Forgot from "./components/pages/Forgot";
import PassBaru from "./components/pages/PassBaru";
import HomeUser from "./components/User/HomeUser";
import Pengumuman from "./components/User/Pengumuman";
import Berkas from "./components/User/Berkas";
import PassBaruUser from "./components/User/PassBaruUser";
import CVOnlineUser from "./components/User/CVOnlineUser";
import FormLamar from "./components/User/FormLamar";
import BerkasUpdate from "./components/User/BerkasUpdate";
import InfoPelamar from "./components/User/InfoPelamar";
import { ProtectedRoute } from "./lib/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./components/Navbar";
import Faq from "./components/pages/FaqPage";
// initialize the client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router>
          <Switch>
            {/* Login Sebelum User Masuk */}
            <Route path="/" exact component={Home} />
            <Route path="/tentang-sbi" component={TentangSBI} />
            <Route path="/lowongan-kerja" component={LowonganKerja} />
            <Route path="/faq-page" component={Faq} />
            {/* <Route path="/detail-lowongan" component={DetailLowongan}/> */}

            {/* Halaman user setelah login */}
            <Route path="/home-user">
              <ProtectedRoute>
                <HomeUser />
              </ProtectedRoute>
            </Route>

            <Route path="/passloginbaru">
              <ProtectedRoute>
                <PassBaruUser />
              </ProtectedRoute>
            </Route>
            <Route path="/berkas">
              <ProtectedRoute>
                <Berkas />
              </ProtectedRoute>
            </Route>
            <Route path="/pengumuman">
              <ProtectedRoute>
                <Pengumuman />
              </ProtectedRoute>
            </Route>
            <Route path="/cvonline-user">
              <ProtectedRoute>
                <CVOnlineUser />
              </ProtectedRoute>
            </Route>
            <Route path="/form-lamar">
              <ProtectedRoute>
                <FormLamar />
              </ProtectedRoute>
            </Route>
            <Route path="/berkas-update">
              <ProtectedRoute>
                <BerkasUpdate />
              </ProtectedRoute>
            </Route>
            <Route path="/info-pelamar">
              <ProtectedRoute>
                <InfoPelamar />
              </ProtectedRoute>
            </Route>

            {/*Halaman Login*/}
            <Route path="/sign-in" component={SignIn} />
            <Route path="/nav" component={Navbar} />
            <Route path="/register" component={Register} />
            <Route path="/lupa-password" component={Forgot} />
            <Route path="/pass-baru/:token" component={PassBaru} />
          </Switch>
        </Router>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
