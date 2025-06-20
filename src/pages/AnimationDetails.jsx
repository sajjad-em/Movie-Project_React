import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/header/Header";
export default function AnimationDetails() {
    const { id } = useParams();
    const [selectedShow, setSelectedShow] = useState(null);

    useEffect(() => {
        getData();
    }, [id]);

    async function getData() {
        try {
            const res = await axios.get("http://localhost:3001/animations");
            const foundShow = res.data.find((item) => item.id.toString() === id);
            setSelectedShow(foundShow);
        } catch (error) {
            alert("There is something wrong");
            console.log(error);
        }
    }

    if (!selectedShow) return <p>Loading...</p>;

    return (
        <>
            <Header />

            <div className="DetailsContainer">
                <img src={selectedShow.poster} alt={selectedShow.name} className="DetailsImg" />
                <div className="detailed-contant">
                    <h1 className="detailsName">{selectedShow.name}</h1>
                    <div className="detailRow">
                        <h3 className="grade">{selectedShow.IMDB} : IMDB</h3>
                        <h3>سال تولید : {selectedShow.year}</h3>
                        <p className="genre">ژانر : {selectedShow.genre}</p>
                        <h3>{selectedShow.actor} : بازیگران  </h3>
                        <br />
                        <hr />
                        <br />
                        <p className="description">{selectedShow.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
