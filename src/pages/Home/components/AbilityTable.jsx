export default function AbilityTable({ abilities }) {
    return (
        <div className="max-w-md mx-auto mt-6 text-left">
            <div className="grid grid-cols-3 text-sm font-semibold">
                <span>Ability</span>
                <span>Type</span>
                <span>Damage</span>
            </div>
            <div className="border-t mt-1" />
            {abilities?.length ? abilities.map((a, i) => (
                <div key={i} className="grid grid-cols-3 text-sm py-2 border-b">
                    <span>{a.ability}</span>
                    <span>{a.type}</span>
                    <span>{a.damage}</span>
                </div>
            )) : (
                <div className="grid grid-cols-3 text-sm py-6 text-gray-400">
                    <span>—</span><span>—</span><span>—</span>
                </div>
            )}
        </div>
    )
}
