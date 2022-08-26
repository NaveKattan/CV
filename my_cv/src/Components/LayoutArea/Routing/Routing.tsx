import { Route, Routes } from "react-router-dom";
import About from "../../HomeArea/About/About";
import Contact from "../../HomeArea/Contact/Contact";
import Education from "../../HomeArea/Education/Education";
import Hobbies from "../../HomeArea/Hobbies/Hobbies";
import Home from "../../HomeArea/Home/Home";
import Skills from "../../HomeArea/Skills/Skills";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/education" element={<Education />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/hobbies" element={<Hobbies />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default Routing;
