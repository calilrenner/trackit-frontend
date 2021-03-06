import { BrowserRouter, Route, Switch } from "react-router-dom";
import '../reset.css'
import { useState } from "react";
import Login from "./Login/login";
import Register from "./Register/register";
import Habits from "./Habits/habits";
import Today from "./Today/today";
import History from "./History/history";
import UserContext from "../Shared/Components/userContext/userContext";

export default function App() {
  const [userData, setUserData] = useState('');
  const [progress, setProgress] = useState(0);

  return (
    <UserContext.Provider value={{userData, setUserData, setProgress, progress}}>
    <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Login} setUserData={setUserData}/>
      <Route path='/cadastro' exact component={Register} />
      <Route path='/hoje' exact component={Today}/>
      <Route path='/habitos' exact component={Habits} />
      <Route path='/historico' exact component={History} />
    </Switch>
    </BrowserRouter>
    </UserContext.Provider>
  );
};
