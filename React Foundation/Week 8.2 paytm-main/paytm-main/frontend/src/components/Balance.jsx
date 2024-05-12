
export const Balance = ({ value }) => {
    const formattedBalance = value.toFixed(2);
    return <div className="flex">
        <div className="font-bold text-lg">
            Your balance
        </div>
        <div className="font-semibold ml-4 text-lg">
            Rs {formattedBalance}
        </div>
    </div>
}