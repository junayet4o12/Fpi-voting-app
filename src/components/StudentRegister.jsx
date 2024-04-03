import React from 'react';
import { Input, Label } from 'keep-react';

const StudentRegister = () => {
    return (
        <div className='mx-auto'>
            <form className='bg-white rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4 flex flex-wrap -mx-3'>
                    <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
                        <Label htmlFor="firstName" className='block text-[#425176] text-sm font-bold mb-2'>First Name</Label>
                        <Input id="firstName" placeholder="Enter first name" type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    <div className='w-full md:w-1/2 px-3'>
                        <Label htmlFor="lastName" className='block text-[#425176] text-sm font-bold mb-2'>Last Name</Label>
                        <Input id="lastName" placeholder="Enter last name" type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                </div>
                <div className='mb-4'>
                    <Label htmlFor="rollNumber" className='block text-[#425176] text-sm font-bold mb-2'>Roll Number</Label>
                    <Input id="rollNumber" placeholder="Enter roll number" type="text" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <Label htmlFor="email" className='block text-[#425176] text-sm font-bold mb-2'>Email</Label>
                    <Input id="email" placeholder="Enter email" type="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <Label htmlFor="contactNo" className='block text-[#425176] text-sm font-bold mb-2'>Contact Number</Label>
                    <Input id="contactNo" placeholder="Enter contact number" type="tel" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline' />
                </div>
                <div className='mb-4'>
                    <Label htmlFor="password" className='block text-[#425176] text-sm font-bold mb-2'>Password</Label>
                    <Input id="password" placeholder="Enter password" type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline' />
                </div>

                
                <div className='mb-4'>
                    <Label htmlFor="department" className='block text-[#425176] text-sm font-bold mb-2'>Department</Label>
                    <select id="department" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline'>
                        <option value="">Select department</option>
                        <option value="Computer Science">Computer Science</option>
                        <option value="Electrical Engineering">Electrical Engineering</option>
                        {/* Add more options as needed */}
                    </select>
                </div>
                <div className='mb-4'>
                    <Label htmlFor="semester" className='block text-[#425176] text-sm font-bold mb-2'>Semester</Label>
                    <select id="semester" className='shadow appearance-none border rounded w-full py-2 px-3 text-[#425176] leading-tight focus:outline-none focus:shadow-outline'>
                        <option value="">Select semester</option>
                        <option value="1">1st Semester</option>
                        <option value="2">2nd Semester</option>
                        {/* Add options for 3rd to 7th semester */}
                    </select>
                </div>

                <button className='bg-[#8188D9] px-12 py-3 font-semibold mt-5 rounded-xl text-white hover:bg-[#7379bc]'>Register</button>
            </form>
        </div>
    );
};

export default StudentRegister;
