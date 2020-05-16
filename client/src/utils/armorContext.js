import React, {useReducer, useContext, createContext}from "react";

const ArmorContext = createContext();
const { Provider } = ArmorContext;
const reducer = (state,action)=>{
	const armor = state.armor;
	switch(action.type){
		case "head":
			armor.head = action.armor;
			return {...state, armor: armor}
		case "chest":
			armor.chest = action.armor;
			return { ...state, armor: armor}
		case "gloves":
			armor.gloves = action.armor;
			return { ...state, armor: armor }
		case "waist":
			armor.waist = action.armor;
			return { ...state, armor: armor }
		case "legs":
			armor.legs = action.armor;
			return { ...state, armor: armor }
		case "name":
			return {...state, name: action.name}
		case "edit":
			return {
				...state,
				armor:{
					head: null,
					chest: null,
					waist: null,
					gloves: null,
					legs: null,
					head: action.head,
					chest: action.chest,
					gloves: action.gloves,
					waist: action.waist,
					legs: action.legs,
				},
				name: action.name,
				_id: action._id
			}
		case "save":
			return {...state, _id: action._id}
		default:
			return {
				armor: {
					head: null,
					chest: null,
					waist: null,
					gloves: null,
					legs: null
				},
				name: "build",
				_id: ""
			}
	}
}

// Stores the currently selected armor for users
const ArmorProvider = ({ value = [], ...props })=>{
	const [state, dispatch]=useReducer(reducer,{
		armor: {
			head: null,
			chest: null,
			waist: null,
			gloves: null,
			legs: null
		},
		name:"build",
		_id:""
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useArmorContext = () => {
	return useContext(ArmorContext);
};
export  {ArmorProvider, useArmorContext};
