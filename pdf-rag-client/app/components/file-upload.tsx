"use client"

import axios from 'axios';
import { Upload } from 'lucide-react'
import React, { ChangeEvent, useRef, useState } from 'react'

function FileUploadComponent() {
    const [file, setFile] = useState<undefined | File>(undefined);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
        if (file) {
            // TODO remove the earlier file
        }
        const submitted = e.target.files?.[0];
        if (submitted && submitted.size > 0) {
            const formData = new FormData();
            // FormData is a special browser API that lets you build a set of key–value pairs (like a virtual HTML form) 
            // to send files or data with multipart/form-data encoding. (see README of server)
            formData.append("pdf", submitted);
            try {
                await axios.post(process.env.NEXT_PUBLIC_BE_URL + "/api/upload/pdf", formData);
                alert("file uploaded");
                setFile(submitted);
            } catch (error) {
                console.log(error)
                alert("error in uploading file");
            }
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
                <h3>{file ? file.name : "Upload a File"}</h3>
            </div>
            <input ref={inputRef} onChange={handleFileUpload} type='file' accept='application/pdf' className='hidden' />
        </div>
    )
}

export default FileUploadComponent
