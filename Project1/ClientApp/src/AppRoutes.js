import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import { Users } from "./components/Users";
import { Fetch } from "./components/Fetch";
import { ShopList } from './components/ShopList';
import { ShopInfo } from './components/ShopInfo';

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
    {
        path: '/shops',
        element: <ShopList />
    },
    {
        path: '/shop/:shopId',
        element: <ShopInfo />
    },
  ...ApiAuthorzationRoutes
];

export default AppRoutes;
