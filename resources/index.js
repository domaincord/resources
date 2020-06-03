import dropcatching from './dropcatching.json'
import general from './general.json'
import marketing from './marketing.json'
import sales from './sales.json'
import podcasts from './podcasts.json'
import portfolio from './portfolio.json'
import registrars from './registrars.json'
import seo from './seo.json'
import socialMedia from './social-media.json'
import utility from './utility.json'

const sortByTitle = ({ title: titleA }, { title: titleB }) => {
  if(titleA < titleB) return -1
  if(titleA > titleB) return 1
  return 0
}

export default [
  dropcatching,
  general,
  marketing,
  sales,
  podcasts,
  portfolio,
  registrars,
  seo,
  socialMedia,
  utility,
].sort(sortByTitle)
