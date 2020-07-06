import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NewPost extends Component {
    submit = () => {
    }

    render() {
        return(
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="card border-primary">
                        <div className="card-header">New Post</div>
                        <div className="card-body text-left">
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Title:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Give your post a title."
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Content:</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Give your post a Content."
                                />
                            </div>
                            <button
                                className="btn btn-primary"
                                onClick={this.submit}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(NewPost);