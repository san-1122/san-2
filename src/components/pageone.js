import { Link } from "react-router-dom/cjs/react-router-dom.min"

const PageOne = () => {
    return (
        <>
            <h1>Page One</h1>
            <Link to="/home">
                <button>Back</button>
            </Link>
        </>
    )
}
export default PageOne