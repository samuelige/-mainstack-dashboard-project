import React from "react";

const Dashboard = React.lazy(() => import("./main/Dashboard/index"));
const Item1 = React.lazy(() => import("./main/Item1/index"));
const Item2 = React.lazy(() => import("./main/Item2/index"));
const Item3 = React.lazy(() => import("./main/Item3/index"));
const Item4 = React.lazy(() => import("./main/Item4/index"));
const Item5 = React.lazy(() => import("./main/Item5/index"));
const Item6 = React.lazy(() => import("./main/Item6/index"));
const Item7 = React.lazy(() => import("./main/Item7/index"));
const Item8 = React.lazy(() => import("./main/Item8/index"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/item-1", name: "Item", element: Item1 },
  { path: "/item-2", name: "Item", element: Item2 },
  { path: "/item-3", name: "Item", element: Item3 },
  { path: "/item-4", name: "Item", element: Item4 },
  { path: "/item-5", name: "Item", element: Item5 },
  { path: "/item-6", name: "Item", element: Item6 },
  { path: "/item-7", name: "Item", element: Item7 },
  { path: "/item-8", name: "Item", element: Item8 },
];

export default routes;
