import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import routes from '../Routes/routes';
function Home() {
    return (
        <div>
            <div className="content-wrapper">
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0">Dashboard</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#">Home</a></li>
            <li className="breadcrumb-item active">Dashboard v1</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <section className="content">
  
      <Switch>
      {routes.map((route, i) => {
 const {
 path,
 Component
 } = route
 return <Route key={i} path={path}>
 <Component />
 </Route>
 })}

        {/* <Route exact path='/funds' component={Fund}/>
        <Route exact path='/materials' component={Material}/>
        <Route exact path='/funds/create' component={FundCreate}/>
        <Route path='/types' component={Type}/>
        <Route path='/merks' component={Merk}/>
        <Route path='inventory-books' component={InventoryBook}/> */}
      </Switch>
  </section>
  {/* /.content */}
</div>

        </div>
    )
}

export default Home
