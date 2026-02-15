export function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formatterCustom = new Intl.DateTimeFormat('en-US', options);
    return formatterCustom.format(new Date(date));
}