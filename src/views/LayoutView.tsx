import { Header, Body, Layout } from "@/components/Layout/Layout";
import { NavBar, ShowSideBarButton, SideBar } from "@/components/NavBar/NavBar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutView = () => {
  const [show, setShow] = useState<boolean>(true);

  const showSideBarHandler = () => {
    setShow(!show);
  };

  return (
    <Layout>
      <Header>
        <NavBar />
        <ShowSideBarButton handler={showSideBarHandler} />
        <SideBar show={show} handler={showSideBarHandler} />
      </Header>
      <Body>
        <Outlet />
      </Body>
    </Layout>
  );
};

export default LayoutView;
