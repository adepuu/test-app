import dynamic from "next/dynamic";
import {FC} from "react";

const SomeVeryHeavyComponent = dynamic(() => import("@/components/SomeVeryHeavyComponent"), {
	ssr: false,
	loading: () => <div>Loading bruhhhhhh</div>
})
const Page: FC<{
	params: {
		transactionId: string;
	},
	searchParams: {
		search: string;
		sort: string;
	}
}> = ({ params , searchParams}) => {
	return (
		<div>
			URL Params / Path Variable: {params.transactionId}<br/>
			Search: {searchParams.search}<br/>
			Sort: {searchParams.sort}
			{params.transactionId === "heavy-rotation" && <SomeVeryHeavyComponent/>}
		</div>
	);
}

export default Page;