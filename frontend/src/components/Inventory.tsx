
import {
  Package,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

type Product = {
  name: string;
  stock: number;
  price: number;
};

const products: Product[] = [
  { name: "Premium Headphones", stock: 42, price: 12500 },
  { name: "Smart Watch Pro", stock: 8, price: 8500 },
  { name: "Wireless Speaker", stock: 25, price: 4200 },
  { name: "USB-C Hub", stock: 5, price: 3800 },
];

export default function Inventory() {
  const totalStock = products.reduce(
    (total, product) => total + product.stock,
    0
  );

  const lowStock = products.filter(
    (product) => product.stock < 10
  ).length;

  return (
    <div className="space-y-6">

      <div className="stats">
        <div className="stat-card purple">
          <div className="stat-heading">
            <span>Total Products</span>
            <Package size={20} />
          </div>
          <h2>{products.length}</h2>
          <div className="stat-footer">
            Available products
          </div>
        </div>

        <div className="stat-card cyan">
          <div className="stat-heading">
            <span>Total Stock</span>
            <CheckCircle size={20} />
          </div>
          <h2>{totalStock}</h2>
          <div className="stat-footer">
            Available units
          </div>
        </div>

        <div className="stat-card pink">
          <div className="stat-heading">
            <span>Low Stock</span>
            <AlertTriangle size={20} />
          </div>
          <h2>{lowStock}</h2>
          <div className="stat-footer">
            Need restocking
          </div>
        </div>
      </div>

      <section className="panel">
        <div className="panel-heading">
          <h3>Inventory Management</h3>
          <p>Manage your products and stock levels</p>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>PRICE</th>
                <th>STOCK</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.name}>
                  <td className="highlight">{product.name}</td>

                  <td>
                    PKR {product.price.toLocaleString()}
                  </td>

                  <td>{product.stock} Units</td>

                  <td>
                    <span
                      className={`status ${
                        product.stock < 10
                          ? "warning"
                          : "success"
                      }`}
                    >
                      ● {product.stock < 10
                        ? "Low Stock"
                        : "In Stock"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
