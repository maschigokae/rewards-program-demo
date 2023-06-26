// Date utils

export const formatDate = (date = new Date()) => date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
});

export const getFullMonthsRange = (range = 3, currentDate = new Date()) => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    const startDate = new Date(currentYear, currentMonth - range, 1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(currentYear, currentMonth, 0);
    endDate.setHours(23, 59, 59, 999);

    const monthOptions = [];

    for (let i = 0; i < range; i++) {
        let month = endDate.getMonth() - i;
        let year = endDate.getFullYear();

        if (month < 0) { // intended only for range of 12 months or less
            month += 12;
            year--;
        }
        const monthKey = `${month}-${year}`;
        const label = `${new Date(year, month).toLocaleString('default', { month: 'long', year: 'numeric' })}`;
        monthOptions.unshift({ monthKey, label });
    }

    return {
        startDate,
        endDate,
        monthOptions,
    };
};

// String utils

export const calcPlural = (count, modifier = 's') => count === 1 ? '' : modifier;