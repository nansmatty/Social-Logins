import Card from "../components/Card";
import { posts } from "../data";

const HomePage = () => {
	return (
		<div className='home'>
			{posts.map((post) => (
				<Card key={post.id} post={post} />
			))}
		</div>
	);
};

export default HomePage;
