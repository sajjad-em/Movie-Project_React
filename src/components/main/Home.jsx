import Action from "../../pages/ActionList";
import Animation from "../../pages/Animations";
import HororList from "../../pages/HororList";
import SeriesList from "../../pages/SeriesList";

import Header from "../header/Header";
import Slider from "../slider/Slider";


export default function Home() {
    return <>
        <Header />
        <Slider />
        <br />
        <hr />
        <br />
        <SeriesList />
        <br />
        <hr />
        <br />
        <Animation />
        <br />
        <hr />
        <br />
        <Action  />
        <br />
        <hr />
        <br />
        <HororList />
    </>
}