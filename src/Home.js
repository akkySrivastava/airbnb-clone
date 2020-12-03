import React from 'react'
import './Home.css'
import Banner from './Banner'
import Card from './Card'

function Home() {
    return (
        <div className = "home">
            <Banner />
            <div className = "home__section">
                <Card  
                    src = "https://a0.muscache.com/im/pictures/ff69ac49-64e7-4f4a-ae2b-ee01163d0790.jpg?im_w=240"
                    title = "Cabins and Cottages"
                    description = "Unique activities we can do together, led by a world of hosts"

                />
                <Card 
                    src = "https://a0.muscache.com/im/pictures/ce6814ba-ed53-4d6e-b8f8-c0bbcf821011.jpg?im_w=240"
                    title = "Unique Stays"
                    description = "Spaces that are more than  just a place to sleep"
                />
                <Card 
                    src = "https://a0.muscache.com/im/pictures/fbe849a4-841a-41b3-b770-419402a6316f.jpg?im_w=240"
                    title = "Pets are Welcome"
                    description =  "Don't worry for your pets. Space for the pets are really sound"
                />
            </div>
            <div className = "home__section">
                <Card 
                    src = "https://a0.muscache.com/im/pictures/03034c33-35b0-40a3-82a1-f9564aff8af0.jpg?im_w=960"
                    title = "Entire chalet hosted"
                    description = "Couple nest is our hugely loved cottage for those in love..."
                    price = "₹1,971/ night"
                />
                <Card 
                    src = "https://a0.muscache.com/im/pictures/59618ccb-eff6-4141-a6a6-3dff0a7293b5.jpg?im_w=720"
                    title = "Amreena Farmhouse"
                    description = "Amreena Farmhouse is the highest rated farmhouse on airbnb..."
                    price = "₹3,357/ night"
                />
                <Card 
                    src = "https://a0.muscache.com/im/pictures/ddac0ac0-1352-4932-a2ed-9e42af7b276f.jpg?im_w=480"
                    title = "Entire serviced"
                    description = "This place isn’t suitable for children under 12 and the host doesn’t allow pets or parties. "
                    price = "₹1,971/ night"
                />
            </div>
        </div>
    )
}

export default Home
