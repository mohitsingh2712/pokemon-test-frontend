import AbilityTable from './AbilityTable.jsx'

export default function LoadingCard({ name }){
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold">Loading {name}... <span className="opacity-60">(xxx)</span></h2>
      <div className="mx-auto mt-6 w-44 h-44 rounded-xl border-2 border-primary/30 flex items-center justify-center">
        <div className="flex gap-2">
          <span className="size-2.5 rounded-full bg-primary animate-bounce" />
          <span className="size-2.5 rounded-full bg-primary animate-bounce [animation-delay:120ms]" />
          <span className="size-2.5 rounded-full bg-primary animate-bounce [animation-delay:240ms]" />
        </div>
      </div>
      <AbilityTable abilities={[]} />
    </div>
  )
}


