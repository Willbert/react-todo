type FilterProps = {
  name: string
}

export default function Filter({name}: FilterProps) {
  return (
    <li className="c-button">{name}</li>
  )
}