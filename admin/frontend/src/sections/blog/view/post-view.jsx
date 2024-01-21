import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import {useState, useEffect} from "react";

import PostCard from '../post-card';

import {postsDataSource} from "../../../core/remoteDataSource/post";

// ----------------------------------------------------------------------

export default function BlogView() {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    const response = await postsDataSource.getAllPosts();
    setPosts(response.data)
    console.log('====================================');
    console.log(response.data);
    console.log('====================================');
  }
  
  useEffect(() => {
    getAllPosts()
  }, []);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Posts</Typography>
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post._id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
