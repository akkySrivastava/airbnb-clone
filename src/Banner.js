import { Button } from '@material-ui/core'
import Search from './Search'
import React, { useState } from 'react'
import './Banner.css'
import { useHistory } from 'react-router-dom';

function Banner() {

    const [showSearch, setShowSearch] = useState(false);

    const history = useHistory()

    return (
        <div className = "banner">
            <div className = "banner__search">

                    {showSearch && <Search />}
                    <Button 
                        onClick = {() => setShowSearch(!showSearch)}
                        className = "banner__searchButton"
                        variant = "outlined">
                            
    {showSearch ? "Hide" : "Search Dates"} </Button>
                </div>
            <div className = "banner__info">
                <h1>
                    Get Out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of gateway to uncover the hidden gems near you.
                </h5> 
                <Button 
                    onClick = {() => history.push('/search')}
                    variant = "outline">Explore more</Button>
            </div>
        </div>
    )
}

export default Banner
