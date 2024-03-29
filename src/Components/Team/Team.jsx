import React from "react";
import Cards from "../Cards/Cards";

function Team () {
     // Define JSON data for cards
     const CardData = [
        {
            title: "Card 1",
            description: "Description for Card 1 using json data"
        },
        {
            title: "Card 2",
            description: "Description for Card 2 using json data"
        },
        {
            title: "Card 3",
            description: "Description for Card 3 using json data"
        },
        {
            title: "Card 4",
            description: "Description for Card 4 using json data"
        },
        {
            title: "Card 5",
            description: "Description for Card 5 using json data"
        },
    ];
    return (
        <>
            <div className="teamWrapper my-3">
                <h3 className="text-center">Meet Our Team</h3>
            </div>
            {/* Render CardComponent and pass cardData as props */}
            <Cards  cardData={CardData} />
            {/* <Cards  cardData={CardData} /> */}
        </>
    )
}
export default Team;