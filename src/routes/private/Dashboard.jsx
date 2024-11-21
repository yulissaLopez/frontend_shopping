import { useEffect, useState } from "react";
import { URL_BACKEND } from "../../lib/constants";
import { saveTokensToStorage } from "../../lib/utils/handleTokens";
import { useCallback } from "react";

export default function Dashboard() {

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Llamar al backend a la ruta usuarios-productos

  const fetchData = useCallback(async () => {
    const token = localStorage.getItem("ACCESS_TOKEN")
    try {
      const response = await fetch(`${URL_BACKEND}productos/usu-prod/`, {
        method: 'GET',
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
        },
      })

      if(!response.ok){
        throw new Error(`request error ${response.statusText}`);
      }

      const result = await response.json()
      setData(result)
      console.log(result)
    } catch (error) {
      console.log(error)
    } finally{
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (loading) return <p>Cargando datos ...</p>

  if (error) return <p>Error al cargar los datos: {error}</p>;


  return (
    <div className="overflow-x-auto">
      <h3>Listado de Compras del cliente</h3>
      <table className="table-auto border-collapse border border-gray-300 w-full text-sm text-left" border="1">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2 text-gray-600">Fecha</th>
            <th className="border border-gray-300 px-4 py-2 text-gray-600">Cantidad Producto</th>
            <th className="border border-gray-300 px-4 py-2 text-gray-600">Cliente</th>
            <th className="border border-gray-300 px-4 py-2 text-gray-600">Producto</th>
            <th className="border border-gray-300 px-4 py-2 text-gray-600">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr className="hover:bg-gray-50" key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.fecha_venta}</td>
              <td className="border border-gray-300 px-4 py-2">{item.cantidad_producto}</td>
              <td className="border border-gray-300 px-4 py-2">{item.cliente}</td>
              <td className="border border-gray-300 px-4 py-2">{item.producto}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Editar</button>
              </td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

