import { useState, useEffect } from 'react';
import OrdersList from './OrdersList';
import { api } from '../api/api';
import {
    formatDate,
    getFullMonthsRange,
    calcPlural,
} from '../utils/utils';

const RewardsDashboard = ({ customer }) => {
    const [loading, setLoading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [rewards, setRewards] = useState(0);
    const [rewardsByMonth, setRewardsByMonth] = useState({});
    const [monthsRange, setMonthsRange] = useState(3); // last 1, 3, 6, etc. months could be selected in full implementation

    const { startDate, endDate, monthOptions } = getFullMonthsRange(monthsRange);

    const startDateFormatted = formatDate(startDate);
    const endDateFormatted = formatDate(endDate);

    const calculateRewards = order => {
        const subtotal = Math.floor(order.subtotal);
        let points = 0;
        if (subtotal > 100) {
            points += (subtotal - 100) * 2 + 50;
        }
        if (subtotal > 50 && subtotal <= 100) {
            points += subtotal - 50;
        }
        return points;
    };

    const calculateTotalRewards = orders => orders.reduce((totalPoints, order) => calculateRewards(order) + totalPoints, 0);

    const calculateRewardsByMonth = orders => orders.reduce((rewardsByMonth, order) => {
        const orderDate = new Date(order.orderDate);
        const month = `${orderDate.getMonth()}-${orderDate.getFullYear()}`
        const points = calculateRewards(order);
        if (rewardsByMonth[month]) {
            rewardsByMonth[month] += points;
        } else {
            rewardsByMonth[month] = points;
        }
        return rewardsByMonth;
    }, {});

    const getOrders = async () => {
        try {
            setLoading(true);
            const orders = await api.getOrdersByCustomerId(customer.id, {
                startDate,
                endDate,
            });
            const totalRewards = calculateTotalRewards(orders);
            const monthlyRewards = calculateRewardsByMonth(orders);
            setOrders(orders);
            setRewards(totalRewards);
            setRewardsByMonth(monthlyRewards);
            setLoading(false);
        } catch (error) {
            console.error(error);
            // display error banner
        }
    };
    
    useEffect(() => {
        getOrders();
    }, [customer]);

    if (loading) {
        return <div className='loading'>Loading...</div>;
    }
    
    return (
        <>
            <h1>Rewards Dashboard</h1>
            <div className="customer-name">Hi {customer.name}!</div>
            <div>Here is a summary of your last {monthsRange} months of rewards activity.</div>
            <div className={'tooltip'}>Note: Rewards earned during the current month post to your account at the end of the month.</div>
            <div>You have earned {rewards} rewards point{calcPlural(rewards)} between {startDateFormatted} and {endDateFormatted}.</div>
            <div className='info-block'>Here is a breakdown of your rewards earned by month:</div>

            {monthOptions.map(month => {
                const currentMonthPoints = rewardsByMonth[month.monthKey] || 0;
                return (
                    <div key={month.monthKey} className='rewards-summary-monthly'>
                        <div>{month.label}:</div>
                        <div>{currentMonthPoints} point{calcPlural(currentMonthPoints)}</div>
                    </div>
                );
            })}

            {orders.length ? (
                <>
                    <div className='list-title'>Your orders for this date range:</div>
                    <OrdersList orders={orders} calculateRewards={calculateRewards} />
                </>
            ) : (
                <div className='info-block'>You have no orders to display for this date range.</div>
            )}

        </>
    );
};

export default RewardsDashboard;