// @/src/pages/dashboard/index.tsx
import type { NextPage } from 'next'
import { useSession, signOut } from 'next-auth/react'

import { requireAuth } from '../../common/requireAuth'
import Navbar from '../../components/shared/Navbar'

export const getServerSideProps = requireAuth(async (ctx) => {
  return { props: {} }
})

const Dashboard: NextPage = () => {
  const { data } = useSession()

  return (
    <main className="h-screen">
      <Navbar />
      <div className="hero h-5/6 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Welcome to the #1 cleaning store!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Surprise me!</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Dashboard
