import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function List() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    async function getData() {
        try {
            const res = await axios.get("http://localhost:3001/series");
            setShows(res.data);
        } catch (error) {
            alert("مشکلی پیش آمده است . لطفا مجددا تلاش کنید.");
            console.log(error);
        }
    }

    return (
        <div className="ListContainer">
            {shows.map((show) => (
                <div key={show.id}>
                    <h2 style={{ textAlign: 'left', padding: '5px 5px' }}>{show.name}</h2>
                    <Link to={`/details/${show.id}`}>
                        <img src={show.image} className="ListImg" alt={show.name} />
                    </Link>
                    <h3 className="textShow">{show.IMDB}</h3>
                </div>
            ))}
        </div>
    );
}
