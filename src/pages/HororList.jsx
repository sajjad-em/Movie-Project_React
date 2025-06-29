import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/public/Button";

export default function HororList() {

    const [shows, setShows] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    async function getData() {
        try {
            const res = await axios.get("http://localhost:3001/horor");
            setShows(res.data);
        } catch (error) {
            alert("مشکلی پیش آمده است . لطفا مجددا تلاش کنید.");
            console.log(error);
        }
    }
    return <>
        <Link to="/Hororpage">
            <h2 style={{ textAlign: 'center' }}>ترسناک</h2>
        </Link>
        <div className="ListContainer">
            {shows.map((show) => (
                <div key={show.id}>
                    <h2 style={{ textAlign: 'left', padding: '5px 5px' }}>{show.name}</h2>
                    <Link to={`/animationDetails/${show.id}`}>
                        <img src={show.image} className="ListImg" alt={show.name} />
                    </Link>
                    <Button show={show} />
                    <h3 className="textShow">{show.IMDB}</h3>
                </div>
            ))}
        </div>
    </>
}