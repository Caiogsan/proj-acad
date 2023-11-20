import { useState } from "react";
import { useContext } from "react";
import { StoreCardContext } from "../../data/StoreCardContext";

function Register() {
  const { username, email, postRegister } = useContext(StoreCardContext);
  const [warning, setWarning] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const usernameOk = username.includes(formData.username);
  const emailOk = email.includes(formData.email);
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (usernameOk) {
      setWarning("Nome de usuário ja existe");
    } else if (emailOk) {
      setWarning("Email ja existe");
    } else {
      try {
        const formDataJSON = JSON.stringify(formData);

        const response = await postRegister(formDataJSON);
        setWarning("Registrado");
        window.location.reload(true);
      } catch (error) {
        console.log("error :", error);
      }
    }
  };

  return (
    <div className=" mt-10">
      <div className="absolute text-red-400 text-xs underline top-[180px]">
        {warning}
      </div>
      <form
        name="register"
        onSubmit={handleSubmit}
        className="flex gap-3 flex-col w-80 font-most"
      >
        <label htmlFor="user">Nome de Usuário</label>
        <input
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              username: e.target.value.toLowerCase(),
            });
          }}
          className="bg-gray-100 rounded border-[1px] h-9 p-1 border-gray-300 shadow-inner"
          id="user"
          name="register"
          type="text"
        ></input>
        <label htmlFor="email">Email</label>
        <input
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value.toLowerCase(),
            });
          }}
          className="bg-gray-100 rounded border-[1px] h-9 p-1 border-gray-300 shadow-inner"
          id="email"
          name="register"
          type="email"
        ></input>
        <label htmlFor="password">Senha</label>
        <input
          required
          onChange={(e) => {
            setFormData({
              ...formData,
              password: e.target.value.toLowerCase(),
            });
          }}
          className="bg-gray-100 rounded border-[1px] h-9 p-1 border-gray-300 shadow-inner"
          name="register"
          id="password"
          type="password"
        ></input>
        <div className="mt-4 w-80 flex justify-center">
          <button
            name="register"
            type="submit"
            className="bg-black flex gap-2 w-full justify-center items-center h-10 text-white rounded-full px-8 mb-10 py-2 font-most text-xs font-semibold"
          >
            CADASTRAR
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
