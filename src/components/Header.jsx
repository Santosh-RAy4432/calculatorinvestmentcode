import '.././index.css';
import logo from '../assets/investment-calculator-logo.png';

export default function Header(){
    return (
<header id='header'>
<img src={logo} alt='pictures of bag'/>
<h1>Investment</h1>
</header>
    );
}