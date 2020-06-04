import marketing from './marketing'
import sales from './sales'
import podcasts from './podcasts'
import registrars from './registrars'
import utility from './utility'

const sortByTitle = ({ title: titleA }, { title: titleB }) => {
  if(titleA < titleB) return -1
  if(titleA > titleB) return 1
  return 0
}

export default [
  marketing,
  sales,
  podcasts,
  registrars,
  utility,
].sort(sortByTitle)
