import axios from "axios";
import { useEffect, useState } from "react"

export default function List() {
    const [show, setShow] = useState([]);
    useEffect(() => {
        getData();
    });
    async function getData() {
        try {
            await axios.get("http://localhost:3001/list").then((res) => {
                setShow(res.data);
            }).catch((err) => {
                console.log(err);
            })
        } catch (error) {
            alert("There is something wrong")
        }
    }



    return <>
        <div style={{display:'flex' , justifyContent:'space-between', padding:'20px 20px'}} className="row">
            {
                show.map((show) => {
                    return (
                        <div className="col-3">
                                <h2>{show.name}</h2>
                                <img src={show.image} className="ListImg" alt="..." />
                                <h3>{show.IMDB}</h3>
                        </div>
                    )
                })
            }
        </div>
    </>
}