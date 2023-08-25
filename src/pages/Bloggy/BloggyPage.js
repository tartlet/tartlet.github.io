import { useState, useEffect } from 'react'; // Import useEffect
import BlogPostCard from './BlogPostCard';
import { getPosts } from './BlogFunctions';

const BloggyPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [postData, setPostData] = useState([]); 
  // Store issue data in state
  // const AUTH_TOKEN = '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';

  //legacy code: using github as my source of blog data ! keeping because it is my repo!
  // useEffect(() => { 
  //   axios
  //     .get('https://api.github.com/repos/tartlet/tartlet.github.io/issues', {
  //       headers: { 'Authorization': AUTH_TOKEN },
  //     })
  //     .then((response) => {
  //       setIssueData(response.data);
  //       setIsLoaded(true);
  //     })
  //     .catch((error) => {
  //       console.error(error.response.data);
  //     });
  // }, []);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setIsLoaded(true);
      setPostData(posts);
    }
    fetchPosts()
      .catch(console.log("error"))
  }, [])

  return (
    <div>
      {isLoaded ? (
        <div>
          {postData.map((post, index) => (
            <div className="p-4">
              <BlogPostCard 
              post={post.node}/>
            </div>
          ))}
        </div>
      ) : (
        <div className='object-center'>
        <img src="https://cdn.dribbble.com/users/2882885/screenshots/7861928/media/a4c4da396c3da907e7ed9dd0b55e5031.gif" className='mt-4'/>
        <p className='text-2xl text-center mt-6'>Loading...</p>
        </div>
      )}
    </div>
  );
};

export default BloggyPage;
