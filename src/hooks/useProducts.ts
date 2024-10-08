import {KEY_PRODUCT} from "@/constants/queryKey";
import {Product} from "@/types/product";
import {useQuery} from "@tanstack/react-query";

const useProducts = () => {
	const { data: products, isLoading, error  } = useQuery({
		queryKey: [KEY_PRODUCT],
		queryFn: async () => {
			const response = await fetch("https://json-server-fresh-goodies.vercel.app/products");
			if (!response.ok) {
				throw new Error("Failed to fetch products: Network response was not ok");
			}
			console.log("Fetched products");
			return await response.json() as Product[];
		},
	});
	
	return {
		products,
		isLoading,
		error,
	};
}

export default useProducts;