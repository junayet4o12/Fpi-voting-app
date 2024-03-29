import { Button, Card } from 'keep-react'

const Mission = () => {
    return (
        <div className="mt-10">
            <div className="space-y-3">
                <h1 className="text-4xl text-center capitalize font-extrabold">Our mission & vision</h1>
                <p className="text-center text-gray-500">Create many political success stories with Winning Strategies and <br /> Innovative Campaign Management.</p>
            </div>

            <div className='container mx-auto flex flex-col md:flex-row   items-center justify-center gap-20 my-6'>
                <div>
                    <Card className=''>
                        <Card.Header>
                            <img src="https://i.ibb.co/d0SR56L/240-F-438396100-XSn1-Dgo-RYk9-D0k-Tw-Hq-TXeg-Fonwy-BHthe-1.png" alt="" className='w-[600px] ' />
                        </Card.Header>
                        <Card.Content className="space-y-3">
                            <Card.Title>Goal</Card.Title>
                            <Card.Description>
                                Online Voting is a web-based voting system that will help you manage your elections easily and securely.
                            </Card.Description>
                            <Button size="sm" className='bg-[#8188D9]'>
                                Read more
                            </Button>
                        </Card.Content>
                    </Card>

                </div>
                <div>
                    <Card>
                        <Card.Header>
                            <img src="https://i.ibb.co/gry016T/lead-1562156645185-1.png" alt="" className='w-[600px] h-[200px] ' />
                        </Card.Header>
                        <Card.Content className="space-y-3">
                            <Card.Title>Mission</Card.Title>
                            <Card.Description>
                                Online voting tools and online election voting systems help you make important decisions.
                            </Card.Description>
                            <Button size="sm" className='bg-[#8188D9]'>
                                Read more
                            </Button>
                        </Card.Content>
                    </Card>



                </div>
                <div>
                    <Card>
                        <Card.Header>
                            <img src="https://i.ibb.co/dMv8fzy/Goal-A-A-webp.png" alt="" className='w-[600px] h-[200px]' />
                        </Card.Header>
                        <Card.Content className="space-y-3">
                            <Card.Title>Vision</Card.Title>
                            <Card.Description>
                                In todays fast-changing world, technology is changing the way we vote.
                            </Card.Description>
                            <Button size="sm" className='bg-[#8188D9]'>
                                Read more
                            </Button>
                        </Card.Content>
                    </Card>


                </div>
            </div>

        </div>
    );
};

export default Mission;