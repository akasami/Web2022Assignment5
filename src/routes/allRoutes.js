import React from "react"
import { Redirect } from "react-router-dom"

// My Imports
import Dashboard from "../pages/Dashboard/index"
import Projects from '../pages/Projects/index';
import Teams from '../pages/Teams/index';
import MyTasks from '../pages/MyTasks/index';

const userRoutes = [
  { path: "/dashboard", component: Dashboard },
  {path:"/projects" , component:Projects},
  {path:"/teams" , component:Teams},
  {path:"/mytasks" , component:MyTasks},
  // this route should be at the end of all other routes
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]


export { userRoutes }