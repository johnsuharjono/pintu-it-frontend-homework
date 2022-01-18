import { AutoComplete } from "antd";

const Complete = ({ options }) => (
	<AutoComplete
		style={{
			width: 200,
		}}
		options={options}
		placeholder="try to type `b`"
		filterOption={(inputValue, option) =>
			option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
		}
	/>
);

export default Complete;
