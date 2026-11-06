
import {
  ShoppingBag,
  CheckCircle,
  Clock,
} from "lucide-react";

type OrderData = {
  id: string;
  customer: string;
  amount: number;
  status: string;
};

const orders: OrderData[] = [
  {
    id: "NX-1042",
    customer: "Ayesha Khan",
    amount: 12500,
    status: "Completed",
  },
  {
    id: "NX-1041",
    customer: "Ali Ahmed",
    amount: 8500,
    status: "Processing",
  },
  {
    id: "NX-1040",
    customer: "Sara Malik",
    amount: 4200,
    status: "Pending",
  },
  {
    id: "NX-1039",
    customer: "Hamza Raza",
    amount: 3800,
    status: "Completed",
  },
];

export default function Order() {
  const completed = orders.filter(
    (order) => order.status === "Completed"
  ).length;

  const pending = orders.filter(
    (order) => order.status === "Pending"
  ).length;

  const totalAmount = orders.reduce(
    (total, order) => total + order.amount,
    0
  );

  return (
    <div className="space-y-6">

      <div className="stats">
        <div className="stat-card purple">
          <div className="stat-heading">
            <span>Total Orders</span>
            <ShoppingBag size={20} />
          </div>
          <h2>{orders.length}</h2>
          <div className="stat-footer">
            All customer orders
          </div>
        </div>

        <div className="stat-card cyan">
          <div className="stat-heading">
            <span>Completed</span>
            <CheckCircle size={20} />
          </div>
          <h2>{completed}</h2>
          <div className="stat-footer">
            Successfully completed
          </div>
        </div>

        <div className="stat-card pink">
          <div className="stat-heading">
            <span>Pending</span>
            <Clock size={20} />
          </div>
          <h2>{pending}</h2>
          <div className="stat-footer">
            Waiting for processing
          </div>
        </div>
      </div>

      <section className="panel">
        <div className="panel-heading">
          <h3>Order Management</h3>
          <p>Track and monitor customer orders</p>
        </div>

        <div className="chart-summary">
          <h2>PKR {totalAmount.toLocaleString()}</h2>
          <span>Total Order Amount</span>
        </div>

        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>CUSTOMER</th>
                <th>AMOUNT</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="highlight">{order.id}</td>

                  <td>{order.customer}</td>

                  <td>
                    PKR {order.amount.toLocaleString()}
                  </td>

                  <td>
                    <span
                      className={`status ${
                        order.status === "Completed"
                          ? "success"
                          : order.status === "Processing"
                          ? "info"
                          : "warning"
                      }`}
                    >
                      ● {order.status}
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
