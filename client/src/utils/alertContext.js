import React, { createContext, useReducer, useContext } from "react";

const alertContext = createContext();
const { Provider } = alertContext;

const AlertProvider =  ({ value = [], ...props }) => {
	const [state, dispatch] = useReducer((state, action)=>{
		return {show: action.show, message: action.message, variant: action.variant}
	}, {
		show: false,
		message: "",
		variant: ""
	});
	return <Provider value={[state, dispatch]}{...props} />
}


const useAlertContext = () => {
	return useContext(alertContext);
};
export { AlertProvider, useAlertContext };