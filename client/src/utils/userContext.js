import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;
const reducer = (state, action) => {
	return { authenticated: true, userName: action.userName }
}

// Stores the currently selected armor for users
const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		authenticated: false,
		userName: "",
		builds:[]
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserContext };
