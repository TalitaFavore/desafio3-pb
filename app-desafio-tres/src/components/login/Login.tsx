import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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
    <div>
      <div>
        <h1>
          Descubra conforto! Entre agora!
        </h1>
      </div>
      <div>
        <p>Email:</p>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>Senha:</p>
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleAuthAction}
        >
          {isLogin ? "Entrar" : "Cadastrar"}
        </button>
        <button
          onClick={handleGoogleLogin}
        >
          Login com Google
        </button>
        <p>
          {isLogin
            ? "Não tem conta? "
            : "Já tem conta? "}
          <span
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? "Cadastre-se" : "Voltar ao Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
