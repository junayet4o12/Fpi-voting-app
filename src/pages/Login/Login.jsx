import loginPic from '../../assets/login-pic.png'
// import {  } from 'keep-react'
import { Envelope, Lock } from 'phosphor-react'

import { Button, Input, Icon, Label } from 'keep-react'

const Login = () => {
    return (
        <div className='flex my-16 flex-col-reverse lg:flex-row p-10 gap-10 lg:gap-0'>
            <div className="flex-1">
                <img src={loginPic} alt="" />
            </div>
            <div className="flex-1 flex flex-col items-center justify-center ">
                <div className="space-y-4">
                    <h2 className="text-5xl font-medium text-left">Login !</h2>
                    <form className='space-y-4 text-xl'>
                        <fieldset className="space-y-1">
                            <Label htmlFor="name" className=' text-lg'>Email</Label>
                            <div className="relative">
                                <Input placeholder="Enter email" className="ps-11" />
                                <Icon>
                                    <Envelope size={19} color="#AFBACA" />
                                </Icon>
                            </div>
                        </fieldset>
                        <fieldset className="space-y-1">
                            <Label htmlFor="password" className=' text-lg'>Password</Label>
                            <div className="relative">
                                <Input id="password" placeholder="Enter password" type="password" className="ps-11" />
                                <Icon>
                                    <Lock size={19} color="#AFBACA" />
                                </Icon>
                            </div>
                        </fieldset>
                        <p className='text-base'><a href="#" className='text-blue-600'>Forgot Passsword ?</a></p>
                        <p className='text-base'>Not a user? <a href="#" className='text-blue-600'>Register now</a> </p>
                        <Button color='primary' className='px-10'>Login</Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;