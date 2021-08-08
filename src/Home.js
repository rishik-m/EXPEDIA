import React from 'react'
import Banner from './Banner';
import './Home.css';
import Card from './Card';

function Home() {
    return (
        <div className= "home">
          <Banner />
          <div className= "section">
            <Card
                src="https://images.unsplash.com/photo-1584132905271-512c958d674a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEzfHxob3RlbCUyMHJvb218ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title="Online Experiences"
                description="Unique activities we can do together, led by a world of hosts."
            />
            <Card
                src="https://images.unsplash.com/photo-1544097935-e6d136448533?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."
            />
            <Card
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."
            />
          </div>
          <div className= "section">
            <Card
                src="https://images.unsplash.com/photo-1549638441-b787d2e11f14?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title="3 Bedroom Flat in Bournemouth"
                description="Superhost with a stunning view of the beachside in Sunny Bournemouth"
                price="£130/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1595161695996-f746349f4945?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title="Penthouse in London"
                description="Enjoy the amazing sights of London with this stunning penthouse"
                price="£350/night"
            />
            <Card
                src="https://images.unsplash.com/photo-1576675784432-994941412b3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="£70/night"
            />
          </div>
          <div className= "section">
            <Card
                src= "https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title= "Outdoor Gateways"
                description= "Local things to do, wherever you are" 
            />
            <Card
                src= "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWwlMjByb29tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title= "Featured Collection: Wanderlust"
                description= "Travel from home with Online Experiences" 
            />
            <Card
                src= "https://images.unsplash.com/photo-1594560913036-d15f23f8a91c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                title= "Pets Allowed"
                description= "Entire Villa in Kashid" 
            />
          </div>            
        </div>
    )
}

export default Home
