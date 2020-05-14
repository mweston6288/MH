import React from 'react';
import { useUserContext } from '../utils/userContext';
import { Redirect } from 'react-router-dom';

function Builds(){
	const [userState] = useUserContext();

	return(
		<div>
			{ userState.authenticated ?
				<div>Test</div>
				:
				<Redirect to="/login"/>
			}
		</div>
	)
}
export default Builds;