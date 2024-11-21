export default function Input({ label, type, name }) {
  return (
    <label>
        <span>{label}</span>
        <input type={type} name={name}/>
    </label>
  )
}
