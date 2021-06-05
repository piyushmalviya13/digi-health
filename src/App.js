import './App.css';
import Landing from './components/Landing';
import Login from './components/Login';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import DoctorDashboard from './components/DoctorDashboard';
import SearchPatient from './components/SearchPatient';
import PatientDashboard from './components/PatientDashboard';
import NewRecord from './components/NewRecord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/doctorDashboard' component={DoctorDashboard}></Route>
          <Route path='/searchPatient' component={SearchPatient}></Route>
          <Route path='/patientDashboard' component={PatientDashboard}></Route>
          <Route path='/newRecord' component={NewRecord}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
