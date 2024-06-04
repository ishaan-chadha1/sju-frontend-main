import { Image } from 'react-bootstrap';
import './FileUpload.css';
import React, { useState } from 'react';
import shortid from 'shortid';

const FileUpload = ({ onFileChange }) => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleInputChange = (e) => {
        let images = [];
        for (let i = 0; i < e.target.files.length; i++) {
            let reader = new FileReader();
            let file = e.target.files[i];
            reader.onloadend = () => {
                setSelectedFiles((prev) => [
                    ...prev,
                    {
                        id: shortid.generate(),
                        filename: file.name,
                        filetype: file.type,
                        fileimage: reader.result,
                        datetime: file.lastModifiedDate.toLocaleString('en-IN'),
                        filesize: file.size
                    }
                ]);
            };
            if (file) {
                reader.readAsDataURL(file);
            }
        }
        onFileChange(e);
    };

    const deleteSelectedFile = (id) => {
        if (window.confirm("Are you sure you want to delete this file?")) {
            const updatedFiles = selectedFiles.filter((file) => file.id !== id);
            setSelectedFiles(updatedFiles);
        }
    };

    return (
        <div className="fileupload-view">
            <div className="card mt-5">
                <div className="card-body">
                    <div className="kb-data-box">
                        <div className="kb-file-upload">
                            <div className="file-upload-box">
                                <input
                                    type="file"
                                    id="fileupload"
                                    className="file-upload-input"
                                    onChange={handleInputChange}
                                    multiple
                                />
                                <Image src='Images/esign/uploadfileblack.svg' />
                                <h4>Drag & Drop PDF file or Browse to get started</h4>
                                <p>Upload a DOCX or PDF file. Max file size is 5MB</p>
                            </div>
                        </div>
                        <div className="kb-attach-box mb-3">
                            {selectedFiles.map((file) => (
                                <div className="file-atc-box" key={file.id}>
                                    <div className="file-image">
                                        {file.filename.match(/.(jpg|jpeg|png|gif|svg)$/i) ? (
                                            <img src={file.fileimage} alt={file.filename} />
                                        ) : (
                                            <Image src="Images/esign/uploadfile.svg" />
                                        )}
                                    </div>
                                    <div className="file-detail">
                                        <h6>{file.filename}</h6>
                                        <p><span>Size: {file.filesize} bytes</span><br></br><span className="ml-">Modified Time: {file.datetime}</span></p>
                                        <div className="file-actions">
                                            <button type="button" className="file-action-btn" onClick={() => deleteSelectedFile(file.id)}>Delete</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
