import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;
// update authentication status, username, and userID
// TODO: Make a sign out condition that resets everything
const reducer = (state, action) => {
	let newBuilds = state.builds;
	switch(action.type){
		case "addBuild":
			newBuilds.unshift(action.build);
			return { ...state, buildCount: state.buildCount+1 , builds: newBuilds};
		case "updateBuild":
			return { ...state, buildCount: state.buildCount+1};
		case "builds":
			return {...state, builds: action.builds}
		case "logout":
			return { authenticated: false, userName: "", _id: "", buildCount: 0, builds:[]};
		case "login":
			return {...state, authenticated: true, userName: action.userName, _id: action._id, buildCount: action.buildCount, builds:[]}
		case "delete":
			for (let i = 0; i < newBuilds.length; i++){
				if (newBuilds[i]._id == action._id){
					newBuilds.splice(i,1);
					break;
				}
			}
			return {...state, builds: newBuilds}
		default:
			return { authenticated: false, userName: "", _id: "", buildCount: 0, builds:[]};
	}
}

// Stores the currently selected armor for users
const UserProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		authenticated: false,
		userName: "",
		_id:"",
		buildCount: 0,
		builds:[]
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useUserContext = () => {
	return useContext(UserContext);
};
export { UserProvider, useUserContext };
