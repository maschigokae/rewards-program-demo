import { useState } from 'react';
import './App.css';
import RewardsDashboard from './components/RewardsDashboard';
import { mockData } from './data/mockData';

function App() {
  const { customers } = mockData;
  const [customer, setCustomer] = useState(customers[0]);

  const switchCustomer = e => {
    const updatedCustomer = customers.find(c => c.id.toString() === e.target.value);
    setCustomer(updatedCustomer);
  };

  return (
    <>
      <nav>
        <div className="nav-logo">
          QualityOutdoorGear.com
        </div>
        <div>
          <div>Switch customer</div>
          <select onChange={switchCustomer}>
            {customers.map((customer) => (
              <option key={customer.id} value={customer.id}>
                {customer.name}
              </option>
            ))}
          </select>
        </div>
      </nav>
      <main>
        <div className="card">
          <RewardsDashboard customer={customer} />
        </div>
      </main>
      <footer>
        <div>© 2023 QOG</div>
      </footer>
    </>
  )
}

export default App;
