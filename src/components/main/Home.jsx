import Animation from "../../pages/Animations";
import List from "../../pages/List";
import Header from "../header/Header";
import Slider from "../slider/Slider";


export default function Home() {
    return <>
        <Header />
        <Slider />
        <br />
        <hr />
        <br />
        <List />
        <br />
        <hr />
        <br />
        <Animation />
    </>
}