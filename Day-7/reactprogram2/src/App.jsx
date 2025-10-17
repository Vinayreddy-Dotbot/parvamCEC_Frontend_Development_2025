import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Homepage from "./pages/homepage";
import Aboutpage from "./pages/aboutpage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Homepage />} />
      <Route path="/about" element={<Aboutpage />} />
    </Route>
  
)
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;