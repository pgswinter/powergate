import React, {Component} from 'react';
import { connect } from 'react-redux';
import {fetchPostionSearchTextAction} from '../redux/actions/searchTextAction';

class SearchTextPageContainer extends Component{
	constructor(props){
		super(props)
		this.state ={
			text: 'Google is a search engine service, google is also an engine for a lot of other services and tools',
			inputText:'',
			output:''
		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}

	onChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	onSubmit(e){
		e.preventDefault();
		this.props.dispatch(fetchPostionSearchTextAction(this.state.text,this.state.inputText,this.state.output))
	}
	render(){
		const {position} = this.props
		return(
			<div className="row">
				<form onSubmit={this.onSubmit}>
					<h1>Search Text</h1>
					<div className="form-group">
						<p>{this.state.text}</p>
						<input type="text"
							value={this.state.inputText}
							onChange={this.onChange}
							name="inputText"
						/>
						<button type="submit">Search Position</button>
						<br/>
						<p>Position Of Characters in Sentences stay at: <label htmlFor="">{position}</label></p>
				  	</div>
				</form>
			</div>
		)
	}
}

export default connect((store)=>{
	return {
		position: store.position.position
	};
})(SearchTextPageContainer);
