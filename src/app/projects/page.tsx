import Link from 'next/link'
import BackImage from '../mainback.jpg'

export default function Projects() {
    return (
        <main className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${BackImage.src})` }}>
            <div className=" flex flex-col justify-center items-center">
                <br />
                <h1 className="text-gray-400 text-9xl font-bold mt-12 w-1/3">Projects</h1>
            </div>
            <div className=" flex flex-col justify-center items-center">
                <div>
                    <br />
                    <br />
                    <br />
                    <h1 className="text-blue-500 text-4xl font-bold w-1/3 ml-64">TypeScript:</h1><br />
                    <div className="flex  justify-center  ">
                        <div>
                            <p className='text-2xl text-white'>01 : Cli Based Simple Calculator</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/Simple-Calculator-Using-Inquirer/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>02 : Number Guessing Game</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/CLI-based-number-Guessing-Game/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>03 : ATM Machine</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/ATM-Machine-Code-Using-Inquirer/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>04 : Todo List App</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/To-Do-List/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>05 : Currency Convertor</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/Currency-Convertor-Program/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>
                        </div>
                        <div className='ml-12'>
                            <p className='text-2xl text-white '>06 : Word Counter</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/Word-Counter-Project/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>07 : Student Management System</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/Student-Management-System/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>08 : Text Based Adventure Game</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/Text-Based-Adventure-Game/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>09 : Quiz</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/Quiz/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>

                            <p className='text-2xl text-white mt-12'>10 : Countdown Timer</p>
                            <Link href="https://github.com/Hasnain-Software-Developer/Countdown-Timer/blob/main/main.ts" target='_blank' className=' text-purple-500' >Click Here </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    )
}