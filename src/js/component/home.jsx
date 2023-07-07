import React from "react";
import TodoContainer from "./TodoContainer";


//create your first component
const Home = () => {
	
	return (

		<>
		<h1 className="text-center mt-3 mb-3">todos</h1>
		<div className="paper ">
			
			<TodoContainer/>
			
			
		</div>
		
		</>
	);
};

export default Home;
