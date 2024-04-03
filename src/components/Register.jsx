import { useState } from 'react';
import StudentRegister from './StudentRegister';
import TeacherRegister from './TeacherRegister';
import registerImage from "../assets/images/register.png";
import { Tabs } from 'keep-react'


const Register = () => {



    return (

        <section className='grid grid-cols-1 lg:grid-cols-2 justify-items-center  items-center max-w-6xl mx-auto mt-12 gap-x-20'>

            <section>
                <img className=' hidden lg:block  pt-24' src={registerImage} alt="register image" />
            </section>


            <section

                className="md:pt-1 pb-12 w-full"

            >
                <div>
                    <h3 className="text-3xl  xl:text-4xl text-center font-bold  pb-4 pt-12">
                        <span className="text-[#7f87df] tracking-widest">Registration </span>
                    </h3>



                    <Tabs activeLabel='student'>
                        <Tabs.List className='mx-auto'>
                            <div className='flex '>

                                <Tabs.Item label="student" className="flex items-center gap-2 text-[#7f87df] hover:text-[#7f87df] border-b hover:bg-white border-[#7f87df]">
                                    As Student
                                </Tabs.Item>
                                <Tabs.Item className="flex items-center gap-2 text-[#7f87df] hover:text-[#7f87df] border-b border-[#7f87df] hover:bg-white" label="teacher">

                                    As
                                    Teacher
                                </Tabs.Item>
                            </div>



                        </Tabs.List>

                        <Tabs.Content label="student">
                            <StudentRegister />
                        </Tabs.Content>
                        <Tabs.Content label="teacher">
                            <TeacherRegister />
                        </Tabs.Content>

                    </Tabs>

                </div>
            </section>
        </section>
    );
};


export default Register;