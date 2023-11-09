import './Index.scss'

const Button = ({ text, icon, loading, click, type, disabled }) => {
    return (
        <button
            className='btn'
            disabled={disabled || loading}
            onClick={click}
            type={type}
        >
            {text}{icon}
        </button>
    )
}

const Container = ({children}) =>{
    return(
        <div className='container'>
            {children}
        </div>
    )
}

export { Button, Container }