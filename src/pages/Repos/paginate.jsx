import React, { useState, useEffect } from "react";

const paginate = ({ repos, limit, lastPage, active, paginate }) => {
	const [point, setPoint] = useState([]);
	const [tpoint, settPoint] = useState([]);

	useEffect(() => {
		const pageNumbers = [];
		for (let i = 1; i <= Math.ceil(repos.length / limit); i++) {
			pageNumbers.push(i);
		}
		setPoint(pageNumbers);
		settPoint(pageNumbers.slice(0, 5));
	}, [repos, limit]);

	return (
		<>
			<ul className='pagination'>
				{point.map((item) => {
					return (
						<li
							key={item}
							className={`page-item ${active === item ? "active" : ""}`}
							onClick={() => {
								paginate(item);
							}}>
							<p className='page-link btn'>{item}</p>
						</li>
					);
				})}
			</ul>
		</>
	);
};

export default React.memo(paginate);
