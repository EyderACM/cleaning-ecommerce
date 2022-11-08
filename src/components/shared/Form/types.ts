export interface DefaultInputProps {
  isLoading?: boolean
  isDisabled?: boolean
  classname?: string
  placeholder?: string
}

export interface PasswordInputProps extends DefaultInputProps {}
export interface EmailInputProps extends DefaultInputProps {}
export interface TextInputProps extends DefaultInputProps {}
