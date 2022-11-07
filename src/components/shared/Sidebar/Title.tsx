import { FC } from 'react'
import { FCWithChildren } from '../types'

export const Title: FCWithChildren<{}> = ({ children }) => {
  return <p className="text-white text-6xl font-bold">{children}</p>
}

export const SubTitle: FCWithChildren<{}> = ({ children }) => {
  return <p className="text-white pt-8 text-2xl ">{children}</p>
}

export const TitleContainer: FC<{
  children: (ReturnType<typeof Title> | ReturnType<typeof SubTitle>)[]
}> = ({ children }) => {
  return (
    <div className="h-full flex flex-col justify-center mt-12  max-w-xl">
      {children}
    </div>
  )
}
