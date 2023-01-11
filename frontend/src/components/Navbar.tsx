import React from "react";

const Navbar = () => {
	return (
		<div className='navbar'>
			<span className='logo'>Auth-Socials</span>
			<ul className='list'>
				<li className='listItem'>
					<img
						src='https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
						className='avatar'
						alt='avatar'
					/>
				</li>
				<li className='listItem'>
					Narayan Maity
				</li>
				<li className='listItem'>Logout</li>
			</ul>
		</div>
	);
};

export default Navbar;
