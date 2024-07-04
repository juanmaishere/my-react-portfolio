import { useEffect } from 'react';
import '../styles/headerstyle.css'

function Header() {
	useEffect(() => {
		window.addEventListener('scroll', () => {
			const header = document.querySelector('header');
			if (window.scrollY > 0) {
			  header.classList.add('scrolled');
			} else {
			  header.classList.remove('scrolled');
			}
		  });
	
	
	  }, []);
	
    return (
        
<header id="head">
	<nav>
		<div class="internal-links">
			<a href="#head">INICIO</a>
  			<a href="#servicios">SOBRE MI</a>
			<a href="#galeria">PROYECTOS</a>
  			<a href="#contacto">CONTACTO</a>
		</div>
	
		
	</nav>
	
</header>
    )
}


export default Header;