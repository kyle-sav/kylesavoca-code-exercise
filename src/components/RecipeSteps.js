import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

class RecipeSteps extends Component {

	render() {
		const recipeSteps = this.props.steps.map((recipeStep, i) => (
			<ListItem primary={recipeStep} key={i} className="recipeStep">
			{recipeStep}
			</ListItem>
		));
		return (
			<List className="modalList">
				{recipeSteps}
			</List>
		)
	}
}

export default RecipeSteps;
