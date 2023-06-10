import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { Fetch } from "./components/Fetch";

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
    {
        path: '/fetch',
        element: <Fetch />
    },

    /*{
        path: '/users',
        element: <Users />
    },*/
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
