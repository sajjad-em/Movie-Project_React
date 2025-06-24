export default function Button({ show }) {
    const addToWatchList = () => {
        const storedList = JSON.parse(localStorage.getItem("watchList")) || [];
        const isAlreadySaved = storedList.find(item => item.id === show.id);

        if (!isAlreadySaved) {
            const updatedList = [...storedList, show];
            localStorage.setItem("watchList", JSON.stringify(updatedList));
            alert("به لیست پخش اضافه شد!");
        } else {
            alert(" قبلاً اضافه شده است.");
        }
    };

    return (
        <button className="addWishList" onClick={addToWatchList}>
            افزودن به لیست پخش
        </button>
    );
}