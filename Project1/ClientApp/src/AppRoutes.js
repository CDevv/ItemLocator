import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Users } from "./components/Users";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    requireAuth: true,
    element: <FetchData />
    },
    /*{
        path: '/users',
        element: <Users />
    },*/
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
