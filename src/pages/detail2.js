import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'


// let YellowBtn = styled.button`
// background : ${props => props.gg};
// color : ${props => props.gg == 'pink' ? 'white' : 'black'};
// padding : 10px;
// `


function Detail(props) {

    useEffect(() => {
        let a = setTimeout(() => { setAlert(false) }, 2000)
        return () => {
            clearTimeout(a)
        }
    }, [])


    let { id } = useParams();
    let 찾은상품 = props.ac.find(x => x.id == id);
    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)


    return (
        <div className="container">
            {
                alert == true
                    ? <div className="alert alert-warining">
                        2초 이내 구매 시 할인
                    </div>
                    : null
            }

            {count}
            <Button onClick={() => { setCount(count + 1) }}>버튼</Button>

            {/* <YellowBtn gg="pink">버튼</YellowBtn>
            <YellowBtn gg="lavender">버튼</YellowBtn> */}

            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/assets/img/acc1.jpg'} width="90%" />
                </div>
                <div className="col-md-6">
                    <h4 className="prod">{props.ac[id].title}</h4>
                    <p>{props.ac[id].price}</p>
                    <p>색상 : 핑크</p>
                    <Button variant="dark" size="0.6g">
                        장바구니에 추가하기
                    </Button>
                </div>
            </div>
        </div>
    )
}


export default Detail;