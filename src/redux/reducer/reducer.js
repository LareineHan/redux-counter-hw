let initialState = {
	// state를 만들어준다.
	count: 0,
};
// state 와 action 을 받아서 새로운 state 를 반환하는 함수
function reducer(state = initialState, action) {
	// if (action.type === 'INCREMENT') {
	// 	return {
	// 		...state,
	// 		count: state.count + 1,
	// 	};
	// }
	switch (action.type) {
		case 'INCREMENT':
			return { ...state, count: state.count + action.payload.num };
		case 'DECREMENT':
			return { ...state, count: state.count - action.payload.num };
		case 'LOGIN':
			return { ...state, id: action.payload.id, pw: action.payload.pw };
		default:
			return { ...state };
	}
}

export default reducer;
