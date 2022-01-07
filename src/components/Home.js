import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Fund from '../pages/Fund/List'
import Material from '../pages/Material/List'
import FundCreate from '../pages/Fund/Create'
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
        <Route exact path='/funds' component={Fund}/>
        <Route exact path='/materials' component={Material}/>
        <Route exact path='/create' component={FundCreate}/>
      </Switch>
  </section>
  {/* /.content */}
</div>

        </div>
    )
}

export default Home
