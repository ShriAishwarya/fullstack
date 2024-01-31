
// // src/App.jsx Final login
// import React from 'react';
// import { FlexboxGrid } from 'rsuite';
// import LoginForm from './Components/Pages/LoginForm';
// import SignUpForm from './Components/Pages/SignUpForm';

// const App = () => {
//   const handleLoginSubmit = (data) => {
//     console.log('Logging in with:', data);
//   };

//   const handleSignUpSubmit = (data) => {
//     console.log('Signing up with:', data);
//   };

//   return (
//     <FlexboxGrid>
//       <FlexboxGrid.Item colspan={12}>
//         <LoginForm onSubmit={handleLoginSubmit} />
//       </FlexboxGrid.Item>
//       <FlexboxGrid.Item colspan={12}>
//         <SignUpForm onSubmit={handleSignUpSubmit} />
//       </FlexboxGrid.Item>
//     </FlexboxGrid>
//   );
// };

// export default App;



//finall navbar app
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./Components/Pages/About"
import Home from "./Components/Pages/Home"
//import Contact from "./Components/Pages/Contact"
import { Suspense, lazy } from "react"
import Spinner from "./Components/Spinner"
import { CustomProvider } from "rsuite";
// import CustomSidebar from "./Components/CustomSidebar";
import Hist from "./Components/Pages/BookingHistory"
// import LoginForm from "./Components/Pages/LoginForm"
// import PersonalProfile from "./Components/Pages/UserPreofile"
// const LazyAbout=lazy(()=>import("./Components/Pages/About"));
// const LazyBooking=lazy(()=>import("./Components/Pages/About"));

const LazyBooking=lazy(()=>import("./Components/Pages/Booking"));
const LazyContact=lazy(()=>import("./Components/Pages/Contact"));
const LazyAbout=lazy(()=>import("./Components/Pages/About"));
const LazyBookingHistory=lazy(()=>import("./Components/Pages/BookingHistory"));
const LazyLogIn=lazy(()=>import("./Components/Pages/LoginForm"));
const LazySignUp=lazy(()=>import("./Components/Pages/SignUpForm"));
const LazyProfile=lazy(()=>import("./Components/Pages/UserPreofile"));
const LazyCh=lazy(()=>import("./Components/Pages/Admin/CustomSidebar"));
// const LazyCh=lazy(()=>import("./Components/Pages/Admin/Chart"));
const LazyStays=lazy(()=>import("./Components/Pages/RetreatDetails"));
// const LazySidebar=lazy(()=>import("./Components/Pages/Admin/Ana"));
// const LazyCh=lazy(()=>import("./Components/Pages/Admin/Sidebar"));
const LazyPay=lazy(()=>import("./Components/Pages/PaymentPage"));
// const LazyDash=lazy(()=>import("./Components/Pages/Dashboard"));
// import PaymentPage from "./Components/Pages/PaymentPage"
// import AdminProfile from "./Components/Pages/Admin/AdminProfile"
const LazyAdProf=lazy(()=>import("./Components/Pages/Admin/AdminProfile"));
const LazyDash=lazy(()=>import("./Components/Pages/Admin/Chart"));


const App = () => {

    const router=createBrowserRouter ([
      {
    path:'/home',
    element:<Suspense fallback={<Spinner />}><Home/></Suspense>
      },
      {
        path:'/login',
        element:<Suspense fallback={<Spinner />}><LazyLogIn/></Suspense>
          },
          {
            path:'/signin',
            element:<Suspense fallback={<Spinner />}><LazySignUp/></Suspense>
              },
      {
        path:'/about',
        element:<Suspense fallback={<Spinner />}><LazyAbout/></Suspense>
          },
          {
            path:'/profile',
            element:<Suspense fallback={<Spinner />}><LazyProfile/></Suspense>
              },
      {
        path:'/booking',
        element:<Suspense fallback={<Spinner />}><LazyBooking/></Suspense>
          },
          {
            path:'/payment',
            element:<Suspense fallback={<Spinner />}><LazyPay/></Suspense>
              },
          {
            path:'/contact',
            element:<Suspense fallback={<Spinner />}><LazyContact/></Suspense>
              },
              {
                path:'/bookinghistory',
                element:<Suspense fallback={<Spinner />}><LazyBookingHistory/></Suspense>
                  },
                  {
                    path:'/stays',
                    element:<Suspense fallback={<Spinner />}><LazyStays/></Suspense>
                      },
                  //Admin!!!
                  {
                    path:'/admin',
                    element:<Suspense fallback={<Spinner />}><LazyCh/></Suspense>
                      },
                      {
                        path:'/dash',
                        element:<Suspense fallback={<Spinner />}><LazyDash/></Suspense>
                          },
                      {
                        path:'/admin/profile',
                        element:<Suspense fallback={<Spinner />}><LazyAdProf/></Suspense>
                          }

    ])
    return (

      <RouterProvider router={router}/>

    )

}
export default App

// App.jsx
// import React from 'react';
// import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { Suspense, lazy } from 'react';
// import Spinner from './Components/Spinner';
// import { CustomProvider } from 'rsuite';
// import LoginPage from './Components/Pages/LoginPage';
// import SignupPage from './Components/Pages/SignupPage';

// const LazyAbout = lazy(() => import('./Components/Pages/About'));
// const LazyContact = lazy(() => import('./Components/Pages/Contact'));

// const App = () => {
//   const router = createBrowserRouter([
//     {
//       path: '/login',
//       element: <Suspense fallback={<Spinner />}><LoginPage /></Suspense>,
//     },
//     {
//       path: '/signup',
//       element: <Suspense fallback={<Spinner />}><SignupPage /></Suspense>,
//     },
//     {
//       path: '/home',
//       element: <Suspense fallback={<Spinner />}><Home /></Suspense>,
//     },
//     {
//       path: '/about',
//       element: <Suspense fallback={<Spinner />}><LazyAbout /></Suspense>,
//     },
//     {
//       path: '/contact',
//       element: <Suspense fallback={<Spinner />}><LazyContact /></Suspense>,
//     },
//   ]);

//   return (
//     <RouterProvider router={router} />
//   );
// };

// export default App;



















// import { Form } from "react-router-dom";
// import UsernameField from "./Components/Pages/LoginPage";

// function App() {
//   return (
//     <Form>
//       <UsernameField />
//       <EmailField />
//       <Button appearance="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
