import { Post } from "../types/Post";
import { Link } from "react-router-dom";

interface IProps {
	post: Post;
}

const Card: React.FC<IProps> = ({ post }) => {
	return (
		<div className='card'>
			<Link
				className='link'
				to={`/post/${post.id}`}>
				<span className='title'>
					{post.title}
				</span>
				<img
					src={post.img}
					alt=''
					className='img'
				/>
				<p className='desc'>{post.desc}</p>
				<button className='cardButton'>
					Read More
				</button>
			</Link>
		</div>
	);
};

export default Card;
