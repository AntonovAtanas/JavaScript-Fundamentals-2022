import ResetButton from "./ResetButton";

export default function TotalPrice({ bill, yourTip, friendTip, onReset }: {bill: number, yourTip: number, friendTip: number, onReset: () => void}) {

    let totalYourTip = yourTip ? (yourTip / 100) * bill : 0;
    let totalFriendTip = friendTip ? (friendTip / 100) * bill : 0;

    if (!bill) {
        return ('')
    }

    return (
        <div>
            {<h2>You pay ${bill + totalYourTip + totalFriendTip} (${bill} + ${totalFriendTip + totalYourTip} tip)</h2>}
            <ResetButton onReset={onReset} />
        </div>
    );
}
