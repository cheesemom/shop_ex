import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, useParams } from 'react-router-dom'
import Detail from './pages/detail';
import ReactPlayer from 'react-player/lazy';


function App() {

  let [ac] = useState(data)
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="light" variant="light" className="nav-set">
        <Container className="nav-all">
          <div className="me-logo">
            <img src={"/assets/img/logo.jpg"} width="100%" />
          </div>
          <Nav className="me-auto">
            <Nav.Link onClick={() => { navigate(-1) }}>COLLECTION</Nav.Link>
            <Nav.Link onClick={() => navigate('/')}>NEW</Nav.Link>
            <Nav.Link onClick={() => navigate('/detail/0')}>BAG</Nav.Link>
            <Nav.Link href="#">MIU WANDER</Nav.Link>
            <Nav.Link href="#">MIU MIU CLUB</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                {ac.map((a, i) => {
                  return <Card ac={ac[i]} i={i + 1} />
                })}
              </div>
            </div>
          </>
        } />

        <Route path="/detail/:id" element={<Detail ac={ac} />} />

        <Route path="/event" element={<Event />}>
          <Route path="1" element={<p>Cabbage juice for the first order!</p>} />
          <Route path="2" element={<p>Get a birthday coupon!</p>} />
        </Route>

      </Routes>

    </div>
  );
}

function Event() {
  return (
    <div>
      <p>❤ TODAY EVENT ❤</p>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props) {
  return (
    <div class="col">
      <img src={process.env.PUBLIC_URL + '/assets/img/acc' + props.i + '.jpg'} width="100%" />
      <h5>{props.ac.title}</h5>
      <p>{props.ac.price}</p>
    </div>
  )
}




export default App;
