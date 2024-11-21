export default function Input({ label, type, name }) {
  return (
    <label className="block text-sm font-medium text-gray-700">
        <span>{label}</span>
        <input
          type={type}
          name={name}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
          required
          />
    </label>
  )
}
