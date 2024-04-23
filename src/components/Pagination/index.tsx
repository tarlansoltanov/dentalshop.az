interface Props {
  pageCount: number;
  currentPage: number | null | undefined;
  changePage: (page: number) => void;
}

const Pagination = ({ pageCount, currentPage, changePage }: Props) => {
  return (
    <div className="paginate-wrapper">
      <div className="paginate">
        {currentPage && currentPage > 1 && (
          <div className="paginate-left paginate-active">
            <a role="button" onClick={() => changePage(currentPage - 1)}>
              <i className="fas fa-chevron-left" aria-hidden="true"></i>
            </a>
          </div>
        )}

        <div className="paginate-content">
          {Array.from({ length: pageCount }).map((_, index) =>
            index === 0 ||
            index === pageCount - 1 ||
            Math.abs((currentPage || 0) - index - 1) < 3 ? (
              <a
                key={index}
                role="button"
                className={
                  currentPage === index + 1 || (!currentPage && index === 0)
                    ? "paginate-element-active"
                    : ""
                }
                onClick={() => changePage(index + 1)}>
                {index + 1}
              </a>
            ) : index === 1 || index === pageCount - 2 ? (
              <a key={index} role="button" aria-disabled={true}>
                ...
              </a>
            ) : null
          )}
        </div>

        {((currentPage && currentPage !== pageCount) || (!currentPage && pageCount > 1)) && (
          <div className="paginate-right paginate-active">
            <a role="button" onClick={() => changePage(currentPage ? currentPage + 1 : 2)}>
              <i className="fas fa-chevron-right" aria-hidden="true"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Pagination;
