import React from 'react'
import { Switch, Route ,NavLink, Routes } from 'react-router-dom';
function SideNav() {
    return (
        <div>
        {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Pusat Data</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Admin PAW</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Master
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/funds" className="nav-link">
              <i className="far fa-circle nav-icon" />Asal Dana</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/materials" className="nav-link">
              <i className="far fa-circle nav-icon" />Bahan</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/merks" className="nav-link">
              <i className="far fa-circle nav-icon" />Merk</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/types" className="nav-link">
              <i className="far fa-circle nav-icon" />Type</NavLink>
            </li>
          </ul>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Pengelola Aset Wakaf
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/inventoryBooks" className="nav-link">
              <i className="far fa-circle nav-icon" />Buku Inventory
              </NavLink>
            </li>  
          </ul>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
            Santri Penerima Amanah
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/inventoryBook" className="nav-link">
              <i className="far fa-circle nav-icon" />Santri
              </NavLink>
            </li>  
          </ul>
        </li>
        <li className="nav-item ">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
            Machine
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <NavLink to="/machine/create" className="nav-link">
              <i className="far fa-circle nav-icon" />Santri
              </NavLink>
            </li>  
          </ul>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>

        </div>
    )
}

export default SideNav
