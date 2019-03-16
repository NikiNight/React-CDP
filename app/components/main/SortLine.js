import React from 'react';

class SortLine extends React.Component {
    render() {
        return (
            <div className="sort-line">
                <div className="wrapper">
                    <p className="sort-line__movies-num">
                        7 movies found
                    </p>
                    <div className="sort-line__selectors">
                        Sort by 
                        <span className="button_minimal button_minimal_active">release date</span>
                        <span className="button_minimal">raing</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default SortLine;