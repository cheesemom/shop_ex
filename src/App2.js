import { useState } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap'
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './pages/detail.js';


function App() {

    let [ac] = useState(data)
    let navigate = useNavigate(); //페이지이동


    return (
        <div className="App">

            <Navbar bg="light" variant="light" className="nav-set">
                <Container className="nav-all">
                    <div className="me-logo">
                        <img src={"/assets/img/logo.jpg"} />
                    </div>
                    <Nav className="me-auto">
                        <Nav.Link href="#">COLLECTION</Nav.Link>
                        <Nav.Link href="#">NEW</Nav.Link>
                        <Nav.Link onClick={() => navigate('/detail')}>BAG</Nav.Link>
                        <Nav.Link href="#">MIU WANDER</Nav.Link>
                        <Nav.Link href="#">MIU MIU CLUB</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>


            <Routes>
                <Route path="/" element={
                    <>
                        <div className="main-bg"></div>
                        <div class="container">
                            <div class="row">
                                {ac.map((a, i) => {
                                    return <Card ac={ac[i]} i={i + 1} />
                                })}
                            </div>
                        </div>
                    </>
                } />
                <Route path="/detail" element={<Detail />} />

                <Route path="/event" element={<Event />} >
                    <Route path="one" element={<p>첫 구매시 양배추즙 서비스</p>} />
                    <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
                </Route>

            </Routes>

        </div>
    );
}


function Event() {
    return (
        <div>
            <h4>TODAY EVENT</h4>
            <Outlet></Outlet>
        </div>
    )
}


function Card(props) {
    return (
        <div class="col">
            <img src={process.env.PUBLIC_URL + '/assets/img/acc' + props.i + '.jpg'} width="90%" />
            <h5>{props.ac.title}</h5>
            <p>{props.ac.price}</p>
        </div>
    )
}


export default App;
