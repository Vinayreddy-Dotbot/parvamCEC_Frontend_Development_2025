import { Link } from "react-router-dom";
const Homepage = () =>
{
    return (
        <>
            <h1>Home Page</h1>
            <Link to="/about">Go to About Page</Link>
        </>
    )
}
export default Homepage;