import { Link } from "react-router-dom/cjs/react-router-dom"

const PageTwo = () => {
    return (
        <>
            <h1>Page Two</h1>
            <Link to="/home">
                <button>Back</button>
            </Link>
        </>
    )
}
export default PageTwo