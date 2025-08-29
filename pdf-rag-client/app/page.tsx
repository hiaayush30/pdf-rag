import React from 'react'
import FileUploadComponent from './components/file-upload'

function page() {
  return (
    <div>
      <main className='min-h-screen w-full flex'>
        <div className='p-2 w-[30vw]'>
          <FileUploadComponent/>
        </div>
        <div className='border-l-2 border-orange-300 p-2 w-[70vw]'>2</div>
      </main>
    </div>
  )
}

export default page
