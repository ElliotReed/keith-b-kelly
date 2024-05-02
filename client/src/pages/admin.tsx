import React from "react"
import { Router } from "@reach/router"

import PrivateRoute from "../components/PrivateRoute"
import AdminPerformancePage from "../components/admin/performance"
import AdminLoginPage from "../components/admin/login"

import AdminLayout from "../Layouts/AdminLayout"

const AdminPage = () => {
  return (
    <AdminLayout>
      <Router basepath="/admin">
        <AdminLoginPage path="/" />
        <PrivateRoute path="/performance" component={AdminPerformancePage} />
      </Router>
    </AdminLayout>
  )
}
export default AdminPage
