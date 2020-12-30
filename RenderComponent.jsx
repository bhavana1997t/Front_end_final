import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import CompanyHome from './company/Company';
import products from './Products/Product';
import plan from './Plan/Plan';
import bundel from './Bundel/Bundel';
import charges from './Charges/Charges';
import HomePage from './HomePage';
import ViewPlan from './Products/ViewPlan';
import ViewBundel from './Plan/ViewBundels'
import ViewProduct from './Products/ViewProducts.jsx';
import ViewCharges from './Plan/ViewCharges';
import ViewPlanCharge from './Products/ViewPlanCharge';
import viewCharges from './Charges/ViewCharges';
import ViewBundelPlans from './Bundel/ViewBundelPlans';


class  RenderComponent extends Component{
   
    
    render() {

        return (
            <div>
            <Router>
              <Route exact path="/" component={HomePage}/>
                <Route path="/company" component={CompanyHome} />
                <Route path="/products" component={products} />
                <Route path="/Plans" component={plan} />
                <Route path='/charges' component={charges}/>
                <Route path='/bundel' component={bundel}></Route>
                <Route path='/plan' component={ViewPlan}></Route>
                <Route path='/bundelsplans' component={ViewBundel}></Route>
                <Route path='/product' component={ViewProduct}/>
                <Route path='/plancharge' component={ViewPlanCharge}/>
                <Route path='/viewCharges' component={ViewCharges}/>
                <Route path='/charge' component={viewCharges}/>
                <Route path='/bundelplan' component={ViewBundelPlans}/>
            </Router>
            </div>
        );
    }
 }

 export default RenderComponent;