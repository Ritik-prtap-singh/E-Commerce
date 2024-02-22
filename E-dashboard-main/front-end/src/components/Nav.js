import React from 'react';
import { Link, useNavigate} from 'react-router-dom';

const Nav=()=>{

    const auth= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = () =>{
        localStorage.clear();
        navigate('/signup')
    }
    
    return(
        <div>
            <img alt="logo" className='logo' 
            src='data:image/png;base64,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' />
            
        

        
            
            
            { auth ? <ul className="nav-ul">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Product</Link></li>
                {/* <li><Link to="/profile">Profile</Link></li> */}
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>


            </ul>
            :
            <ul className="nav-ul nav-right">
                <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Login</Link></li>

            </ul>
}
        </div>
    )

}

export default Nav