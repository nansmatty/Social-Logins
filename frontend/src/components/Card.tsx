import { Post } from "../types/Post";

interface IProps {
	post: Post;
}

const Card: React.FC<IProps> = ({ post }) => {
	return (
		<div className='card'>
			<span className='title'>{post.title}</span>
			<img
				src={post.img}
				alt={post.title}
				className='img'
			/>
			<p className='desc'>{post.desc}</p>
			<button className='cardButton'>
				Read More
			</button>
		</div>
	);
};

export default Card;
