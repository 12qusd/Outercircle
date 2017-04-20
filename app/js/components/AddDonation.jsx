import React from 'react';

export default class AddDonation extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) { // TODO: security, xss, rendering, errors
    event.preventDefault();

    const data = {
      donor: 1, // todo
      charity: 1, // todo
      category: $('#category').val(),
      amount: $('#amount').val(),
    };

    // const feed = this;

    $.post('/donate', data, function(data, status) {
      $('#name').val('');
      $('#category').val('');
      $('#amount').val('');
      // feed.setState({
      //   posts: [data].concat(feed.state.posts),
      // });
    });
  }
  
  render() {
    return (
      <div className="well well-sm">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="name">Charity Name:</label>
            <input type="text" className="form-control" id="name"/>
          </div>
          <div className="form-group">
            <label for="category">Category:</label>
            <select id="category" className="form-control">
              <option>Education</option>
              <option>Environment</option>
            </select>
          </div>
          <div className="form-group">
            <label for="amount">Amount:</label>
            <div className="input-group">
              <div className="input-group-addon">$</div>
                <input type="number" className="form-control" id="amount"/>
              <div className="input-group-addon">.00</div>
            </div>
          </div>
          <div className="form-group form-end">
            <button 
              type="submit" 
              className="btn btn-primary full-width"
            >
              Record Donation
            </button>
          </div>
        </form>
      </div>
    );
  }
}