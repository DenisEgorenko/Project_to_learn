import React, {useState} from "react";
import styles from "../../Users/Users.module.css";

function Paginator(props) {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    return <div className={styles.paginator}>
        {portionNumber > 1 && <button onClick={() => {
            setPortionNumber(portionNumber - 1)
        }}>Prev</button>}

        {pages.filter((p) => (p >= leftPortionPageNumber) && (p <= rightPortionPageNumber)).map((p) =>
            <span className={props.currentPage === p && styles.selectedPage}
                  onClick={(event) => {
                      props.onPageChanged(p)
                  }}> {p} </span>
        )}

        {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>}
    </div>
}

export default Paginator