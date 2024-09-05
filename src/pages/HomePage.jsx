import ButtonReg from "../components/general/ButtonReg"

const Home = () => {
    return (
        <div className=" flex flex-col p-11 gap-4">
            <ButtonReg type="button" buttonStyle='bg-medium-soft-green text-white' buttonText="Iniciar Sesión" />
            <ButtonReg type="button" buttonStyle='bg-white text-gray border-2 border-soft-green' buttonText="Iniciar Sesión con Google"  />
            
        </div>
    )
}

export default Home