/** @format */

import React, { useState } from "react";
import styled from "styled-components";

interface IProps {}

const App = (props: IProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <Sidebar isVisible={visible}>
        <a href='#'>Calc</a>
        <a href='#'>Todo</a>
        <a href='#'>Modal</a>
        <a href='#'>Slide</a>
      </Sidebar>
      <Container>
        <Header>
          <Button onClick={() => setVisible(!visible)}>
            <i className='fas fa-bars'></i>
          </Button>
          <span>Welcome</span>
          <span></span>
        </Header>
        <MainLayout></MainLayout>
      </Container>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
`;

const Container = styled.div`
  margin: 0;
  width: 100%;
`;

const Header = styled.header`
  margin: 0;
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Sidebar = styled.nav<{ isVisible: Boolean }>`
  margin: 0;
  background-color: #f8f8f8;
  height: 100vh;
  width: 30%;
  display: ${(p) => (p.isVisible ? "flex" : "none")};
  flex-direction: column;
`;

const MainLayout = styled.main``;

export default App;
