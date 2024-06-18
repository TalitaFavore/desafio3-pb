import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../services/connectionFirebase";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleAuthAction = async () => {
    if (isLogin) {
      try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log("User Info: ", userCredential.user);
        navigate("/");
      } catch (error) {
        console.error("Error during login: ", error);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User created: ", userCredential.user);
        navigate("/");
      } catch (error) {
        console.error("Error during signup: ", error);
      }
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      console.log("User Info: ", userCredential.user);
      navigate("/");
    } catch (error) {
      console.error("Error during Google login: ", error);
    }
  };

  return (
    <body className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row justify-center items-center rounded-xl bg-secondary m-4 w-full md:w-2/3 lg:w-1/2 p-6 md:p-10 gap-6 md:gap-14">
        <h1 className="text-3xl font-bold w-full md:w-1/3 mb-6 text-black2 text-center md:text-left">
          Descubra conforto! Entre agora!
        </h1>
        <div className="w-full md:w-2/3">
          <p>Email:</p>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <p>Senha:</p>
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border border-gray-300 rounded-md w-full"
          />
          <div className="flex flex-row gap-2 md:justify-between">
            <button
              onClick={handleGoogleLogin}
              className="bg-red-500 text-white px-2 md:px-4 py-2 rounded-md mb-4 w-1/3 md:w-auto"
            >
              Google
            </button>

            <button className="bg-blue-500 text-white px-2 md:px-4 py-2 rounded-md mb-4 w-1/3 md:w-auto">
              Facebook
            </button>

            <button
              onClick={handleAuthAction}
              className="bg-primary text-white px-2 md:px-4 py-2 rounded-md mb-4 w-1/3 md:w-auto"
            >
              {isLogin ? "Entrar" : "Cadastrar"}
            </button>
          </div>
          <p className="text-center mt-4">
            {isLogin ? "Não tem conta? " : "Já tem conta? "}
            <span
              className="text-primary cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Cadastre-se" : "Voltar ao Login"}
            </span>
          </p>
        </div>
      </div>
    </body>
  );
};

export default Login;
