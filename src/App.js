import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Header } from './Header'

const Step1 = () => <>Step 1</>
const Step2 = () => <>Step 2</>
const Step3 = () => <>Step 3</>
const Result = () => <>Result</>


function App() {
  return (
    <>
      <Header />
      <Router >
        <Switch >
          <Route exact path="/" component={Step1} />
          <Route exact path="/step2" component={Step2} />
          <Route exact path="/step3" component={Step3} />
          <Route exact path="/result" component={Result} />
        </Switch>
      </Router >
    </>
  );
}

export default App;
