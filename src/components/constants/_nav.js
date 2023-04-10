import React from "react";

import { CNavItem, CNavTitle } from "@coreui/react";
import { CiGrid42 } from "react-icons/ci";
// import { TbCameraPlus } from "react-icons/tb";
import { FaCamera, FaFile, FaHourglass } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsFillAlarmFill, BsFillCollectionPlayFill } from "react-icons/bs";
import { MdEdit, MdOutlinePeople } from "react-icons/md";

const nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CiGrid42 className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 1",
    to: "/item-1",
    icon: <MdEdit className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 2",
    to: "/item-2",
    icon: <MdOutlinePeople className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 3",
    to: "/item-3",
    icon: <FaHourglass className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "OTHERS 1",
  },
  {
    component: CNavItem,
    name: "Item 4",
    to: "/item-4",
    icon: <FaCamera className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 5",
    to: "/item-5",
    icon: <AiFillDelete className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "OTHERS 2",
  },
  {
    component: CNavItem,
    name: "Item 6",
    to: "/item-6",
    icon: <BsFillCollectionPlayFill className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 7",
    to: "/item-7",
    icon: <FaFile className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 8",
    to: "/item-8",
    icon: <BsFillAlarmFill className="nav-icon" />,
  },
];

export default nav;
