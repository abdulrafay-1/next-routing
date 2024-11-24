import React from 'react'
import Card from './components/card'

const Home = async () => {

  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await response.json()

  return (
    <>
      <h1 className='text-center text-2xl font-medium mb-5'>Dynamic Routing</h1>
      <div className='flex flex-wrap mx-2 justify-between gap-2'>
        {data.map(item => (
          <Card key={item.id} id={item.id} title={item.name} />
        ))}
      </div>
    </>
  )
}

export default Home