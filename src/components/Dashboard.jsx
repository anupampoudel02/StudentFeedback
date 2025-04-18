import React, { useEffect, useState } from "react";
import AuthLayout from "./AuthLayout";
import http from "../request/http";

export default function Dashboard() {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const handleLogout = async () => {
        await localStorage.removeItem('token');

        window.location.href = "/login"
    }

    useEffect(() => {
        setLoading(true);
        http.get("/user").then(res => {
            if(res.data) {
                setUser(res.data);
            }
        }).catch(err => {
            // handleLogout();
        }).finally(() => setLoading(false))

    }, [])


    return (
        <AuthLayout>
            {
                loading ? "Loading..." : (
                    <>
            <button onClick={handleLogout}>Logout</button>
            Dashboard
            <span>Hello, {user?.name}</span>
                    </>
                )


            }

        </AuthLayout>
    )
}