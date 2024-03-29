import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="flex justify-center items-center flex-col mt-36">
            <img src="https://i.ibb.co/XxxJPG6/19199300.jpg" className="w-60 h-60" alt="" />
            <h1 className="text-2xl font-bold">Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="text-red-500">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}