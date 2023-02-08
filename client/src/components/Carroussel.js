import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import "./Carroussel.css"
function Example(props)
{
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
            src:photo1
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
            src:photo2

        }
    ]

    return (
        <Carousel>
            {
                items.map( (item, i) =>  <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper elevation={4} >
            <img src={props.item.src} alt="slide-img"  />
            <h2 className="a">{props.item.name}</h2>
            <p className="a">{props.item.description}</p>

            <Button className="CheckButton">
                Check it out!
            </Button>
        </Paper>
    )
}

export default Example