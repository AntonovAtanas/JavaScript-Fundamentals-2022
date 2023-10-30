

export default function ResetButton ({onReset}: {onReset: () => void}) {

    return (
        <div>
            <button onClick={onReset}>Reset</button>
        </div>
    )
}