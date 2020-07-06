import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { GetPosts } from '../../Actions/Actions';

class Posts extends Component {
    componentDidMount(){
        this.props.GetPosts();
    }

    render() {
        console.log(this.props);
        let { posts } = this.props; 
        if (posts === undefined) {
            return <p>Loading ...</p>;
        } else {
            return (
                <div className="container">
                    <div className="row">
                    {
                        posts.map(post => (
                            <div key={post.id}  className="col-sm-12 col-md-4 col-lg-3">
                                <div className="card border-primary mb-3">
                                    <div className="card-header">
                                    <h4 className="card-title">{post.title}</h4>
                                    </div>
                                    <div className="card-body">
                                    <p className="card-text">{post.body}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = state => {
    return { posts: state.posts }
}
    
  
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
        GetPosts
    },
    dispatch
  );
  
export default connect(
mapStateToProps,
mapDispatchToProps
)(Posts)