import Filter from './Filter'

export default function Filters() {
  return (
    <>
      <h2 className="sr-only">Filters</h2>
      <ul className="c-filters">
        <Filter name={'All'} />
        <Filter name={'Active'} />
        <Filter name={'Complete'} />
      </ul>
    </>
  )
}



// <h2 className="u-screen-reader">Filters</h2>
// <ul className="c-filters">
//   <li className="c-button is-active" data-filter-target="all">All</li>
//   <li className="c-button" data-filter-target="active">Active</li>
//   <li className="c-button" data-filter-target="complete">Complete</li>
// </ul>