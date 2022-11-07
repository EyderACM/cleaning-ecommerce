import classNames from 'classnames'
import Link from 'next/link'
import { FC, useMemo } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { ILogin } from '../../../common/validation/auth'
import EmailInput from '../../shared/Form/EmailInput'
import PasswordInput from '../../shared/Form/PasswordInput'

const SignInForm: FC<{
  onSubmit: () => void
  register: UseFormRegister<ILogin>
  isLoading?: boolean
}> = ({ onSubmit, register, isLoading = false }) => {
  const disabledState = useMemo(() => ({ disabled: isLoading }), [isLoading])

  return (
    <form
      className="grid items-center justify-center h-screen w-6/12"
      onSubmit={onSubmit}
    >
      <div className="place-self-end">
        <div className="flex items-center flex-col pb-8">
          <p className="text-3xl font-bold text-accent pb-4">Welcome back!</p>
          <p className="text text-secondary">
            Get ready to join the largest clean-product platform.
          </p>
        </div>

        <div className="flex flex-col items-center w-full bg-base-100 ">
          <div className="form-control w-full">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <EmailInput
              isLoading={isLoading}
              classname="w-full"
              {...register('email')}
            />
          </div>
          <div className="form-control w-full mt-4">
            <label htmlFor="password" className="label">
              <span className="label-text">Password</span>
            </label>
            <PasswordInput
              classname="w-full"
              isLoading={isLoading}
              {...register('password')}
            />
          </div>
          <div className="flex flex-col mt-8 w-full items-center justify-between">
            <button
              {...disabledState}
              className={classNames(`btn btn-accent w-full`, {
                loading: isLoading,
              })}
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row place-self-center ">
        <p>Don&apos;t have an account? &nbsp;</p>
        <Link href="/sign-up" className="link">
          Sign up!
        </Link>
      </div>
    </form>
  )
}

export default SignInForm
