import Link from "next/link";

const NotFound = () => {
    return (
        <section className='container'>
            <div className='error_page'>
                <h1>404</h1>
                <h2>Not Found</h2>
                <p>Could not find requested resource</p>
                <Link href="/">
                    <button>
                        Go to Home Page
                    </button>
                </Link>
            </div>
        </section>
    );
}

export default NotFound;