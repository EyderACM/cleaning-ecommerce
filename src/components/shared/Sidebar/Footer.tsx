import { FC, ReactNode } from 'react'

const FooterContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="w-10/12">{children}</div>
}

export { FooterContainer }
