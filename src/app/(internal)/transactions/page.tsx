import Link from "next/link";
import {FC} from "react";

const Page: FC = () => {
	return (
		<div>
			Transactions Page
			<Link href="/transactions/123">Detail</Link>
		</div>
	);
}

export default Page;