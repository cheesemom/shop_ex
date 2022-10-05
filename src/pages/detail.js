import Button from 'react-bootstrap/Button';


function Detail() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={process.env.PUBLIC_URL + '/assets/img/acc1.jpg'} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="prod">미우 완더 마테라쎄 호보 백</h4>
                    <p>2750000</p>
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