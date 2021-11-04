// import React, {useState} from 'react';
// //  import "../../styles/components/input.scss";
// //  import Logo from "../../assets/credity-logo.svg";
// import Button from './button';
// // import BurgerMenu from '../../assets/bx-menu.svg'
// import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';

// export const TopNavbar = () => {
//   const [isTogld, setIsTogld] = useState(false);
//   const history = useHistory();
//   const path = history.location.pathname;
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//     <a class="navbar-brand" href="#">Navbar</a>
//     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" id="navbarNav">
//       <ul class="navbar-nav">
//         <li class="nav-item active">
//           <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Features</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href="#">Pricing</a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link disabled" href="#">Disabled</a>
//         </li>
//       </ul>
//     </div>
//   </nav>
//   );
// }

// export default TopNavbar;

import React from 'react'
import {
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	NavLink,
	Nav,
	NavbarBrand
} from 'reactstrap';

function App() {

	// Collpase isOpen State
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div >
			<Navbar expand="md" light color="light">
				<NavbarBrand href="/">Brand</NavbarBrand>
				<NavbarToggler onClick={() => { setIsOpen(!isOpen) }} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="mr-auto" navbar>
						<NavItem>
							<NavLink href="/">Recipes</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/login">Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/signup">Signup</NavLink>
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default App;

