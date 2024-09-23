import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Projects() {
    return (
        <main className='bg-cover bg-center bg-slate-50 h-auto'>
            <div className="flex flex-col justify-center items-center px-4">
                <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mt-12 text-center">
                    Projects
                </h1>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 text-center">
                    TypeScript:
                </h2>
            </div>

            <div className="px-4 py-8">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* First card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>01 : Simple Calculator</div></CardTitle>
                            <CardDescription>
                                <div>CLI Based Simple Calculator Using Inquirer</div>
                                <ul className="list-disc pl-5">
                                    <li>Addition</li>
                                    <li>Subtraction</li>
                                    <li>Multiplication</li>
                                    <li>Division</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx simple-calculator-with-hasnain-ali</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub?tab=repositories" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Second Card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>02 : Number Guessing Game</div></CardTitle>
                            <CardDescription>
                                <div>Console Interactive Number Guessing Game</div>
                                <div>Guess Any Number Under 10 And Try Your Luck</div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx guess-the-number-srz</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/Number-Guessing-Game/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Third Card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>03 : ATM Machine</div></CardTitle>
                            <CardDescription>
                                <ul className="list-disc pl-5">
                                    <li>Cash Withdraw</li>
                                    <li>Balance Inquiry</li>
                                    <li>Fast Cash</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx atm-code-with-hasnain-srz</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/ATM-Machine/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Fourth Card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>04 : Todo List</div></CardTitle>
                            <CardDescription>
                                <div>Manage Daily Todos</div>
                                <ul className="list-disc pl-5">
                                    <li>Add Task</li>
                                    <li>Delete Task</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx to-do-list-h-a-a</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/To-Do-List/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Fifth Card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>05 : Currency Converter</div></CardTitle>
                            <CardDescription>
                                <div>Convert Any Amount In Given List Currencies</div>
                                <ul className="list-disc pl-5">
                                    <li>USD</li>
                                    <li>EUR</li>
                                    <li>POUNDS</li>
                                    <li>KUAITIDINAR</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx currency_conertor_h_a_a</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/To-Do-List/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Sixth card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>06 : Word Counter</div></CardTitle>
                            <CardDescription><div>Type Any Sentence And Count How Many Words You Write</div></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx word-counter-h-a-a</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/Word-Counter/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>

                {/* Second Row of Cards */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                    {/* Seventh Card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>07 : Student Management System</div></CardTitle>
                            <CardDescription>
                                <div>Designed to Efficiently Manage Student Data and Academic Records</div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx student-management-system-h-a-a</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/Student-Management-System-/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Eighth Card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>08 : Text Based Adventure Game</div></CardTitle>
                            <CardDescription>
                                <div>A text-based adventure game is an interactive game where players navigate a fictional world through text commands.</div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx text-based-adventure-game-h-a-a</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/Text-Based-Adventure-Game/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Ninth Card */}
                    <Card className='h-auto w-full'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>09 : Quiz On Cars</div></CardTitle>
                            <CardDescription>
                                <div>Multiple Choice Questions testing your knowledge about cars. You have 10 questions—answer them and get immediate feedback!</div>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx quiz-h-a-a</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/Quiz/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Tenth Card */}
                    <Card className='h-auto w-full lg:ml-[635px] sm:ml-[10px]'>
                        <CardHeader>
                            <CardTitle><div className='text-xl sm:text-2xl'>10 : Countdown Timer</div></CardTitle>
                            <CardDescription>
                                <div>Time Management</div>
                                <ul className="list-disc pl-5">
                                    <li>Minutes</li>
                                    <li>Seconds</li>
                                </ul>
                                <div>Functionality</div>
                                <ul className="list-disc pl-5">
                                    <li>Start Timer</li>
                                    <li>Reset</li>
                                </ul>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div>Npm Command To Run Project:</div>
                            <div>npx countdown-timer-h-a</div>
                        </CardContent>
                        <CardFooter>
                            <Link href="https://github.com/HasnainCodeHub/Countdown-Timer/blob/main/main.ts" target="_blank">
                                <button className="bg-black rounded-xl h-12 sm:h-14 text-white text-lg sm:text-2xl font-serif p-2 transition-transform duration-300 hover:scale-110">
                                    Open Project
                                </button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </main>
    )
}
