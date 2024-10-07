import {
	FC,
	ReactNode
} from "react";

const InternalLayout: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="flex flex-col">
			<div className="h-14 px-10 py-4 bg-red-500 text-white" >
				Header
			</div>
			<div className="flex">
				<div className="w-52 h-screen flex-grow-0 bg-green-500 text-white">
					Side Menu
				</div>
				<div className="flex-grow">
					{children}
				</div>
			</div>
		</div>
	);
}

export default InternalLayout;