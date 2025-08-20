import AbilityTable from './AbilityTable.jsx'
import { withBackend } from '../../../http/api'

export default function ResultCard({ data }) {
  const imgSrc = withBackend(data.image)
  return (
    <div className="text-center">
      <h2 className="text-3xl font-extrabold text-primary">{data.name}</h2>
      <div className="mx-auto mt-6 w-48 h-48 rounded-xl border-2 border-primary/30 flex items-center justify-center overflow-hidden bg-white">
        {imgSrc ? <img src={imgSrc} alt={data.name} className="max-w-full max-h-full object-contain" /> : <span className="text-sm text-gray-500">No image</span>}
      </div>
      <AbilityTable abilities={data.abilities || []} />
    </div>
  )
}


