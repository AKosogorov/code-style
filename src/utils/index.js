export function scrollTop () {
  document.querySelector('header').scrollIntoView({ block: 'start', behavior: 'smooth' })
}
