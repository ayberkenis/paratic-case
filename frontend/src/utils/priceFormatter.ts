export function priceFormatter(price: number) {
    return price.toFixed(4).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}