export function formatNumberToMoney(number: number) {
  return Intl.NumberFormat("en-US").format(number);
}
