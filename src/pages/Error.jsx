import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <>
        <main className="min-h-screen grid  place-items-center p-8">
          <div className="text-center">
            <p className="text-8xl text-primary  ">404</p>
            <h4 className="mt-4 font-semibold text-3xl tracking-tight sm:text-5xl">
              {" "}
              page not found
            </h4>
            <p className="mt-6 leading-7 text-xl ">
              sorry,we couldn`t find the page you`re looking for
            </p>
            <div className="mt-10">
              <Link to="/" className="btn btn-secondary">
                go back home
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }
  return (
    <main className="grid min-h-[100vh] place-items-center px-8 ">
      <h4 className="text-center font-bold text-4xl">there was an error... </h4>
    </main>
  );
};

export default Error;
