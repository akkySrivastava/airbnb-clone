import { Button } from '@material-ui/core'
import React from 'react'
import './SearchPage.css'
import SearchResult from './SearchResult'
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className = "searchPage__info">     
                <p>62 stays · 1 November to 3 December · 2 guests </p>
                <h1>Stays nearby</h1>
                <Button variant = "outlined">Type of Place</Button>
                <Button variant = "outlined">Price</Button>
                <Button variant = "outlined">Rooms and Beds</Button>
                <Button variant = "outlined">More Filters</Button>
            </div>
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/532f9c4e-4466-4c94-a2b6-a3a233af1534.jpg?im_w=720"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "₹4,500 / night"
                star = "4.73"
                total = "8,500 toal"
            />
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/364be822-597b-49eb-b49b-e3674f6b3b03.jpg?im_w=320"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "₹3,000 / night"
                star = "4.73"
                total = "6000 toal"
            />
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/0a6c2428-7801-43e9-ac39-767521bbdebe.jpg?im_w=720"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "₹4500 / night"
                star = "4.73"
                total = "9,500 toal"
            />
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/49de5518-aa86-4a99-97c7-c465804f6911.jpg?im_w=1200"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "₹2,500 / night"
                star = "4.30"
                total = "5000 toal"
            />
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/d1cb6e94-d5b8-4dc8-8923-d8087cc20546.jpg?im_w=720"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "₹4,000 / night"
                star = "4.50"
                total = "3,200 total"
            />
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/6940bc88-0ba4-4b68-9499-3a34c16ac0f9.jpg?im_w=720"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "₹2,500 / night"
                star = "5.00"
                total = "5,000 total"
            />
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/9757fc07-abd4-4f10-ae5a-12fc4926afa7.jpg?im_w=720"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "₹900 / night"
                star = "3.73"
                total = "1,800 total"
            />
            <SearchResult 
                img = "https://a0.muscache.com/im/pictures/09a35990-24e1-473c-8f77-54ac5a788412.jpg?im_w=480"
                location = "lonavla"
                title = "The Artist Adventure Cottage"
                description = "जानकर क्या करोगे"
                price = "750 / night"
                star = "4.00"
                total = "1,500 total"
            />
        </div>
    )
}

export default SearchPage 
