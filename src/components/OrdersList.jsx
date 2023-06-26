import { calcPlural } from '../utils/utils';

const OrdersList = ({ orders, calculateRewards }) => (
    <ul className="orders-list">
        <li>
            <div className="orders-list-item orders-list-key">
                <div>Date</div>
                <div>Subtotal</div>
                <div>Rewards</div>
            </div>
        </li>
        {orders.map(order => {
            const rewards = calculateRewards(order);
            return (
                <li key={order.orderId}>
                    <div className="orders-list-item">
                        <div>{order.orderDate.split(' ')[0]}</div>
                        <div>${order.subtotal.toFixed(2)}</div>
                        <div>{rewards} point{calcPlural(rewards)} earned</div>
                    </div>
                </li>
            );
        })}
    </ul>
);

export default OrdersList;