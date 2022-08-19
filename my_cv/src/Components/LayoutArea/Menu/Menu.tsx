import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <ul>
                <button className="button-64"><span className="text">Home</span></button>
                <button className="button-64"><span className="text">About Me</span></button>
                <button className="button-64"><span className="text">Education</span></button>
                <button className="button-64"><span className="text">Skills</span></button>
                <button className="button-64"><span className="text">Hobbies</span></button>
                <button className="button-64"><span className="text">Contact Me</span></button>
            </ul>
        </div>
    );
}

export default Menu;
