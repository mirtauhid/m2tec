import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'react-bootstrap';
import Products from '../Products/Products';

const Page = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      if (search != []) {
        const res = await axios.get('../../Data/data.json');
        const result = res.data.map(item => item.filter(item.name==search));
      setPosts(result);
      setLoading(false)
      }
      else {
        const res = await axios.get('../../Data/data.json');
      setPosts(res.data);
      setLoading(false);
      }
    };

    

    fetchPosts();
  }, []);

  


  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5'>
      
      <Products posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
   </div>
  );
};

export default Page;