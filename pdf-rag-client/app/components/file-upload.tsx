"use client"

import { Upload } from 'lucide-react'
import React, { ChangeEvent, useRef, useState } from 'react'

function FileUploadComponent() {
    const [file, setFile] = useState<File | undefined>(undefined);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        const submitted = e.target.files?.[0];
        if (submitted && submitted.size > 0) {
            setFile(submitted)
        } else {
            alert("select a valid file!")
        }
    }

    return (
        <div className='h-screen flex items-center justify-center'>
            <div
                onClick={() => inputRef.current?.click()}
                className='border-2 border-slate-200 rounded-lg bg-stone-800 shadow-2xl flex flex-col items-center justify-center gap-3 p-4 cursor-pointer hover:scale-110 transition-all'>
                <Upload />
                <h3>Upload a File</h3>
            </div>
            <input ref={inputRef} onChange={handleFileUpload} type='file' accept='application/pdf' className='hidden' />
        </div>
    )
}

export default FileUploadComponent
