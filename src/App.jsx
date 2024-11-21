import { BrowserRouter, Routes,Route } from 'react-router-dom'
import PublicLayout from './layouts/PublicLayout'
import Login from './routes/public/login'
import PrivateLayout from './layouts/PrivateLayout'
import Dashboard from './routes/private/Dashboard'
import AuthProvider from './contexts/AuthProvider'
import ProtectedRoute from './routes/private/ProtectedRoute'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Login />} />
          </Route>
          <Route path="/app" element={<PrivateLayout />}>
            <Route
              path='/app/dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
