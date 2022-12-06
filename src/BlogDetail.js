import { useParams } from "react-router-dom"

export default function BlogDetail() {
    const urlParams = useParams();

    return (
    <>
        <h1>Blog Detail</h1>
        <h2> ini detail halaman {urlParams.slug} </h2>
    </>
    )
}