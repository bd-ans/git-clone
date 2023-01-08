import React, { useContext } from "react";
import { context } from "../../context/context";
import "./index.css";

const FoundedUsersList = () => {
	const { values } = useContext(context);

	const foundUsers = values.foundUsers;
	const setMActive = values.setMActive;

	return (
		<>
			<div className='col-12 col-md-8 col-lg-9'>
				<ul className='followers-list list-unstyled p-0 m-0'>
					{foundUsers.length > 0 ? (
						foundUsers.map((foundedUserM) => {
							return (
								<li
									className='border-bottom py-4 d-flex justify-content-between align-items-start'
									key={foundedUserM.id}>
									<div className='item-left d-flex align-items-center gap-3'>
										<img
											className='rounded-circle'
											src={foundedUserM.avatar_url}
											width='50'
											height='50'></img>
										<div className='item-info'>
											<a
												className='item-link text-decoration-none text-dark'
												href={foundedUserM.html_url}
												target='_blank'
												to='/user'>
												{foundedUserM.login}
											</a>
										</div>
									</div>
									<button className='follow-btn btn btn-outline-light bg-light text-dark border rounded-3'>
										Follow
									</button>
								</li>
							);
						})
					) : (
						<div className='d-flex justify-content-center'>
							<div className='text-center mt-5'>
								<i className='bi bi-people fs-3'></i>
								<h2 className='fs-4'>No users found</h2>
								<p className='fs-6'>
									<a
										className='text-decoration-none'
										href='https://docs.github.com/ru/get-started/quickstart/be-social'
										target={"_blank"}>
										Learn more
									</a>{" "}
									about being social on GitHub.
								</p>
							</div>
						</div>
					)}
				</ul>
			</div>
		</>
	);
};

export default FoundedUsersList;