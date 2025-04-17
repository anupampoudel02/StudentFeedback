import { useEffect } from "react"

export default function GuestLayout({children}) {
    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token) {
            window.location.href = "/dashboard"
        }
    }, [])
    return (
        <>
        {children}
        </>
    )
}