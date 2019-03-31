import React from 'react';

const SortLine = (props) => {

    return (
        <div className="sort-line">
            <div className="wrapper">
                <p className="sort-line__movies-num">
                    {props.moviesNum} movies found
                </p>
                {
                    props.moviesNum>1 &&
                    <div className="sort-line__selectors">
                        Sort by 
                        <span 
                            className={`button_minimal ${props.activeSort === 'Date' ? 'button_minimal_active' : ''}`} 
                            onClick={() => props.toogleSorting('Date')}
                        >release date</span>
                        <span 
                            className={`button_minimal ${props.activeSort === 'Rating' ? 'button_minimal_active' : ''}`}
                            onClick={() => props.toogleSorting('Rating')}
                        >raiting</span>
                    </div>
                }
            </div>
        </div>
    )

}

export default SortLine;