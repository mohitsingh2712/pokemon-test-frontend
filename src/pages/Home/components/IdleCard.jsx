import AbilityTable from './AbilityTable.jsx'

export default function IdleCard() {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">No Pokemon Yet! <span className="opacity-60">(xxx)</span></h2>
      <div className="mx-auto mt-6 w-44 h-44 rounded-xl border-2 border-primary/30 flex items-center justify-center">
        <span className="text-sm text-gray-600">Please submit a pokemon!</span>
      </div>
      <AbilityTable abilities={[]} />
    </div>
  )
}


