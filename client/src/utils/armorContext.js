import React, {useReducer, useContext, createContext}from "react";

const ArmorContext = createContext();
const { Provider } = ArmorContext;
const reducer = (state,action)=>{
    switch(action.type){
        case "head":
            return {...state, head: action.armor}
        case "chest":
            return { ...state, chest: action.armor }
        case "gloves":
            return { ...state, gloves: action.armor }
        case "waist":
            return { ...state, waist: action.armor }
        case "legs":
            return { ...state, legs: action.armor }
        default:
            return {
                head: null,
                chest: null,
                waist: null,
                gloves: null,
                legs: null}
    }
}

// Stores the currently selected armor for users
const ArmorProvider = ({ value = [], ...props })=>{
    const [state, dispatch]=useReducer(reducer,{
        head: null,
        chest: null,
        waist: null,
        gloves: null,
        legs: null
    });
    return <Provider value={[state, dispatch]}{...props} />
}
const useArmorContext = () => {
    return useContext(ArmorContext);
};
export  {ArmorProvider, useArmorContext};
