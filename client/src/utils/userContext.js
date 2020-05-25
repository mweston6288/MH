import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;
// update authentication status, username, and userID
// TODO: Make a sign out condition that resets everything
const reducer = (state, action) => {
	switch(action.type){
		case "addBuild":
			return { ...state, buildCount: state.buildCount++ };
		case "logout":
			return { authenticated: false, userName: "", _id: "", buildCount: 0};
		case "login":
			return {...state, authenticated: true, userName: action.userName, _id: action._id, buildCount: action.buildCount }
		default:
			return { authenticated: false, userName: "", _id: "", buildCount: 0};
	}
}

// Stores the currently selected armor for users
const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		authenticated: false,
		userName: "",
		_id:"",
		buildCount: 0,
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserContext };
