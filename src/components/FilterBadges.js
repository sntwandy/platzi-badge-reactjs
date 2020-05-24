import React from 'react';

function FilterBadges (props) {
    return(
        <div className="form-group">
            <label>Filter badges</label>
            <input type="text" className="form-control" value={props.value} onChange={props.onChange} />
        </div>
    );
}

export default FilterBadges;