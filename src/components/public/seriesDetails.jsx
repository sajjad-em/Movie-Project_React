import { useEffect, useState } from "react";
import List from "../../pages/List";
import Header from "../header/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Series() {


    const [shows, setShows] = useState([]);

    useEffect(() => {
        getData();
    }, []);


    async function getData() {
        try {
            const res = await axios.get("http://localhost:3001/seriesDetails");
            setShows(res.data);
        } catch (error) {
            alert("مشکلی پیش آمده است . لطفا مجددا تلاش کنید.");
            console.log(error);
        }
    }
    return <>
        <Header />
        <h2 style={{ textAlign: 'center' , color:'indigo' }}> سریال ها</h2>
        <div className="ListContainer">
            {shows.map((show) => (
                <div key={show.id}>
                    <h2 style={{ textAlign: 'left', padding: '5px 5px' }}>{show.name}</h2>
                    <Link to={`/details/${show.id}`}>
                        <img src={show.image} className="ListImg" alt={show.name} />
                    </Link>
                    <Button />
                    <h3 className="textShow">{show.IMDB}</h3>
                </div>
            ))}
        </div>
    </>
}