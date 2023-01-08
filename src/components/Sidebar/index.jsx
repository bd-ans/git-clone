import React, { useContext } from "react";
import { context } from "../../context/context";
import { NavLink } from "react-router-dom";
import "./index.css";

const index = () => {
	const { values } = useContext(context);

	const userInfo = values.userInfo;
	const setMActive = values.setMActive;
	return (
		<>
			<div className='sidebar d-flex flex-column align-items-start col-12 col-md-4 col-lg-3 gx-0 px-2 position-relative'>
				<div className='profile-info'>
					<div className='sidebar-img position-relative'>
						<img
							className='profile-img border border-2 rounded-circle'
							src={userInfo.avatar_url}
							width='280'
							height='280'></img>
						<button className='smile-btn d-flex justify-content-strt align-items-center btn btn-light border'>
							<i className='bi bi-cloud-drizzle-fill fs-6'></i>
							<p className='btn-text d-none m-0 ms-1'>la pioggia</p>
						</button>
					</div>
					<div className='mt-3 mb-3'>
						<p className='h4 m-0 mb-1'>{userInfo.name}</p>
						<p className='h5 text-secondary fw-normal m-0'>{userInfo.login}</p>
					</div>
				</div>
				<button className='status-btn btn btn-light d-none justify-content-start align-items-center w-100 border rounded-3 mb-3'>
					<i className='bi bi-cloud-drizzle-fill fs-6'></i>
					<p className='btn-text m-0 ms-1'>la pioggia</p>
				</button>
				<p className='text-dark fw-normal m-0 mb-2'>{userInfo.bio}</p>
				<button className='edit-btn btn btn-light d-block w-100 border rounded-3 mb-3'>
					Edit profile
				</button>
				<div className=''>
					<NavLink
						className='followers-link text-decoration-none text-dark'
						to='/followers'
						onClick={() => setMActive("followers")}>
						<i className='bi bi-people me-1'></i>
						{userInfo.followers} followers
					</NavLink>
					{` · `}
					<NavLink
						onClick={() => setMActive("following")}
						className='followers-link text-decoration-none text-dark'
						to='/following'>
						{userInfo.following} following
					</NavLink>
				</div>
			</div>
		</>
	);
};

export default index;
