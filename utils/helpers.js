module.exports = {
    format_date: (date) => {
        if (!date) return 'N/A';
        const formattedDate = new Date(date);
        if (isNaN(formattedDate)) return 'Invalid Date';
        return formattedDate.toLocaleDateString();
    },
};