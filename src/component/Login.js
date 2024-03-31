// Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch({
			type: 'LOGIN',
			payload: { login: { id: username, pw: password } },
		});
		setUsername(''); // clean up input fields
		setPassword('');
		console.log(username, password);
	};

	return (
		<Container>
			<Col>
				<h1 style={{ textAlign: 'center' }}>🤓</h1>
				<Row className='login-form'>
					<Form onSubmit={handleLogin}>
						<Row className='mb-3'>
							<Form.Group as={Col} controlId='loginForm.ControlInput1'>
								<Form.Label>username</Form.Label>
								<Form.Control
									type='text'
									placeholder='Username'
									value={username}
									onChange={(e) => setUsername(e.target.value)}
								/>
							</Form.Group>
							<Form.Group as={Col} controlId='loginForm.ControlTextarea1'>
								<Form.Label>password</Form.Label>
								<Form.Control
									type='password'
									placeholder='Password'
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
							</Form.Group>
						</Row>
						<Form.Group className='login-btn mb-3'>
							<Button variant='primary' type='submit'>
								Login
							</Button>
						</Form.Group>
					</Form>
				</Row>
			</Col>

			{/* <form>
				<label>
					Username:
					<input
						type='text'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</label>
				<br />
				<label>
					Password:
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</label>
				<br />
				<Button variant='primary' type='button' onClick={handleLogin}>
					Login
				</Button>
			</form> */}
		</Container>
	);
};

export default Login;
