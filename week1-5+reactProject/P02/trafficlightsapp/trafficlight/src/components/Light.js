import '../index.css'

const Light = ({ color, active }) => (<div >
    <div
    className="light"
    style={{ backgroundColor: color, opacity: active ? 1 : 0.3 }} /></div>
    
    )

export default Light;