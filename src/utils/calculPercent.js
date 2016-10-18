export default function calculPercent(value, total) {
  if (!value || !total || isNaN(value) || isNaN(total) || total === 0) {
    return 0;
  } else {
    return (value / total * 100).toFixed(2);
  }
}
