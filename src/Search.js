import React, { useState } from 'react'
import './Search.css';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import PeopleIcon from '@material-ui/icons/People';
import { Button } from '@material-ui/core';

function Search() {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }

    function handleSelect(ranges) {
          setStartDate(ranges.selection.startDate)
          setEndDate(ranges.selection.endDate)
    }

    return (
        <div className= "search_feature">
            <DateRangePicker
               ranges= {[selectionRange]}
               onChange= {handleSelect}
            />
            <h3>
                Number of guests
                <PeopleIcon /> 
            </h3>
            <input type= "number" defaultValue= {2} min= {0} />
            <Button> Search Expedia </Button>
        </div>
    )
}

export default Search
