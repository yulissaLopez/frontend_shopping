import Input from "../../components/Input";
import useAuth from "../../hooks/useAuth";

export default function Login() {
  const { login } = useAuth()
  const handleSubmit = async (evt) => {
    evt.preventDefault()

    const formData = new FormData(evt.target)
    const data = Object.fromEntries(formData)

    login(data)
  }

  return (
    <div>
      <h1>Iniciar</h1>
      <form onSubmit={handleSubmit}>
        <Input label={"Usuario"} type={"text"} name={"username"} />
        <Input label={"Contraseña"} type={"password"} name={"password"} />
        <button type="submit">Ingresar bb</button>
      </form>
    </div>

  )
}
