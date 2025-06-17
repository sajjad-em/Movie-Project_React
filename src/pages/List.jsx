import axios from "axios";
import { useEffect, useState } from "react"

export default function List() {
    const [show, setShow] = useState([]);
    useEffect(() => {
        getData();
    });
    async function getData() {
        try {
            await axios.get("http://localhost:3001/series").then((res) => {
                setShow(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            alert("There is something wrong")
        }
    }

    return (
        <div className="ListContainer">
            {
                show.map((show) => (
                    <div >
                        <h2 style={{ textAlign: 'left' }}>{show.name}</h2>
                        <img src={show.image} className="ListImg" alt="..." />
                        <h3 className="textShow">{show.IMDB}</h3>
                    </div>
                ))
            }
        </div>
    );

}