const IterableProductTable = () => {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
};

export default IterableProductTable;