import React from "react"
import { Switch, Route } from 'react-router'
import AddBusiness from "./components/AddBusiness"
import FirstBusiness from "./components/FirstBusiness"
import Listings from "./components/Listings"
import Login from "./containers/Login"
import SecondBusiness from "./components/SecondBusiness"
import ThirdBusiness from "./components/ThirdBusiness"
import FourthBusiness from "./components/FourthBusiness"
import LogoutButton from "./components/LogoutButton"

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/Login" component={Login} />
            <Route path="/AddBusiness" component={AddBusiness} />
            <Route path="/FirstBusiness" component={FirstBusiness} />
            <Route path="/SecondBusiness" component={SecondBusiness} />
            <Route path="/ThirdBusiness" component={ThirdBusiness} />
            <Route path="/FourthBusiness" component={FourthBusiness} />
            <Route path="/LogoutButton" component={LogoutButton} />
        </Switch>
    )
}

export default Router