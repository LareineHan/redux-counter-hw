import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';
function App() {
	const count = useSelector((state) => state.count); // useSelector 는 함수를 받아서 state 를 반환해준다. 이 state는 reducer.js 에서 만든 state 이다.
	const id = useSelector((state) => state.id);
	const pw = useSelector((state) => state.pw);
	const dispatch = useDispatch();
	const Increase = () => {
		dispatch({ type: 'INCREMENT', payload: { num: 5 } }); // 액션을 던져준거임. 이제 리듀서에서 처리해줘야함.
	};
	const Decrease = () => {
		dispatch({ type: 'DECREMENT', payload: { num: 2 } });
	};
	const Login = () => {
		dispatch({ type: 'LOGIN', payload: { id: 'test', pw: '1234' } });
	};

	return (
		<div className='App'>
			<h1>{count}</h1>
			<h2>
				{id}
				{pw}
			</h2>
			<Box />
			<button onClick={Increase}>Increase</button>
			<button onClick={Login}>Login</button>
			<button onClick={Decrease}>Decrease</button>
		</div>
	);
}

export default App;
