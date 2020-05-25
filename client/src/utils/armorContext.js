import React, {useReducer, useContext, createContext}from "react";

const ArmorContext = createContext();
const { Provider } = ArmorContext;
const reducer = (state,action)=>{
	const armor = state.armor;
	switch(action.type){
		// head, chest, gloves, waist, and legs update specific armor pieces
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
		// updates the build's name.
		case "name":
			return {...state, name: action.name}
		// Overwrites armorContext with a saved build's details
		// All armor fields are set to null at first to aviod 
		// any problems that could appear if those elements did not exist
		case "edit":
			return {
				...state,
				armor:{
					head: action.head,
					chest: action.chest,
					gloves: action.gloves,
					waist: action.waist,
					legs: action.legs,
				},
				name: action.name,
				_id: action._id
			}
		// Update a new build with an _id
		// if _id has a value, saving the build will update the build
		// with this _id
		case "save":
			return {...state, _id: action._id, buildNo: action.buildNo}
		// Resets the armor context
		default:
			return {
				armor: {
					head: null,
					chest: null,
					waist: null,
					gloves: null,
					legs: null
				},
				name: "",
				_id: "",
				buildNo: 0
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
		name:"",
		_id:""
	});
	return <Provider value={[state, dispatch]}{...props} />
}
const useArmorContext = () => {
	return useContext(ArmorContext);
};
export  {ArmorProvider, useArmorContext};
