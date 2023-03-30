import React from 'react';
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from './pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      // old react router
  //   <AuthWrapper>

  //  <Router>
  //   <Switch>
  //     <PrivateRoute path='/' exact={true} >
  //       <Dashboard></Dashboard>
  //     </PrivateRoute>
  //     <Route path='/login'>
  //      <Login />
  //     </Route>
  //     <Route path='*'>
  //       <Error></Error>
  //     </Route>
  //   </Switch>
  //  </Router>
  //   </AuthWrapper>     
    
    // old react router

    // router@6
    <AuthWrapper>
     <Router>
       <Routes>
          <Route path='/' element={
            <PrivateRoute>

          <Dashboard/>
            </PrivateRoute>
          
          }/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Error/>}/>
       </Routes>
     </Router>
    </AuthWrapper> 
    
   
  );
}

export default App;
