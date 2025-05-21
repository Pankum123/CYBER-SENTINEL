import React from 'react'
import PostsTable from './PostsTable'
import TopUsersCard from './TopUsersCard'

function Tableinformation() {
  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 mt-20 md:flex justify-between'>
        <PostsTable/>
        <TopUsersCard/>
    </div>
  )
}

export default Tableinformation
