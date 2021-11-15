import {
  Chat,
  EmojiFlags,
  ExpandMore,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUpGSoVhY7zDpcp7kopM99d_VBh8avOMwlaw&usqp=CAU"
        title="Rizwan Farooqui"
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMore} title="Market" />
    </div>
  );
};

export default Sidebar;
