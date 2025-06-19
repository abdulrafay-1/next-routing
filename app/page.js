import React from 'react'
import Card from './components/Card'

const Home = async () => {

  // const response = await fetch("https://jsonplaceholder.typicode.com/users", {
  //   cache: "no-store",
  //   // next: {
  //   //   revalidate: 50 // api call after 50 seconds
  //   // }
  // })
  // const data = await response.json()
  const response = await fetch("https://backend-authentication-taupe.vercel.app/api/v1/blog", {
    cache: "no-store",
    next: {
      revalidate: 120 // api call after 50 seconds
    }
  })
  const data = await response.json()
  console.log(data.blogs)

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  return (
    <>
      <h1 className='text-center text-2xl font-medium mb-5'>Dynamic Routing</h1>
      <div className='flex flex-wrap mx-2 justify-between gap-2'>
        {data?.blogs?.map((post) => (
          <div key={post._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-xl mb-2">
                {post.title}
              </h2>

              <div className="flex items-center gap-2 mb-4">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-8">
                    <span className="text-xs">{post.author.name.charAt(0)}</span>
                  </div>
                </div>
                <span className="text-sm text-base-content/70">
                  By {post.author.name}
                </span>
                <span className="text-sm text-base-content/50">
                  • {formatDate(post.createdAt)}
                </span>
              </div>

              <p className="text-base-content/80 mb-4 leading-relaxed">
                {post.description.length > 200
                  ? `${post.description.substring(0, 200)}...`
                  : post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                    <span className="text-sm">{post.likes.length}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-blue-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.606-.015 2.896 0 3.286.12 3.007 1.87 4.994 4.75 4.986.308.001 1.645.001 2.25.001 0 0 0 0 0 0l5.25-5.25H21c2.25 0 4.5-2.25 4.5-4.5v-6.75C25.5 3.75 23.25 1.5 21 1.5H3C.75 1.5-1.5 3.75-1.5 6v6.75c0 2.25 2.25 4.5 4.5 4.5H3z" />
                    </svg>
                    <span className="text-sm">{post.comments.length}</span>
                  </div>
                </div>

                <button className="btn btn-primary btn-sm">
                  Read More
                </button>
              </div>

              {post.comments.length > 0 && (
                <div className="mt-4 pt-4 border-t border-base-300">
                  <h4 className="font-semibold mb-2">Comments:</h4>
                  {post.comments.map((comment) => (
                    <div key={comment._id} className="bg-base-200 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="avatar placeholder">
                          <div className="bg-neutral text-neutral-content rounded-full w-6">
                            <span className="text-xs">{comment.author.name.charAt(0)}</span>
                          </div>
                        </div>
                        <span className="text-sm font-medium">{comment.author.name}</span>
                      </div>
                      <p className="text-sm text-base-content/70 ml-8">{comment.text}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home