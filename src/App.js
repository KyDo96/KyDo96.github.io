import AuthPage from "./containers/authPage";
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PageNotFound from './containers/PageNotFound'
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path='/' component={AuthPage}/>
        <Route path='' component={PageNotFound}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
