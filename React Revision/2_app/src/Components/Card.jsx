import React from 'react'

function Card({name = "Jaishree", post="Not  decided yet", URL}) {
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg place-self-center m-5 ">
  <img className="w-full" src={URL} alt="Sunset in the mountains"></img>
  <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name} {post = "learner"}</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    </>

  )
}

export default Card;