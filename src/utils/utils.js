// Date utils

export const formatDate = (date = new Date()) => date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
});

export const getFullMonthsRange = (range = 3, referenceDate = new Date()) => {
    const referenceMonth = referenceDate.getMonth();
    const referenceYear = referenceDate.getFullYear();

    const startDate = new Date(referenceYear, referenceMonth - range, 1);
    startDate.setHours(0, 0, 0, 0);

    const endDate = new Date(referenceYear, referenceMonth, 0);
    endDate.setHours(23, 59, 59, 999);

    const endDateMonth = endDate.getMonth();
    const endDateYear = endDate.getFullYear();

    const monthOptions = new Array(range).fill(null)
        .map((_, index) => {
            const indexDate = new Date(endDateYear, endDateMonth - index);
            const monthKey = `${indexDate.getMonth()}-${indexDate.getFullYear()}`;
            const label = new Date(endDateYear, endDateMonth - index).toLocaleDateString('default', { month: 'long', year: 'numeric' });
            return { monthKey, label };
        })
        .reverse();

    return {
        startDate,
        endDate,
        monthOptions,
    };
};

// String utils

export const calcPlural = (count, modifier = 's') => count === 1 ? '' : modifier;