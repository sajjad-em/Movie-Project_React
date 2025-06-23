import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import RemoveButton from "../../components/public/RemoveButton";

export default function WatchListPage() {
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("watchList")) || [];
        setWatchList(stored);
    }, []);

    return (
        <>
            <Header />
            <div className="watchListContainer">
                <h2 style={{ textAlign: 'center' }}>لیست پخش من</h2>
                <div className="movieListContent">
                    {watchList.map((show) => (
                        <div key={show.id}>
                            <h2>{show.name}</h2>
                            <img src={show.image} alt={show.name} className="ListImg" />
                            <RemoveButton showId={show.id} setWatchList={setWatchList} />
                            <h3>{show.IMDB}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}