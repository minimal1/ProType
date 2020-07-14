/** @format */

import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Router } from '@reach/router';
import Calc from './pages/Calc';
import Modal from './pages/Modal';
import Todo from './pages/Todo';
import Slide from './pages/Slide';

interface IProps {}

const App = (props: IProps) => {
  const [visible, setVisible] = useState(false);

  return (
    <Layout>
      <Sidebar isVisible={visible}>
        <Link to="/calc">Calc</Link>
        <Link to="/todo">Todo</Link>
        <Link to="/modal">Modal</Link>
        <Link to="/slide">Slide</Link>
      </Sidebar>
      <Container>
        <Header>
          <Button onClick={() => setVisible(!visible)}>
            <i className="fas fa-bars" />
          </Button>
          <span>Welcome</span>
          <span></span>
        </Header>
        <MainLayout>
          <Router>
            <Calc path="/calc" />
            <Todo path="/todo" />
            <Modal path="/modal" />
            <Slide path="/slide" />
          </Router>
        </MainLayout>
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
  width: 20%;
  display: ${p => (p.isVisible ? 'flex' : 'none')};
  flex-direction: column;
`;

const MainLayout = styled.main``;

export default App;
