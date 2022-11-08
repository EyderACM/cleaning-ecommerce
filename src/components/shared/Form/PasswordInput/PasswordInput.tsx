import classNames from 'classnames'
import React from 'react'
import { PasswordInputProps } from '../types'

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ isLoading = false, isDisabled = false, classname, ...rest }, ref) => {
    return (
      <input
        ref={ref}
        type="password"
        placeholder="******"
        className={classNames('input input-bordered', classname)}
        {...((isLoading || isDisabled) && { disabled: true })}
        {...rest}
      />
    )
  },
)
PasswordInput.displayName = 'PasswordInput'

export default PasswordInput
