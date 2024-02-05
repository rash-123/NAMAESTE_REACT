import { useState } from "react";
import ResturantCard from "./ResturantCard";

const Body = () => {
    //local state variable - super powerfull variable
    const [listOfResturants, setListofResturants] = useState([
        {
            data: {
            id: "1234",
            name: "Meghana Food",
            cuisine: "Biryani, North Indian",
            rating: 3.3,
            delivery: "44min",
            },
        },
        {
            data: {
            id: "123",
            name: "Burger",
            cuisine: "Fast Food",
            rating: 4.4,
            delivery: "40min",
            },
        },
    ]);
    
return (
    <div className='body'>
        <div className='filter'>
            <button className="filter-btn"
                onClick={() => {
                    const filterList = listOfResturants.filter(
                        (res) => res.data.rating > 4
                    ); 
                    setListofResturants(filterList);
                    }}
                >
                    Top Rated Resturants
                </button>
            </div>
    <div className='res-container'>
        {listOfResturants.map((resturant) => ( 
            <ResturantCard key={resturant.data.id}  resData ={resturant} />
        ))}
    </div>
    </div>
);
};

export default Body;
