import Link from "next/link";
import Image   from "next/image";
import {FC} from "react";
import CatImg from "@/assets/images.jpeg";

const Page: FC = () => {
	return (
		<div>
			Transactions Page
			<Link href="/transactions/123">Detail</Link>
			<Image src={CatImg} width={600} height={400} alt="its a box" />
		</div>
	);
}

export default Page;