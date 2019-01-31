import React, { Component } from 'react';
import Slider from 'react-slick';
import SliderItem from './SliderItem';
import RecipeSteps from './RecipeSteps';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import Dialog from '@material-ui/core/Dialog';

class Carousel extends Component {
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			open: false
		};
	}

	componentDidMount() {
		this.getData();
	}

	getData = () => {
		import('../data/meals.json')
		  .then((res) => {
			this.refreshItems(res.items);
		  })
	}

	refreshItems = (items) => {
		this.setState({
			items: items,
		})
	}

	openRecipeModal = (steps) => {
		this.setState({
			currentRecipeSteps: steps,
	 	}, ()=>{
	 	this.openModal();
		})
	}

	openModal = () => {
		this.setState({
			open: true,
		})
	}
	closeModal = () => {
		this.setState({
			open: false,
		})
	}

	render() {
		const settings = {
			dots: false,
			infinite: true,
			speed: 500,
			slideToShow: 1,
			slideToScroll: 1
		};

		const sliderItems = this.state.items.map((sliderItem, i) => (

			<SliderItem
				title={sliderItem.title}
				recipe={sliderItem.recipe}
				url={sliderItem.url}
				key={i}
				steps={sliderItem.steps}
				openRecipeModal={this.openRecipeModal}
			/>
		));

		return (
			<div className="Carousel">
			<h1> Kyle's Recipes! </h1>
				<Slider {...settings}>
					{sliderItems}
				</Slider>
				<Dialog open={this.state.open} onBackdropClick={this.closeModal} disableAutoFocus={true} disableEnforceFocus={true} className="recipeModal">
					<RecipeSteps steps={this.state.currentRecipeSteps}>
					</RecipeSteps>
				</Dialog>
			</div>
		)
	}
}

export default Carousel;
