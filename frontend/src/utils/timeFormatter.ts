
export default function formatTimeLocale(time: string) {
    /* 
    Transforms given date string to a more readable format.
    1 gün önce,
    1 saat önce,
    1 dakika önce,
    1 saniye önce,
    
    After 1 day, it will show the date in the format of "Monday, 2021, August 23"
    */
    const date = new Date(time);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    if (days > 0) {
        return date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }
    if (hours > 0) {
        return `${hours} saat önce`;
    }
    if (minutes > 0) {
        return `${minutes} dakika önce`;
    }
    if (seconds > 0) {
        return `${seconds} saniye önce`;
    }
    return 'Şimdi';

}