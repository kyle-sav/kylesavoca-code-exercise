import React, { Component } from 'react';
import '../App.css';
import Carousel from './Carousel';
import Grid from '@material-ui/core/Grid';

class CarouselContainer extends Component {

// Container Level, for styling and holding Carousel
  render() {
    return (
	<Grid container>
		<Grid item xs={12} sm={6} className="grid-item">
          <div className="CarouselContainer">
    	  	<Carousel>
    		</Carousel>
          </div>
		</Grid>
	 </Grid>
    )
  }

}


export default CarouselContainer;
