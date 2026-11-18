export default function UploadInput () {
    return (
        <div className="w-full my-4">
                    <label htmlFor="file-upload" className="relative flex h-20 w-full cursor-pointer items-center justify-center gap-4 border border-dashed border-gray-300 rounded-sm hover:border-gray-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gray-400">
                        <path d="M12 16V4m0 0L7 9m5-5 5 5" />
                        <path d="M20 16.5v3a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19.5v-3" />
                        </svg>
                        <span className="text-sm text-gray-400">Upload Additional file</span>
                        <input id="file-upload" type="file" className="sr-only"/></label>
                        <p className="mt-2 text-[10px] text-gray-400">Attach file. File size of your documents should not exceed 10MB</p>
                    </div>
    )
}