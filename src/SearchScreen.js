import React from 'react'
import './SearchScreen.css';
import Button from '@material-ui/core/Button';
import SearchResult from './SearchResult';

function SearchScreen() {
    return (
        <div className= "search_screen">
           <div className= "search_screen-det">
              <p> 30 stays | 10 July to 20 July | 5 guests </p>
              <h1> Places around </h1>
              <Button variant= "outlined"> Dates </Button>
              <Button variant= "outlined"> Group Size </Button>
              <Button variant= "outlined"> Price Range </Button>
              <Button variant= "outlined"> Rooms and beds </Button>
              <Button variant= "outlined"> More filters </Button>
           </div>
           <SearchResult
                img= "https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW50ZXJpb3IlMjBkZXNpZ258ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Entire apartment in New Delhi"
                title= "You’ll have the treehouse to yourself."
                description= "3 guests, · 1 bedroom, · 2 beds, · 1 bathroom"
                star= {5}
                price= "₹7,739/night"
           />
           <SearchResult
                img= "https://images.unsplash.com/photo-1521782462922-9318be1cfd04?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Entire rental unit in New Delhi"
                title= "Stay at this spacious Edwardian House"
                description= "2 guests, · 1 bedroom, · 1 bed, · 1 bathroom"
                star= {4.82}
                price= "₹1,821/night"
           />
           <SearchResult
                img= "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Private room in Gurugram"
                title= "London Studio Apartments"
                description= "2 guests, · 1 bedroom, · 1 private bathroom"
                star= {4.84}
                price= "₹1,890/night"
           />
           <SearchResult
                img= "https://images.unsplash.com/photo-1463797221720-6b07e6426c24?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Entire serviced apartment in Noida"
                title= "30 mins to Oxford Street, Excel London"
                description= "7 guests, · 3 bedrooms, · 3 beds, · 3 bathrooms"
                star= {4.60}
                price= "₹4,343/night"
           />
           <SearchResult
                img= "https://images.unsplash.com/photo-1582417728413-b2347161b864?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Entire residential home in Dehradun"
                title= "Spacious Peaceful Modern Bedroom"
                description= "2 guests, · 1 bedroom, · 1 bed, · 1 bathroom"
                star= {4.87}
                price= "₹1,550/night"
           />
           <SearchResult
                img= "https://images.unsplash.com/photo-1604580040660-f0a7f9abaea6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTh8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Entire rental unit in Jaipur"
                title= "The Blue Room In London"
                description= "2 guests, · Studio"
                star= {4.63}
                price= "₹1,728/night"
           />
           <SearchResult
                img= "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Earth House in Manor"
                title= "5 Star Luxury Apartment"
                description= "6 guests, · 1 bedroom, · 2 beds, · 1 bathroom"
                star= {4.94}
                price= "₹1,300/night"
           />
           <SearchResult
                img= "https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzZ8fGludGVyaW9yJTIwZGVzaWdufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
                location= "Farm Stay in Khopoli"
                title= "Independant luxury studio apartment"
                description= "2 guests, · Studio, · 1 bed, · 1 bathroom"
                star= {4.33}
                price= "₹2,757/night"
           />
        </div>
    )
}

export default SearchScreen
