'use client'

export default function Error({ error } : { error: Error }) {  
  return (
    <div className="flex justify-center items-center w-full grow">
      <p className="text-red-700">{error.message}</p>
    </div>
  )
}
  