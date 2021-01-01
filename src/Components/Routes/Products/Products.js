import React from 'react';
import Card from '../Card/Card.js';


const Products = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="container-md">
      <div className="row">
      {posts.map(post => ( <Card key={post.id} post={post}></Card> ))}
    </div>
    </div>
  );
};

export default Products;