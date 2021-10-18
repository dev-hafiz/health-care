import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import Doctors from './Pages/Home/Doctors/Doctors';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Login/Login';
import NavMenu from './Pages/Home/NavMenu/NavMenu';
import Register from './Pages/Home/Register/Register';
import { ServiceDetail } from './Pages/Home/ServiceDetail/ServiceDetail';
import Services from './Pages/Home/Services/Services';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {

  return (
    <div className="">
        <AuthProvider>
        <Router>
      <NavMenu/>
        <Switch>
            <Route exact path ="/">
                <Home/>
            </Route>
            <Route path ="/home">
                <Home/>
            </Route>
            <Route path ="/services">
                <Services/>
            </Route>
            <Route path ="/doctors">
                <Doctors/>
            </Route>
            <Route path ="/login">
                <Login/>
            </Route>
            <Route path ="/register">
                <Register/>
            </Route>
            <PrivateRoute path ="/service/:serviceId">
                <ServiceDetail/>
            </PrivateRoute>

            <Route path ="*">
                <NotFound/>
            </Route>
        </Switch>
        <Footer/>
    </Router>

        </AuthProvider>
    </div>
  );
}

export default App;
