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
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Iniciar</h1>
        <form onSubmit={handleSubmit}>
          <Input label={"Usuario"} type={"text"} name={"username"} />
          <Input label={"Contraseña"} type={"password"} name={"password"} />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">Ingresar bb</button>
        </form>
      </div>
    </div>

  )
}
