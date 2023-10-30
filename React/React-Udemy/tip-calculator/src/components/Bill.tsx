
export default function Bill ( {setBill, bill}: {setBill: (e: any) => void, bill: number} ) {

    return (
        <div>
        <span>How much was the bill?</span> <input value={bill} type="text" onChange={(e) => setBill(() => Number(e.target.value))}/>
        </div>
    )
}