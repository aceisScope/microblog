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
                    {
                        posts.map(post => (
                            <p>{post.body}</p>
                        ))
                    }
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