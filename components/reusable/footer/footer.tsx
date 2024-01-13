import Link from "next/link";

const NavFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<div className="fixed bottom-0 items-center text-sm pb-4 m-auto justify-center">
			<Link
				target="_blank"
				href="https://thegrtnx.com.ng">
				&copy; Abolade Greatness {currentYear} -{" "}
				<Link
					target="_blank"
					href="https://github.com/thegrtnx/internet-speed-checker">
					Licensed under MIT
				</Link>
			</Link>
		</div>
	);
};

export default NavFooter;
