import { useLocation } from "react-router-dom";
import { posts } from "../data";
import { Post } from "../types/Post";

const PostPage = () => {
	const location = useLocation();
	const path = location.pathname.split("/")[2];

	const post = posts.find(
		(p) => p.id.toString() === path
	) as Post;

	return (
		<div className='post'>
			<img
				src={post.img}
				alt={post.title}
				className='postImg'
			/>
			<h1 className='postTitle'>{post.title}</h1>
			<p className='postDesc'>{post.desc}</p>
			<p className='postLongDesc'>
				{post.longDesc}
			</p>
		</div>
	);
};

export default PostPage;
