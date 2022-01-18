import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateData } from "../features/dataSlice";
import { Button } from "antd";
import { setIsLogged } from "../features/isLoggedSlice";
import { updateName } from "../features/nameSlice";
import { useNavigate } from "react-router-dom";

const User = () => {
	const dispatch = useDispatch();
	const name = useSelector((state) => state.name.value);
	const data = useSelector((state) => state.data.value);
	useEffect(() => {
		axios.get(`https://swapi.dev/api/people/?search=${name}`).then((res) => {
			dispatch(
				updateData({
					value: res.data.results[0],
				})
			);
		});
	}, []);
	let navigate = useNavigate();

	const handleButton = () => {
		dispatch(setIsLogged({ value: false }));
		dispatch(updateName({ value: "" }));
		dispatch(updateData({ value: {} }));
		navigate("/login");
	};

	return (
		<div className="userContainer">
			<h1>Hi, {data.name}</h1>
			<div className="userData">
				<p>name : {data.name}</p>
				<p>mass : {data.mass}</p>
				<p>height: {data.height}</p>
				<p>birth_year: {data["birth_year"]}</p>
			</div>

			<Button type="primary" danger onClick={handleButton}>
				SIGN OUT
			</Button>
		</div>
	);
};

export default User;
