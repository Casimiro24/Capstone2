// src/components/LoginForm.js
import React, { useState } from 'react';
import loginImage from './images/login.jpeg';
// import styles from './login.module.css';  // Pastikan Anda mengimpor file CSS Anda

const Login = () => {
    const [nim, setNim] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        window.location.href='/Dashboard';
        e.preventDefault();
        // Logika untuk mengirim data login dapat ditambahkan di sini
        console.log('NIM:', nim);
        console.log('Password:', password);
        // Contoh pengiriman data ke server
        // fetch('/login', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ nim, password }),
        // });
    };

    return (
        <div>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                    body {
                        font-family: "Poppins", sans-serif;
                        background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0)), url('images/v1_4.png');
                        background-size: cover;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                                    
                    .login-container {
                        background-color: #ffffff;
                        border-radius: 20px;
                        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        width: 1000px;
                        height: 500px;
                    }
                                    
                    .login-container .form{
                        display: flex;
                    }
                    .login-container .form .gambar{
                        background-image: url(${loginImage});
                        border-radius: 20px 0 0 20px;
                        background-size: cover;
                        padding-right : 500px;
                        width: 1000px;
                        height: 500px;
                    }
                                    
                    .login{
                        margin-left: 50px;
                    }
                    .login h2{
                        font-size: 50px;
                    }
                                    
                    .form-group {
                        margin-bottom: 15px;
                    }
                                    
                    label {
                        display: block;
                        margin-bottom: 5px;
                    }
                                    
                    input {
                        width: 94%;
                        padding: 10px;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                    }
                                    
                    input:focus {
                        border-color: #1E6262;
                        outline: none;
                    }
                                    
                    .login-btn {
                        width: 350px;
                        padding: 10px;
                        background-color: #1E6262;
                        color: white;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                                    
                    .login-btn:hover {
                        background-color: #B4F1F1;
                    }
                                    
                    .material-icons{
                        margin-right: 10px;
                        margin-top: 10px;
                    }
                `}
            </style>
        <div className="login-container">
            <div className="form">
                <div className="gambar"></div>
                <form className="login" onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div className="form-group">
                        <label htmlFor="nim">NIM</label>
                        <input
                            type="text"
                            id="nim"
                            name="nim"
                            value={nim}
                            onChange={(e) => setNim(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>
                <a href="/">
                    <span className="material-icons" style={{ fontSize: '30px', fontWeight: 'bold', color: '#1E6262' }}>
                        close
                    </span>
                </a>
            </div>
        </div>
        </div>
    );
};

export default Login;