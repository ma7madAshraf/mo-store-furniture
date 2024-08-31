import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

const Pagination = () => {
  const { meta } = useLoaderData();
  const { page, pageCount } = meta.pagination;
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  
  if (pageCount < 2) return null;

  return (
    <>
      <div className="join flex w-full justify-center mt-16">
        <button
          className="join-item btn "
          disabled={page === 1}
          onClick={() => {
            handleNavigation(page - 1);
          }}
        >
          Previous
        </button>
        <div>
          {Array.from({ length: pageCount }, (_, index) => {
            return (
              <input
                className={`join-item btn btn-square ${
                  page === index + 1 && `bg-base-300 border-base-300`
                }`}
                type="radio"
                key={index}
                name="options"
                aria-label={index + 1}
                onClick={() => handleNavigation(index + 1)}
              />
            );
          })}
        </div>
        <button
          className="join-item btn"
          disabled={page === pageCount}
          onClick={() => handleNavigation(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagination;
