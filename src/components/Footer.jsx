import React from 'react'

const Footer = () => {
    return (
        <footer className='w-full z-10 bg-slate-600 absolute bottom-0 border-t border-slate-400 text-white font-palanquin glass px-4 pt-1  hover:text-slate-200 transition  hover:border-slate-300 '>
            <div className='flex justify-between items-center'>
                <div className='flex items-center justify-start '>
                    <div className='gap-2 flex  text-slate-300 justify-start items-center mr-2  hover:text-slate-100 '>


                        <i className="fa-regular fa-copyright text-sm"></i>
                        <p className='font-medium text-sm font-average '> Utkarsh Tiwari </p>
                        <p className='text-xl text-white'>|</p>

                    </div>
                    <div className='gap-3 text-xl text-slate-300 flex justify-start items-start cursor-pointer'>

                        <i className="fa-brands fa-instagram hover:text-blue-500" target="_blank" href="https://www.instagram.com/iam_utkarshtiwari/"></i>
                        <i className="fa-brands fa-github hover:text-blue-500" target="_blank" href="https://github.com/Developer-Utkarsh/" ></i>
                        <i className="fa-brands fa-linkedin hover:text-blue-500" target="_blank" href="https://www.linkedin.com/in/developerutkarsh/" ></i>
                    </div>
                </div>

                <div className='flex justify-center items-center gap-2'>
                    <p className='text-slate-100 font-semibold text-md font-average tracking-wider'>Download : </p>
                    <div className='flex justify-center items-center gap-4 text-xl text-slate-300 cursor-pointer'>
                        <i className="fa-brands fa-android hover:text-blue-500"></i>
                        <i className="fa-brands fa-windows hover:text-blue-500"></i>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer
