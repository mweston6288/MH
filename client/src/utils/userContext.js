import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;
// update authentication status, username, and userID
// TODO: Make a sign out condition that resets everything
const reducer = (state, action) => {
	if (action.type === "addBuild"){
		return { ...state, buildCount: state.buildCount++ };
	}
	if (action.type==="logout"){
		return{authenticated: false, userName: "", _id: "", builds: 0};
	}
	return { authenticated: true, userName: action.userName, _id:action._id, buildCount: action.buildCount }
}

// Stores the currently selected armor for users
const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		authenticated: false,
		userName: "",
		_id:"",
		buildCount: 0
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserContext };
