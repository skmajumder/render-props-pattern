import { faker } from "@faker-js/faker";
import "./styles.css";

import List from "./List";
import ProductItem from "./ProductItem";
import CompanyItem from "./CompanyItem";
import withToggles from "./Hoc";
import ProductList from "./ProductList";

const products = Array.from({ length: 20 }, () => {
  return {
    productName: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.commerce.price(),
  };
});

const companies = Array.from({ length: 15 }, () => {
  return {
    companyName: faker.company.name(),
    phrase: faker.company.catchPhrase(),
  };
});

const ProductListWithToggles = withToggles(ProductList);

export default function App() {
  return (
    <div>
      <h1>Render Props Demo</h1>

      {/* <div className="col-2">
        <List
          title="Products"
          items={products}
          render={(product) => (
            <ProductItem key={product.productName} product={product} />
          )}
        />

        <List
          title="Companies"
          items={companies}
          render={(company) => (
            <CompanyItem
              key={company.companyName}
              company={company}
              defaultVisibility={true}
            />
          )}
        />
      </div> */}

      <div className="col-2">
        <ProductList title="Product HOC" items={products} />
        <ProductListWithToggles title="Products HOC" items={products} />
      </div>
    </div>
  );
}
