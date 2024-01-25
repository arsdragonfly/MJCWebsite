import { FC } from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/MJC square.png";

const Home: FC = () => {
    return (
        <div>
            <h1>Home</h1>
            <Image src={logo} className={"w-50"}></Image>
            <p>Club room location: The Nest 3206B</p>
            <p>The University of British Columbia, Vancouver, BC</p>
            <p>Instagram: ubcmahjongclub </p>
            <p>Email: ubcmahjongclub@gmail.com </p>
            <p>
                <a href={"https://www.discord.gg/Qd39mbxqcw"}>Join our discord channel</a> for
                latest information!
            </p>
        </div>
    );
};

export default Home;
