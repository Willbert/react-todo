import Summary from './footer/Summary'
import Filters from './footer/Filters'
import Actions from './footer/Actions'

export default function TodoFooter() {
  return (
    <footer className="flex">
      <Summary />
      <Filters />
      <Actions />
    </footer>
  )
}