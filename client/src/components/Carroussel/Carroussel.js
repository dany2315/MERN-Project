import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import photo1 from '../../assets/image/photo1.jpg'
import photo2 from '../../assets/image/photo2.jpg'
import "./Carroussel.css"

function Carrousel(props)
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
        <Carousel
        IndicatorIcon={<RadioButtonUncheckedIcon fontSize='small'/>} // Previous Example
        indicatorIconButtonProps={{
            style: {
                padding: '10px',    // 1
                color: 'black'       // 3
            }
        }}
        activeIndicatorIconButtonProps={{
            style: {
                backgroundColor: 'rgb(184, 182, 182)' // 2
            }
        }}
        indicatorContainerProps={{
            style: {
                marginTop: '10px', // 5
                textAlign: 'center' // 4
            }
    
        }} >


            {
                items.map( (item, i) =>  <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}


function Item(props)
{
    

    return (

    
        <Paper className='paperStyle' elevation={4} 
            style={{backgroundImage: `url(${props.item.src})`,
                    textAlign:'center'}}>
            
                <h2 className="a">{props.item.name}</h2>
                <p className="a">{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            
        </Paper>
    
    )
}

export default Carrousel