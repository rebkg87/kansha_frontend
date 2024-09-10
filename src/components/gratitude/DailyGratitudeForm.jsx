

const DailyGratitudeForm = ({onClick}) => {
    return (
        <div className='w-full h-screen bg-dark-green p-11'>
            <h5 className=' font-bold text-h5 text-soft-green'>Agradecimiento Diario</h5>
            <p className=' w-48 text-super-light-green text-xs'>Escribe aquí las 3 cosas por las que
                quieres agradecer hoy</p>
            <div className=" my-7 bg-super-light-green justify-center items-center flex rounded-full border-2 border-soft-green shadow-2xl">
                <input className='w-full h-10 flex-1 border-0 outline-none bg-transparent pl-6 pr-2 placeholder:text-[10px] text-medium-green' type='text' placeholder='Agradezco por...' />
                <button onClick={onClick} className="border-none rounded-full bg-medium-soft-green w-10 h-10 font-medium text-h4 text-soft-green cursor-pointer"> + </button>
            </div>

            {/*toDo list*/}


        </div>
    )
}

export default DailyGratitudeForm