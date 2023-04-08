import React from "react";

import { CNavItem, CNavTitle } from "@coreui/react";
import { CiGrid42 } from "react-icons/ci";
// import { TbCameraPlus } from "react-icons/tb";
import { FaCamera, FaFile } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { BsFillAlarmFill, BsFillCollectionPlayFill } from "react-icons/bs";
import { MdEdit, MdOutlineGroup, MdOutlinePeople } from "react-icons/md";

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
    to: "/",
    icon: <MdEdit className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 2",
    to: "/",
    icon: <MdOutlinePeople className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 3",
    to: "/",
    icon: <MdOutlineGroup className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "OTHERS 1",
  },
  {
    component: CNavItem,
    name: "Item 4",
    to: "/",
    icon: <FaCamera className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 5",
    to: "/",
    icon: <AiFillDelete className="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "OTHERS 2",
  },
  {
    component: CNavItem,
    name: "Item 6",
    to: "/",
    icon: <BsFillCollectionPlayFill className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 7",
    to: "/",
    icon: <FaFile className="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Item 8",
    to: "/",
    icon: <BsFillAlarmFill className="nav-icon" />,
  },
];

export default nav;
