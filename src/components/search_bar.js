import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: props.term
        };
    }
    onInputChange(term) {
        this.setState({term: term});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSearchTermChange(this.state.term);
    }

    render() {
        return (
          <nav className="navbar navbar-default">
            <div className="container-fluid">
              <div className="navbar-header">
                <a className="navbar-brand" href="/">
                  <img alt="Brand" src="img/logo.png"/>
                </a>
              </div>
              <form className="navbar-form navbar-left" onSubmit={event => this.onFormSubmit(event)}>
                  <input className="form-control" defaultValue={this.state.term} onChange={event => this.onInputChange(event.target.value)}/>
              </form>
            </div>
          </nav>
        )
    }
}

export default SearchBar;
