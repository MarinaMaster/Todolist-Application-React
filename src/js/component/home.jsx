import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue]= useState("")
	const [todos, setTodos] = useState([])
	return (
		<div className="container-sm">
			<div className="text-center">todos</div>
			<input
				onChange={(event) => setInputValue(event.target.value)}
				value={inputValue}
				onKeyPress={(event) => {
					if (event.key === "Enter" && inputValue.trim()) {
						setTodos(todos.concat(inputValue));
						setInputValue("");
					}
				}}
				type="text"
				className="form-control"
				aria-describedby="inputGroup-sizing-default"
				placeholder={"What needs to be done?"}>
			</input>
			<ol className="list-group">
				{todos.map((item, index) => (
					<li className="list-group-item d-flex justify-content-between align-items-start" key={index}>
						<div className="ms-2 me-auto">
							<div className="fw-bold">{item}</div>
						</div>
						<button
							className="btn"
							onClick={() =>
								setTodos(todos.filter((t, currentIndex) => currentIndex !== index))
							}
							type="submit">X</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default Home;
