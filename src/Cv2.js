import * as React from 'react';
import ReactDOM from 'react-dom';

export default class Cv extends React.Component{
    constructor() {

        super();
        this.state = {
            Cv: '',
        }
    }
    Cv(event) {
        this.setState({Cv: event.target.value })
    }

    render(){
        return(
            <p>meow </p>
        )
    }
    Cv(event) {
        debugger;
        fetch('http://localhost:5001/Api/Cv/Get', {
            method: 'get',
            headers: {
                'Accept':  '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password
            })
        }).then(Response => Response.json())
            .then(result => {
                console.log(result);
                if (result.Status == 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
    }
   
}
/*export default class Login extends Component {
    constructor() {

        super();
        this.state = {
            Email: '',
            Password: ''
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }
    Email(event) {
        this.setState({Email: event.target.value })
    }
    Password(event) {
        this.setState({Password: event.target.value })
    }
    login(event) {
        debugger;
        fetch('http://localhost:5001/Api/User/Login', {
            method: 'post',
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.Email,
                password: this.state.Password
            })
        }).then(Response => Response.json())
            .then(result => {
                console.log(result);
                if (result.Status == 'Invalid')
                    alert('Invalid User');
                else
                    this.props.history.push("/Dashboard");
            })
    }
    render() {
        return (
            <div className="app flex-row align-items-center">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="9" lg="7" xl="6">
                            <CardGroup>
                                <Card className="p-2">
                                    <CardBody>
                                        <Form>
                                            <div class="row" className="mb-2 pageheading">
                                                <div class="col-sm-12 btn btn-primary">
                                                    Login
                             </div>
                                            </div>
                                            <InputGroup className="mb-3">
                                                <Input type="text" onChange={this.Email} placeholder="Enter Email" />
                                            </InputGroup>
                                            <InputGroup className="mb-4">
                                                <Input type="password" onChange={this.Password} placeholder="Enter Password" />
                                            </InputGroup>
                                            <Button onClick={this.login} color="success" block>Login</Button>
                                        </Form>
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
*/