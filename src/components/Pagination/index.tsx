import clsx from "clsx";

import styles from "./pagination.module.scss";

type Props = {
  dataPerPage: number;
  totalData: number;
  currentPage: number;
  paginate: (open: number) => void;
};

const Pagination: React.FC<Props> = ({
  dataPerPage,
  totalData,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div style={{ marginTop: "50px" }}>
      <ul className={styles.ul}>
        <>
          {pageNumbers.length > 7 ? (
            <>
              {pageNumbers.slice(0, 7).map((number) => (
                <li
                  key={number}
                  className={clsx(
                    styles.li,
                    currentPage === number && styles.li_active
                  )}
                  onClick={() => paginate(number)}
                >
                  <p>{number}</p>
                </li>
              ))}
              <p style={{ margin: "0px 8px" }}>...</p>
              {pageNumbers
                .slice(pageNumbers.length - 1, pageNumbers.length)
                .map((number) => (
                  <li
                    key={number}
                    style={{ marginLeft: "0px" }}
                    className={clsx(
                      styles.li,
                      currentPage === number && styles.li_active
                    )}
                    onClick={() => paginate(number)}
                  >
                    <p>{number}</p>
                  </li>
                ))}
            </>
          ) : (
            <>
              {pageNumbers.map((number) => (
                <li
                  key={number}
                  className={clsx(
                    styles.li,
                    currentPage === number && styles.li_active
                  )}
                  onClick={() => paginate(number)}
                >
                  <p>{number}</p>
                </li>
              ))}
            </>
          )}
        </>
      </ul>
    </div>
  );
};

export default Pagination;
