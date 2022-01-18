import { AutoComplete, Button } from "antd";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { setIsLogged } from "../features/isLoggedSlice";
import { updateName } from "../features/nameSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Complete = ({ setCurr, options, setDisabled }) => (
	<AutoComplete
		style={{
			width: 200,
		}}
		options={options}
		placeholder="your character name"
		filterOption={(inputValue, option) =>
			option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
		}
		onChange={(e) => {
			setCurr(e);
			if (e !== "") {
				setDisabled(false);
			} else {
				setDisabled(true);
			}
		}}
	/>
);

const Login = () => {
	const [options, setOptions] = useState([]);
	const [disabled, setDisabled] = useState(true);
	useEffect(() => {
		axios.get("https://swapi.dev/api/people/").then((res) => {
			setOptions(
				res.data.results.map((person) => ({
					value: person.name,
				}))
			);
		});
	}, []);
	const [curr, setCurr] = useState("");
	const dispatch = useDispatch();
	const [err, setErr] = useState("");
	let navigate = useNavigate();
	const handleClick = () => {
		if (
			options
				.map((option, idx) => option.value.toUpperCase())
				.indexOf(curr.toUpperCase()) > -1
		) {
			console.log("exist");
			setErr("");
			dispatch(setIsLogged({ value: true }));
			dispatch(updateName({ value: curr }));
			navigate("/user");
		} else {
			console.log("not exist");
			setErr(`Sorry we don't know you ${curr}`);
		}
	};
	return (
		<div className="loginContainer">
			<h1>Who Are You?</h1>
			<div className="searchField">
				<Complete
					setCurr={setCurr}
					options={options}
					setDisabled={setDisabled}
				/>
			</div>
			{disabled ? (
				<Button
					className="disabledButton"
					type="primary"
					disabled
					onClick={handleClick}
					style={{ borderRadius: "10px" }}
				>
					SIGN IN
				</Button>
			) : (
				<Button
					style={{ borderRadius: "10px" }}
					type="primary"
					danger
					onClick={handleClick}
				>
					SIGN IN
				</Button>
			)}

			<div style={{ color: "red" }}>{err}</div>
		</div>
	);
};

export default Login;
