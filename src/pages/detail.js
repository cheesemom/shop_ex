import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components'


// let YellowBtn = styled.button`
// background : ${props => props.gg};
// color : ${props => props.gg == 'orange' ? 'white' : 'black'};
// padding : 10px;
// `

let Btn = styled.button`
background : black;
color : white;
border :  transparent;
font-Size : 14px;
width : 180px;
line-height : 40px;
`

let Col = styled.div`
font-Size : 14px;
line-height : 20px;
padding : 10px 0 15px 0;
border-bottom: 1px solid #eeeeee;
`

let Find = styled.div`
font-Size : 14px;
font-weight :700;
line-height : 20px;
padding : 10px 0 10px 0;
text-decoration: underline;
text-underline-position: under;
`


function Detail(props) {

    let { id } = useParams();

    return (
        <div className="container">
            {/* <YellowBtn gg="skyblue">버튼</YellowBtn>
            <YellowBtn gg="orange">버튼</YellowBtn> */}

            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/assets/img/acc1.jpg'} width="90%" />
                </div>

                <div className="col-md-6">
                    <h4 className="prod">{props.ac[id].title}</h4>
                    <p className="pri">{props.ac[id].price}</p>
                    <Col>색상 : 핑크</Col>
                    <div className="flex">
                        <Btn>장바구니에 추가하기</Btn>
                        <Find>매장찾기</Find>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Detail;