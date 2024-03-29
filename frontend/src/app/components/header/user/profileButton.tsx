"use client";
import { useState } from "react"
import Dropdown from "../dropdown";
import { logoutUser } from "@/app/actions/authActions";


export default function Username({ username }: { username: string }) {
    const [showDropdown, setShowDropdown] = useState(false)


    return (
        <span className="auth-button logged-in relative" onMouseOver={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
            {username}
            {showDropdown && <Dropdown callback={() => logoutUser()} />}

        </span>
    )
}
