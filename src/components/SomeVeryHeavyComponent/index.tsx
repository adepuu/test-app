"use client";

import {
	FC,
	useEffect,
	useState
} from "react";

const SomeVeryHeavyComponent: FC = () => {
	const [data, setData] = useState<string>("");
	
	useEffect(() => {
		setTimeout(() => {
			setData("Some very heavy data");
		}, 2000);
	}, []);
	
	return (
		<div>
			Content: {data}
		</div>
	);
}

export default SomeVeryHeavyComponent;