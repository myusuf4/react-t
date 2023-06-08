import React from "react";
import Elements from "../components/elements";
import Home from "../components/home/index";
import Navbar from "../components/navbar";
import Pages from "../components/pages";
import Templates from "../components/templates";
import {Route,Switch} from "react-router-dom"
import {Redirect} from "react-router-dom"

const Root=()=>{
  return(
    <div>
      <Navbar/>
      <Switch>
      <Route exact path={"/"}>
        <Redirect to={"/home"}/>
      </Route>
      <Route path={"/home"}>
        <Home/>
      </Route>
      <Route path={"/pages"}>
        <Pages/>
      </Route>
      <Route path={"/templates"}>
        <Templates/>
      </Route>
      <Route path={"/elements"}>
        <Elements/>
      </Route>
      <Route path={"*"}>
        <h1>404 NOT FOUND</h1>
      </Route>
      </Switch>
    </div>
  )
}
export default Root