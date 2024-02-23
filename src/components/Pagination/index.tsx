import { Dispatch } from 'react';

interface Props {
  pagesParams: number[];
  activePage: number;
  setActivePage: Dispatch<React.SetStateAction<number>>;
}

function Pagination(props: Props) {
  return (
    <div className="pages container">
      {props.pagesParams?.map((offset, index) => (
        <button
          onClick={() => {
            props.setActivePage(index);
          }}
          className={
            index === props.activePage ? 'pages__button pages__button--active' : 'pages__button'
          }
          key={offset}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
