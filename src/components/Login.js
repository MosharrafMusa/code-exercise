import React, {useState} from 'react'

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const printValues = e => {
        e.preventDefault();
        console.log(username, password);
      };

    return (
        <div>
            <form onSubmit={printValues}>
                <label>
                    Username:
                    <input>
                    value={username};
                    onChange={event=>setUsername(event.target.value)}
                    name="username";
                    type="text"
                    </input>
                </label>
                <br/>
                <label>
                    Password:
                    <input>
                    value={password};
                    onChange={event=>setPassword(event.target.value)}
                    name="password";
                    type="text"
                    </input>
                </label>
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Login
