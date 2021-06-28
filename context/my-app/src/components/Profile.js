import React, {  useState } from 'react'
import { useUser } from '../context/UserContext';

function Profile() {
    const {user, setUser}= useUser()
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setUser({id: 1, username: "umityasar", bio: "lorem ipsum merhaba"})
            setLoading(false)
        }, 1500);
    }

    const handleLogOut = () => {
        setUser(null)
    }
    return (
        <div>
            {
                !user && <button onClick={handleLogin}>{loading ? "loading..." : "Login"}</button>

            }
           <code>{JSON.stringify(user)}</code>

           <br></br>
           <br></br>
           {
               user && <button onClick={handleLogOut}>Logout</button>
           }
        </div>
    )
}

export default Profile
