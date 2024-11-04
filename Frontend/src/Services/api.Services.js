export const logoutService = () => {
    try {
        const response = fetch("http://localhost:4000/auth/sign-out", {
            method: "GET",
            credentials: "include"
        })
        return response
    } catch (error) {
        console.log(error)
    }
}