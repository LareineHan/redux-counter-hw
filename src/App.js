import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Col, Row } from 'react-bootstrap';
import Box from './component/Box';
import Login from './component/Login';
function App() {
	const count = useSelector((state) => state.count); // useSelector 는 함수를 받아서 state 를 반환해준다. 이 state는 reducer.js 에서 만든 state 이다.
	const id = useSelector((state) => state.login.id);
	const pw = useSelector((state) => state.login.pw);
	const dispatch = useDispatch();
	const Increase = () => {
		dispatch({ type: 'INCREMENT', payload: { num: 5 } }); // 액션을 던져준거임. 이제 리듀서에서 처리해줘야함.
	};
	const Decrease = () => {
		dispatch({ type: 'DECREMENT', payload: { num: 2 } });
	};
	console.log(id, pw);
	return (
		<Container className='App'>
			{id === '' && pw === '' ? (
				<Login />
			) : (
				<Col className='welcome-msg'>
					<Row style={{ textAlign: 'center' }}>
						<h1>⭐ Welcome {id} ⭐</h1>
					</Row>

					<Button
						className='logout-btn'
						variant='danger'
						onClick={() => dispatch({ type: 'LOGOUT' })}>
						Logout
					</Button>

					<Row className='count-and-btns'>
						<Col className='counts'>
							<h1>ver1. 👀 {count}</h1>
							<Box />
						</Col>
						<Col className='btns'>
							<Row style={{ width: '50px' }}>
								<Button variant='success' onClick={Increase}>
									➕
								</Button>
							</Row>
							<Row style={{ width: '50px' }}>
								<Button variant='warning' onClick={Decrease}>
									➖
								</Button>
							</Row>
						</Col>
					</Row>
				</Col>
			)}
		</Container>
	);
}

export default App;
