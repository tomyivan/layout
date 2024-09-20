import { useRouteError } from "react-router-dom"
import vite from "/vite.svg"
export const ErrorPage = () => {
    const error = useRouteError()
    console.error(error)
    return (
        <div id="error-page" className="flex flex-col justify-center items-center h-screen">
            <img src={vite} alt="image error" className="h-[80vh]" />
            <h1 className="font-bold text-3xl">Oops!</h1>
            <p className="font-semibold text-xl">Lo siento, ha ocurrido un error inesperado</p>
            <p className="text-lg">
                <i>
                    {
                        error.statusText || error.message
                    }
                </i>
            </p>
        </div>
    )
}