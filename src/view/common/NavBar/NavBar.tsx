import {Component} from "react";
import logo from '../../../images/mrcleanlogo (2).png'
import '../NavBar/NavBar.css'

export class NavBar extends Component {
    render() {
        return (
            <div className='navBar'>
                <div><img className='navLogo' src={logo} alt=""/></div>
                {/*<ul className="list-none flex mt-1">*/}
                {/*    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">*/}
                {/*        MainContent*/}
                {/*    </li>*/}
                {/*    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">About Us</li>*/}
                {/*    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">Services*/}
                {/*    </li>*/}
                {/*    <li className="mr-2 text-[11px] text-[#e6f0e6] hover:text-green-400">Contact Us*/}
                {/*    </li>*/}
                {/*    */}
                {/*</ul>*/}
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>packages</li>
                    <li>contact Us</li>

                </ul>
                <button className='createAccountBtn'>Create Account</button>
                <button className='signUpInBtn'>SignUp/Sign In</button>
            </div>

        );
    }
}