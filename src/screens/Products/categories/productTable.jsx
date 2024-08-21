import ProductRow from './table/productRow';
import ProductCategoryRow from './table/productCategoryRow';

const ProductTable = ({ products }) => {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category} />
      );
    }
    rows.push(
      <ProductRow
        product={product}
        key={product.name} />
    );
    lastCategory = product.category;
  });

    return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
    </div>
  );
};

export default ProductTable;