import { Link, Outlet } from 'react-router-dom';

export default function About() {
    return (
        <>
        <h1>Halaman About Nih!</h1>
        <Link to="/about/team">Link</Link>
        <Outlet />
        </>
    )
}