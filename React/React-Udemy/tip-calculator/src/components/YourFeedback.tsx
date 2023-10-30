export default function YourFeedback({
    setYourTip,
    yourTip,
}: {
    yourTip: number;
    setYourTip: (tip: any) => void;
}) {
    return (
        <div>
            <span>How did you like the service?</span>
            <select
                value={yourTip}
                onChange={(e) => setYourTip(() => Number(e.target.value))}
            >
                <option value="0">Dissatisfied (0%)</option>
                <option value="5">It was okay (5%)</option>
                <option value="10">It was good (10%)</option>
                <option value="20">Absolutely amazing! (20%)</option>
            </select>
        </div>
    );
}
