import { useState } from "react";
import { useContext } from "react";
import { StoreCardContext } from "../../items/storeItems/StoreCardContext";
function Login() {
  const { username, email, password, openPage } = useContext(StoreCardContext);
  const [warning, setWarning] = useState("");
  const [logged, setLogged] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState("");
  // Check if user and pass exist
  const allGood =
    (username.includes(userEmail) || email.includes(userEmail)) &&
    password.includes(pass);
  // Handle wrong password
  const wrongPass =
    (username.includes(userEmail) || email.includes(userEmail)) &&
    !password.includes(pass);
  // Handle wrong user/email
  const wrongUserEmail =
    (!username.includes(userEmail) || !email.includes(userEmail)) &&
    password.includes(pass);
  // Handle username/email and password empty
  const wrongAll =
    (!username.includes(userEmail) || !email.includes(userEmail)) &&
    !password.includes(pass);
  // Handle user/email empty
  const noUserEmail = userEmail.length === 0;
  // Handle password empty
  const noPass = pass.length === 0;

  const checkLogin = (e) => {
    e.preventDefault();

    if (allGood) {
      setLogged(true);
      setWarning("");
      openPage();
    } else if (noUserEmail) {
      setWarning("Nome ou Email é obrigatório");
    } else if (noPass) {
      setWarning("Senha é Obrigatória");
    } else if (wrongPass) {
      setWarning("Senha incorreta");
    } else if (wrongUserEmail) {
      setWarning("Usuario ou Email inválidos");
    } else if (wrongAll) {
      setWarning("Nome ou Email e Senha errada");
    } else {
      setWarning("Algo deu errado!");
    }
  };

  return (
    <div className=" mt-10">
      <div className="absolute text-red-400 text-xs underline top-[180px]">
        {warning}
      </div>
      <form
        name="login"
        onSubmit={checkLogin}
        className="flex gap-3 flex-col w-80 font-most"
      >
        <label htmlFor="userEmail">Usuário ou e-mail</label>
        <input
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
          className="bg-gray-100 rounded border-[1px] h-9 p-1 border-gray-300 shadow-inner"
          id="userEmail"
          type="text"
        ></input>
        <label htmlFor="userPassword">Senha</label>
        <input
          onChange={(e) => {
            setPass(e.target.value);
          }}
          className="bg-gray-100 rounded border-[1px] h-9 p-1 border-gray-300 shadow-inner"
          id="userPassword"
          type="password"
        ></input>
        <div className="flex item-center justify-between">
          <div className="flex flex-row-reverse items-center gap-1">
            <label className="text-sm">Lembrar...</label>
            <input type="checkbox"></input>
          </div>
          <a href="/" className="text-sm italic">
            Esqueceu a senha?
          </a>
        </div>
        <div className="mt-4 w-80 flex justify-center">
          <button
            type="submit"
            className="bg-black flex gap-2 w-full justify-center items-center h-10 text-white rounded-full px-8 mb-10 py-2 font-most text-xs font-semibold"
          >
            ENTRAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
