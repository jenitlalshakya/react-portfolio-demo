import React from 'react'

export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light text-center py-3">
                &copy; {new Date().getFullYear()} Jenit. All rights reserved.
            </footer>
        </>
    )
}
