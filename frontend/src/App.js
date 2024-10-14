
import './App.css';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';

import RootLayout from './components/Rootlayout';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

function App() {
  const router=createBrowserRouter([
    {
      path:"/", 
      element:<RootLayout/>,
      children:[
        {
          path:"/Home",
          element:<Home/>
        },
        {
          path:"/Register",
          element:<Register/>
        },
        {
          path:"/Login",
          element:<Login/>

        }

      ]
    }
  ])
  return (
    <div>
   <RouterProvider router={router}/>
    </div>
  );
}

export default App;
