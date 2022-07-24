export default function numberFormatter (val) {
  return new Intl.NumberFormat('en', {
    maximumFractionDigits: 4
  }).format(val) || ''
}
