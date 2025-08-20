import AbilityTable from './AbilityTable.jsx'

export default function ErrorCard({ message, onTryAgain }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-primary">Error! :( <span className="opacity-60">(404)</span></h2>
      <div className="mx-auto mt-6 w-64 rounded-xl border-2 border-primary/30 p-4">
        <p className="text-sm text-gray-700">{message}</p>
        <button onClick={onTryAgain} className="mt-3 rounded-md bg-primary px-3 py-1.5 text-white">Try again</button>

      </div>
      <AbilityTable abilities={[]} />
    </div>
  )
}


