import { Post } from "../types/Post";

interface IProps {
	post: Post;
}

const Card: React.FC<IProps> = ({ post }) => {
	return (
		<div>
			<h1>Card</h1>
		</div>
	);
};

export default Card;
