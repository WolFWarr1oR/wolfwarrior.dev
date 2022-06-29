import Link from "next/link";

export default function NotFound() {
    return (
        <div className="notfound">
            <div className="u-max-width-container row column content-box">
                <h1 className="u-align-center">
                    Страница ненаходится.
                </h1>
                <h3 className="u-align-center">
                    Зато можно пофантазировать.
                </h3>
            </div>
        </div>
    )
}