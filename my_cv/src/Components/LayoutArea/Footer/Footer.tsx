import "./Footer.css";

function Footer(): JSX.Element {

    const date = new Date().getFullYear()

    return (
        <div className="Footer">
			<p>All Rights Reserved - By Nave Kattan | {date} | &copy;</p>
        </div>
    );
}

export default Footer;
