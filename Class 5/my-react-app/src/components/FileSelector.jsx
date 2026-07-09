import { useState } from 'react'

function FileSelector() {
  const [files, setFiles] = useState([])

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.target.files)

    setFiles((currentFiles) => [...currentFiles, ...selectedFiles])
    event.target.value = ''
  }

  const removeFile = (fileIndex) => {
    setFiles((currentFiles) =>
      currentFiles.filter((_, index) => index !== fileIndex)
    )
  }

  return (
    <section className="file-selector">
      <h2>Select Files</h2>

      <label className="file-input-label" htmlFor="fileUpload">
        Choose Files
      </label>
      <input
        type="file"
        id="fileUpload"
        multiple
        onChange={handleFileChange}
      />

      {files.length > 0 ? (
        <ul className="file-list">
          {files.map((file, index) => (
            <li key={`${file.name}-${file.lastModified}-${index}`}>
              <span>{file.name}</span>
              <button type="button" onClick={() => removeFile(index)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No files selected.</p>
      )}
    </section>
  )
}

export default FileSelector
