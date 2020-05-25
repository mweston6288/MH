import React, { useReducer, useContext, createContext } from "react";

const UserContext = createContext();
const { Provider } = UserContext;
// update authentication status, username, and userID
// TODO: Make a sign out condition that resets everything
const reducer = (state, action) => {
	const newBuilds = state.builds;
	switch(action.type){
		case "addBuild":
			newBuilds.unshift(action.build);
			return { ...state, buildCount: state.buildCount+1 , builds: newBuilds};
		case "updateBuild":
			console.log(newBuilds);
			// This might be needed so I'm leaving it
			// As is, the build page makes a new build element
			// everytime you go to the page. Since this block of code would
			// run in Home only, there's no need to update the build
			// array upon saving an updated build
			/*let build;
			for (let i = 0; i<newBuilds.length; i++){
				if (newBuilds[i]._id === action._id){
					build = newBuilds[i];
					newBuilds.splice(i,1);
					break;
				}
			}
			newBuilds.unshift(build)*/
			return { ...state, buildCount: state.buildCount+1};
		case "builds":
			return {...state, builds: action.builds}
		case "logout":
			return { authenticated: false, userName: "", _id: "", buildCount: 0, builds:[]};
		case "login":
			return {...state, authenticated: true, userName: action.userName, _id: action._id, buildCount: action.buildCount, builds:[]}
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
