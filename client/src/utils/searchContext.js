import React, { createContext, useReducer, useContext } from "react";

const searchContext = createContext();
const {Provider} = searchContext;

const reducer = (state, action) => {
	switch(action.type){
		case "changeRank":
			return {...state, rank: action.rank, monster: "", hunterRank: 0, masterRank: 0, skills: []};
		case "updateMonster":
			return {...state, monster: action.monster};
		case "updateMR":
			return {...state, masterRank: action.MR};
		case "updateHR":
			return { ...state, hunterRank: action.HR };
		case "updateSkills":
			return { ...state, skills: action.skills };
		default:
			return { ...state };
	}
}
// Stores the currently selected armor for users
const SearchProvider = ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer(reducer, {
		rank: "LR",
		monster: "",
		hunterRank: 0,
		masterRank: 0,
		skills:[]
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useSearchContext = () => {
	return useContext(searchContext);
};
export { SearchProvider, useSearchContext };