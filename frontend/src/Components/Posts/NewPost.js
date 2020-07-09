import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AddPost } from '../../Actions/NewPost';
import auth0Client from '../../Auth/Auth';

class NewPost extends Component {
    maxlength = 280;
    state = {
        disabled: false,
        author: auth0Client.profile.nickname,
        content: ''
    };

    update = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    submit = () => {
        this.setState({
            disabled: true
          });
        this.props.AddPost({
                author: this.state.author,
                content: this.state.content
            }, this.props.history)
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
                                <label htmlFor="exampleInputEmail1">Content:</label>
                                <textarea
                                    disabled={this.state.disabled}
                                    type="text"
                                    name="content"
                                    onChange={this.update}
                                    className="form-control"
                                    placeholder="Give your post a Content."
                                    value={this.state.content}
                                    maxLength={this.maxlength}
                                />
                                <p style={{textAlign:"right"}}>({this.state.content.length}/{this.maxlength})</p>
                            </div>
                            <button
                                disabled={this.state.disabled}
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

const mapStateToProps = state => {
    return { posts: state.posts }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        AddPost
    },
    dispatch
  );

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
    )(NewPost));