
import { Button, Card } from 'keep-react'
const Election = () => {
    return (
        <div>
            <h1 className="text-4xl font-bold text-center capitalize">election commission</h1>
            <div className='flex justify-center items-center my-4'>
                <Card className='shadow-xl bg-white w-full'>
                    <Card.Header className='flex justify-center'>
                        <img src="https://i.ibb.co/2t3VhPR/Simple-Profile-Photo-Instagram-Post-1.png" alt="" className=' h-[200px]' />
                    </Card.Header>
                    <Card.Content className="space-y-3">
                        <Card.Title className='text-center text-lg capitalize'>Chief Election Commissioner</Card.Title>
                    </Card.Content>
                </Card>

            </div>
            <h1 className='text-4xl font-bold text-center capitalize'>Election Commissioner</h1>
            <div className='flex  flex-col  lg:flex-row gap-5 justify-center items-center'>
                <img src="https://i.ibb.co/WVBGQ86/Simple-Profile-Photo-Instagram-Post-1-1.png" alt="" />
                <img src="https://i.ibb.co/NY49WmL/Simple-Profile-Photo-Instagram-Post-5-1.png" alt="" />
                <img src="https://i.ibb.co/px6HKpL/Simple-Profile-Photo-Instagram-Post-2-1.png" alt="" />
                <img src="https://i.ibb.co/BnycPjf/Simple-Profile-Photo-Instagram-Post-3-1.png" alt="" />
            </div>

            <div className='flex justify-center'>
                <div className="md:container  my-5 w-screen mx-auto  bg-[url(https://i.ibb.co/PNk0vSs/Subscribe.png)] bg-no-repeat bg-contain   h-[340px] rounded-b-2xl ">

                    <h1 className='text-xs md:text-xl md:font-bold capitalize text-center mt-8'>Cast Your Vote TodaySubscribe for the <br /> Latest Election News and Updates</h1>
                    <div className='flex items-center  mt-10 space-x-4 md:space-x-0 justify-center'>
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder='Enter an email'
                            className='px-7 border md:border-none relative py-4 w-full md:w-1/2 text-black rounded-3xl'
                            style={{ "::placeholder": { color: "red" } }}
                        />
                        <div className='flex justify-end  mb-11 mt-10 md:mt-0 '>
                            <Button size="sm" className='bg-[#8188D9] mr-3 md:absolute rounded-3xl'>
                                Subscribe Now
                            </Button>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    );
};

export default Election;