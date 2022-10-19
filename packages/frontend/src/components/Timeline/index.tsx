import React from 'react'
import { GetUserPostsByUidQuery } from '@/generated/graphql'

type ITimelineProps = {
  posts: GetUserPostsByUidQuery['posts']
}

const Timeline = ({ posts }: ITimelineProps) => {
  return (
    <section>
      {/* <h1 className='text-4xl font-bold pt-14 pb-0 text-center dark:text-white'>Timeline</h1> */}
      <div className='-mt-4 container mx-auto w-full h-full max-w-4xl pb-10'>
        <div className='relative wrap overflow-hidden h-full pt-10'>
          <div
            className='border-2-2 absolute border-opacity-20 border-blue-400 h-4/5 border'
            style={{ left: '50%', top: '13%' }}
          ></div>
          {/* Experience card */}
          {posts.map((p, idx) => (
            <div
              key={p.id}
              className={`flex justify-between items-center w-full ${
                idx % 2 == 0 ? 'right-timeline' : 'flex-row-reverse left-timeline'
              } ${idx != 0 ? 'mt-8' : ''}`}
            >
              <TimelineCard key={p.id} post={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Timeline)

type ITimelineCardProps = {
  post: GetUserPostsByUidQuery['posts'][0]
}

const TimelineCard = ({ post }: ITimelineCardProps) => {
  return (
    <div className='relative rounded-2xl bg-gradient-to-r from-blue-500 via-sky-500 to-purple-600 p-1 shadow-xl z-10 w-full sm:w-7/12 md:w-5/12 transition duration-300 delay-150 hover:-translate-y-2 z-10'>
      <div className='block rounded-xl bg-white p-6 sm:p-8'>
        <h1 className='font-semibold text-xl text-gray-700'>{post.title}</h1>
        <a href={post.link ?? ''} className='text-gray-500'>
          🎤 {post.artist?.name}
        </a>
        &ensp;
        <p className='text-gray-500 text-base'>📍{post.location_name}</p>
        <p className='text-gray-600 my-2 text-base'>{post.message}</p>
      </div>
    </div>
  )
}
