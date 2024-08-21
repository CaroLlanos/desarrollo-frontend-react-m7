import SearchBar from "./categories/searchBar";
import ProductTable from "./categories/productTable";

const IterableProductTable = ({ products }) => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
};

export default IterableProductTable;