import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CAvatar,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarNav,
} from "@coreui/react";
import { FaEllipsisH } from "react-icons/fa";

import SimpleBar from "simplebar-react";

import AppSidebarNav from "./AppSidebarNav";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../constants/_nav";
import sidebarShowAction from "../../stateManagement/reduxState/actions/sidebarShowAction";
import { blessingImg, mainstackLogo } from "../../assets/images";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector(( { nav } ) => nav.sidebarShow);
  
  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => dispatch(sidebarShowAction(visible))}
    >
      <CSidebarBrand className=" d-md-flex" to="/">
        <img className="sidebar-brand-full" src={mainstackLogo} alt="brand_img" />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>

      <CSidebarFooter style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <div className="" style={{display: "flex", alignItems: "center"}}>
          <CAvatar src={blessingImg} size="md" />
          <p style={{marginLeft: "12px", marginBottom: "0px"}}>Blessing Daniels</p>
        </div>
        <FaEllipsisH />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
