export default function RemoveButton({ showId, setWatchList }) {
    const handleRemove = () => {
        const storedList = JSON.parse(localStorage.getItem("watchList")) || [];
        const updatedList = storedList.filter(item => item.id !== showId);
        localStorage.setItem("watchList", JSON.stringify(updatedList));
        setWatchList(updatedList);
    };

    return (
        <button className="addWishList" onClick={handleRemove}>
            حذف از لیست پخش
        </button>
    );
}