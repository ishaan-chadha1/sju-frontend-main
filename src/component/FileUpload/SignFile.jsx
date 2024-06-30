import { Col, Image, Row } from "react-bootstrap"
import React, { useState } from "react"
import shortid from "shortid"

const SignFile = ({ onFileUpload }) => {
  const [selectedfile, setSelectedFile] = useState([])

  const filesizes = (bytes, decimals = 2) => {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  const InputChange = (e) => {
    let images = []
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(e.target.files[i])
    }
    setSelectedFile(images)
  }

  const FileUploadSubmit = (e) => {
    e.preventDefault()
    if (selectedfile.length > 0) {
      const file = selectedfile[0]
      onFileUpload(file)
      setSelectedFile([])
    } else {
      alert("Please select a file")
    }
  }

  return (
    <>
      <div className="fileupload-view">
        <div className="card mt-5">
          <div className="card-body">
            <div className="kb-data-box">
              <form onSubmit={FileUploadSubmit}>
                <div className="kb-file-upload">
                  <div className="file-upload-box">
                    <input type="file" id="fileupload" className="file-upload-input" onChange={InputChange} multiple />
                    <h4>Drag & Drop PDF file or Browse to get started</h4>
                    <p>Upload a DOCX PDF file. Max file size is 5MB</p>
                  </div>
                </div>
                <div className="kb-buttons-box">
                  <button type="submit" className="btn btn-primary form-submit">
                    Upload Now
                  </button>
                </div>
              </form>
              <div className="kb-attach-box mb-3">
                {selectedfile.map((file, index) => (
                  <div className="file-atc-box" key={shortid.generate()}>
                    <div className="file-image">
                      <Image src="Images/esign/uploadfile.svg" />
                    </div>
                    <div className="file-detail">
                      <h6>{file.name}</h6>
                      <p>
                        <span>Size : {filesizes(file.size)}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignFile
