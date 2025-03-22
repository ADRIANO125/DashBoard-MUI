import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Team from "./pages/ManageTeam/Team";
import Contacts from "./pages/Contacts Information/contacts";
import Invoices from "./pages/Invoices Balances/invoices";
import Form from "./pages/Profile Form/form";
import Calendar from "./pages/Calendar/calendar";
import Faq from "./pages/FAQ Page/faq";
import Line from "./pages/Line Chart/Line";
import Pie from "./pages/Pie Chart/pie";
import Geography from "./pages/Geography Chart/geography";
import Bar from "./pages/Bar Chart/bar";
import NotFound from "./pages/NotFound/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<Line />} />
      <Route path="geography" element={<Geography />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
