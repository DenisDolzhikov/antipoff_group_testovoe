import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Layout from "./components/layout/Layout";
import AuthPage from "./pages/authPage/AuthPage";
import HomePage from "./pages/homePage/HomePage";
import PersonPage from "./pages/personPage/PersonPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import PrivateOutlet from "./utils/PrivateOutlet";

// import { RequireAuth } from "./hoc/RequireAuth";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index path='/signup' element={<AuthPage />} />
        <Route path="/" element={<PrivateOutlet />}>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<HomePage />} />
          <Route path="users/:id" element={<PersonPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Route>
    </Route>
  )
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route>
//       <Route index path='/signup' element={<AuthPage />} />
//       <Route path="/*" element={<NotFoundPage />} />
//       <Route path="/" element={<Layout />}>
//         <Route 
//           index 
//           element={
//             <RequireAuth>
//               <HomePage />
//             </RequireAuth>
//           }
//         />
//         <Route
//           path="users/:id"
//           element={
//             <RequireAuth>
//               <PersonPage />
//             </RequireAuth>
//           }
//         />
//       </Route>
//     </Route>
//   )
// );

export default router;