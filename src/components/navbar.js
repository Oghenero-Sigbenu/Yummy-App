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
	const isAuth = sessionStorage.getItem('isLogin');
	// Collpase isOpen State
	const [isOpen, setIsOpen] = React.useState(false);
	const [, refresh] = React.useState(false);

	const logout = () => {
        sessionStorage.clear();
		refresh()
    }
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
						
						{!isAuth ? 
						<>
						<NavItem>
							<NavLink href="/login">Login</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/signup">Signup</NavLink>
						</NavItem>
						</>
						:
						<>
						<NavItem>
							<NavLink href="#" onClick={logout}>Logout</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href="/create">Create Recipe</NavLink>
						</NavItem>
						</>
}
					</Nav>
				</Collapse>
			</Navbar>
		</div >
	);
}

export default App;

