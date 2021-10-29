import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home/Home';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './Contexts/AuthProvider';
import Booking from './Pages/UserAccess/Booking/Booking';
import AddPlace from './Pages/UserAccess/AddPlace/AddPlace';
import MyBooking from './Pages/UserAccess/MyBooking/MyBooking';
import AllBooking from './Pages/UserAccess/AllBooking/AllBooking';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <Router>

          <Header></Header>

          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            {/* <Route path="/places">
              <Place></Place>
            </Route> */}

            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>

            <Route path="/myBooking">
              <MyBooking></MyBooking>
            </Route>

            <Route path="/allBooking">
              <AllBooking></AllBooking>
            </Route>

            <Route path="/addPlace">
              <AddPlace></AddPlace>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>

          <Footer></Footer>

        </Router>

      </AuthProvider>
    </div>
  );
}

export default App;
