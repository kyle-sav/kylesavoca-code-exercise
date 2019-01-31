import React, { Component } from 'react';
import RecipeSteps from './RecipeSteps';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import Fastfood from '@material-ui/icons/Fastfood';


class SliderItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			modalOpen: false,
		};
	}

	openRecipeModal = () => {
		this.props.openRecipeModal(this.props.steps);
	}

	render() {
		const style = {
			backgroundImage: "url("+this.props.url+")",
		}
		return (
			<div className="sliderItem">
				<div className="recipeText">
					<Fastfood />
					<h2>{this.props.title}</h2>
					<p>{this.props.recipe}</p>
					<Button variant="contained" onClick={this.openRecipeModal.bind(this)} className="">
        				See Recipe
      				</Button>
				</div>
				<figure className="galleryImage" style={style}/>
			</div>
		)
	}
}

export default SliderItem;
