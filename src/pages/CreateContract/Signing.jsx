import { Col, Image, Row, Table } from "react-bootstrap"
import "./CreateContract.css"
import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react"
import * as pdfjsLib from "pdfjs-dist/build/pdf"
import SignaturePad from "signature_pad"
import { jsPDF } from "jspdf"

import FileUpload from "../../component/FileUpload/FileUpload"
import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import WizardForm from "./WizardForm"
import SignFile from "../../component/FileUpload/SignFile"

function increaseSize(parentElement) {
  let element
  if (parentElement.id === "drag_sign") {
    element = document.getElementById("img_v")
    var currentWidth = element.offsetWidth
    var currentHeight = element.offsetHeight
    element.style.width = currentWidth * 1.1 + "px"
    element.style.height = currentHeight * 1.1 + "px"
    console.log(
      "🚀 ~ increaseSize ~ element.style.height:",
      element.style.height
    )
    console.log(
      "🚀 ~ increaseSize ~  element.style.width:",
      element.style.width
    )
  } else if (parentElement.id === "drag_date") {
    const element = document.getElementById("signed_date")
    var computedFontSize = window.getComputedStyle(element).fontSize
    var newFontSize = parseFloat(computedFontSize, 10) * 1.2 + "px"
    element.style.fontSize = newFontSize
  } else if (parentElement.id === "drag_text") {
    const element = document.getElementById("displayed_text")
    var computedFontSize = window.getComputedStyle(element).fontSize
    var newFontSize = parseFloat(computedFontSize, 10) * 1.2 + "px"
    element.style.fontSize = newFontSize
  }
}

// Function to decrease size
function decreaseSize(parentElement) {
  let element
  if (parentElement.id === "drag_sign") {
    element = document.getElementById("img_v")
    var currentWidth = element.offsetWidth
    var currentHeight = element.offsetHeight
    element.style.width = currentWidth / 1.1 + "px"
    element.style.height = currentHeight / 1.1 + "px"
    console.log(
      "🚀 ~ increaseSize ~ element.style.height:",
      element.style.height
    )
    console.log(
      "🚀 ~ increaseSize ~  element.style.width:",
      element.style.width
    )
  } else if (parentElement.id === "drag_date") {
    const element = document.getElementById("signed_date")
    var computedFontSize = window.getComputedStyle(element).fontSize
    var newFontSize = parseFloat(computedFontSize, 10) / 1.2 + "px"
    element.style.fontSize = newFontSize
  } else if (parentElement.id === "drag_text") {
    const element = document.getElementById("displayed_text")
    var computedFontSize = window.getComputedStyle(element).fontSize
    var newFontSize = parseFloat(computedFontSize, 10) / 1.2 + "px"
    element.style.fontSize = newFontSize
  }
}

function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
  if (document.getElementById(elmnt.id)) {
    document.getElementById(elmnt.id).onmousedown = dragMouseDown
  } else {
    elmnt.onmousedown = dragMouseDown
  }

  function dragMouseDown(e) {
    e = e || window.event
    if (e.target.tagName.toLowerCase() === "input") return // Check if the target element is an input field
    e.preventDefault()
    pos3 = e.clientX
    pos4 = e.clientY
    document.onmouseup = closeDragElement
    document.onmousemove = elementDrag
  }

  function elementDrag(e) {
    e = e || window.event
    e.preventDefault()
    pos1 = pos3 - e.clientX
    pos2 = pos4 - e.clientY
    pos3 = e.clientX
    pos4 = e.clientY
    elmnt.style.top = elmnt.offsetTop - pos2 + "px"
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px"
  }

  function closeDragElement() {
    document.onmouseup = null
    document.onmousemove = null
  }
}

const CreateContract = () => {
    
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  const [uploadedFile, setUploadedFile] = useState(null) // State to hold the uploaded file
  const [pdfPages, setPdfPages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  //   const [canvas, setCanvas] = useState()
  //   const [signaturePad, setsignaturePad] = useState()

  var canvas, signaturePad

  const handleClose = () => setShow(false)
  const handleClose2 = () => setShow2(false)
  const handleClose3 = () => setShow3(false)
  const handleShow = () => setShow(true)
  const handleShow2 = () => setShow2(true)
  const handleShow3 = () => setShow3(true)

  const handleFileUpload = (file) => {
    setUploadedFile(file)
    loadPdf(file)
  }

  const loadPdf = (file) => {
    const fileReader = new FileReader()
    fileReader.onload = function () {
      const typedarray = new Uint8Array(this.result)

      // Configure the worker source
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.5.207/pdf.worker.js"

      const loadingTask = pdfjsLib.getDocument(typedarray)
      loadingTask.promise.then((pdf) => {
        const pages = []
        for (let i = 1; i <= pdf.numPages; i++) {
          pages.push(i)
        }
        setPdfPages(pages)

        // Render each page onto its respective canvas
        pages.forEach((pageNumber) => {
          pdf.getPage(pageNumber).then((page) => {
            const viewport = page.getViewport({ scale: 1.5 }) // Adjust scale as needed
            const canvas = document.getElementById(`canvas-${pageNumber}`)
            const context = canvas.getContext("2d")
            canvas.width = viewport.width
            canvas.height = viewport.height

            const renderContext = {
              canvasContext: context,
              viewport: viewport,
            }

            page.render(renderContext)
          })
        })
      })
    }
    fileReader.readAsArrayBuffer(file)
  }

  const handleAddSign = () => {
    var modal = document.getElementById("myModal")
    dragElement(document.getElementById("drag_sign"))
    modal.style.display = "block"
  }

  const handleConfirmAddSign = () => {
    console.log(canvas.toDataURL("image/jpg"))
    var img = document.getElementById("img_v")
    img.src = canvas.toDataURL("image/jpg")
    document.getElementById("myModal").style.display = "none"
    // document.getElementById("download").style.display = "block"
    document.getElementById("img_v").style.display = "block"
    document.getElementById("delete").style.display = "block"
    document.getElementById("more").style.display = "block"
    document.getElementById("less").style.display = "block"
    document.getElementById("add").style.display = "block"
    return img
  }
  const deleteSign = () => {
    document.getElementById("drag_sign").style.display = "none"
    document.getElementById("more").style.display = "none"
    document.getElementById("less").style.display = "none"
  }

  const addSign = () => {
    var canvas1 = document.getElementById(`canvas-${currentPage}`)
    var context1 = canvas1.getContext("2d")
    var canvas = document.getElementById("signature")
    var img = document.getElementById("img_v")

    img.src = canvas.toDataURL("image/jpg")
    img.onload = function () {
      // Get the canvas container's offset
      var canvasOffset = canvas1.getBoundingClientRect()

      // Get the drag_sign's offset relative to the canvas container
      var signatureOffset = document
        .getElementById("drag_sign")
        .getBoundingClientRect()

      // Calculate the signature's position relative to the canvas
      var canvasX = signatureOffset.left - canvasOffset.left
      var canvasY = signatureOffset.top - canvasOffset.top + 20

      var currentWidth = img.offsetWidth
      var currentHeight = img.offsetHeight

      // Place the signature on the canvas at the calculated position
      context1.drawImage(img, canvasX, canvasY, currentWidth, currentHeight)

      // Hide/show elements as needed
      document.getElementById("add").style.display = "none"
      document.getElementById("img_v").style.display = "none"
      document.getElementById("delete").style.display = "none"
      // document.getElementById("add_sign").style.display = "none";
      document.getElementById("more").style.display = "none"
      document.getElementById("less").style.display = "none"
      // document.getElementById("download").style.display = "block"
    }
  }

  const moreElement = (which) => {
    console.log("🚀 ~ moreElement ~ which:", which)
    var signatureElement = document.getElementById(which)
    increaseSize(signatureElement)
  }

  const lessElement = (which) => {
    var signatureElement = document.getElementById(which)
    decreaseSize(signatureElement)
  }

  const handleAddDate = () => {
    const currentDate = new Date()
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    }

    document.getElementById("displayed_date").textContent =
      currentDate.toLocaleDateString("en-us", options)

    dragElement(document.getElementById("drag_date"))
    document.getElementById("signed_date").style.display = "block"
    document.getElementById("deleteForDate").style.display = "block"
    document.getElementById("moreForDate").style.display = "block"
    document.getElementById("lessForDate").style.display = "block"
    document.getElementById("addForDate").style.display = "block"

    // document.getElementById("download").style.display = "block"
  }

  const deleteDate = () => {
    document.getElementById("drag_date").style.display = "none"
    document.getElementById("moreForDate").style.display = "none"
    document.getElementById("lessForDate").style.display = "none"
  }

  const addDate = () => {
    var canvas1 = document.getElementById(`canvas-${currentPage}`)
    var context1 = canvas1.getContext("2d")

    // Get the canvas container's offset
    var canvasOffset = canvas1.getBoundingClientRect()

    // Get the drag_date's offset relative to the canvas container
    var dateOffset = document
      .getElementById("drag_date")
      .getBoundingClientRect()

    // Calculate the date's position relative to the canvas
    var canvasX = dateOffset.left - canvasOffset.left
    console.log("🚀 ~ addDateToPdf ~ canvasX:", canvasX)
    var canvasY = dateOffset.top - canvasOffset.top + 20
    console.log("🚀 ~ addDateToPdf ~ canvasY:", canvasY)

    // Render the date text at the calculated position

    var dateText =
      "Dated: " + document.getElementById("displayed_date").textContent

    const element = document.getElementById("displayed_date")
    var computedFontSize = window.getComputedStyle(element).fontSize
    context1.font = computedFontSize + " Arial"

    context1.fillText(dateText, canvasX, canvasY)

    document.getElementById("signed_date").style.display = "none"
    document.getElementById("deleteForDate").style.display = "none"
    document.getElementById("moreForDate").style.display = "none"
    document.getElementById("lessForDate").style.display = "none"
    document.getElementById("addForDate").style.display = "none"

    // Optionally, you may want to make the date draggable after adding it to the canvas
    dragElement(document.getElementById("drag_date"))
  }

  const handleAddText = () => {
    dragElement(document.getElementById("drag_text"))
    document.getElementById("displayed_text").style.display = "block"
    document.getElementById("deleteForText").style.display = "block"
    document.getElementById("addForText").style.display = "block"
    document.getElementById("moreForText").style.display = "block"
    document.getElementById("lessForText").style.display = "block"
    // document.getElementById("download").style.display = "block"
  }

  const deleteText = () => {
    document.getElementById("drag_text").style.display = "none"
    document.getElementById("deleteForText").style.display = "none"
    document.getElementById("addForText").style.display = "none"
    document.getElementById("moreForText").style.display = "none"
    document.getElementById("lessForText").style.display = "none"
    document.getElementById("download").style.display = "block"
  }

  const addText = () => {
    var canvas1 = document.getElementById(`canvas-${currentPage}`)
    var context1 = canvas1.getContext("2d")

    // Get the canvas container's offset
    var canvasOffset = canvas1.getBoundingClientRect()

    // Get the drag_date's offset relative to the canvas container
    var dateOffset = document
      .getElementById("drag_text")
      .getBoundingClientRect()

    // Calculate the date's position relative to the canvas
    var canvasX = dateOffset.left - canvasOffset.left
    var canvasY = dateOffset.top - canvasOffset.top + 20

    // Render the date text at the calculated position

    var text = document.getElementById("displayed_text").value ?? "Demo"

    const element = document.getElementById("displayed_text")
    var computedFontSize = window.getComputedStyle(element).fontSize
    context1.font = computedFontSize + " Arial"
    context1.fillText(text, canvasX, canvasY)

    document.getElementById("displayed_text").style.display = "none"
    document.getElementById("deleteForText").style.display = "none"
    document.getElementById("addForText").style.display = "none"
    document.getElementById("moreForText").style.display = "none"
    document.getElementById("lessForText").style.display = "none"
  }

  const downloadPDF = () => {
    const canvas = document.getElementById(`canvas-${currentPage}`)
    const image = canvas.toDataURL("image/png") // You can change the format to 'image/jpeg' if needed

    const link = document.createElement("a")
    link.href = image
    link.download = "canvas-image.png" // Change the file name and extension as needed
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  useEffect(() => {
    canvas = document.getElementById("signature")
    signaturePad = new SignaturePad(canvas)

    document
      .getElementById("clear-signature")
      .addEventListener("click", function () {
        signaturePad.clear()
      })
  })

  return (
    <div className="main-content mt-5">
      <div className="managecontract">
        <div className="contractname d-flex">
          <Link to="/Esign">
            <Image src="Images/esign/leftarrow.svg"></Image>
          </Link>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3">
            <Tab eventKey="home" title="Upload Contract">
              <div className="uploadtitle">
                <h2>Upload Contract</h2>
                <p>Upload a document that you wish to send.</p>
              </div>
              <SignFile onFileUpload={handleFileUpload} />{" "}
              {/* Pass the function as prop */}
              <div className="selecttemplete">
                <div className="selectfilter">
                  <h4>Select From Template</h4>
                  <select id="FilterSelect">
                    <option value="all">All</option>
                    <option value=".category-1">Category 1</option>
                    <option value=".category-2">Category 2</option>
                  </select>
                </div>
                <CardGroup>
                  <Card>
                    <div className="cardimg">
                      <Card.Img variant="top" src="Images/esign/invoice.png" />
                    </div>
                    <Card.Body>
                      <Card.Text>
                        <span>Business Transaction</span>
                        <Link variant="primary" onClick={handleShow}>
                          Inovice
                          <Image src="Images/esign/invoiceicon.svg" />
                        </Link>
                        <p>
                          Jurisdiction : <span>Worldwide</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="cardimg">
                      <Card.Img variant="top" src="Images/esign/invoice.png" />
                    </div>
                    <Card.Body>
                      <Card.Text>
                        <span>Business Operations</span>
                        <Link variant="primary" onClick={handleShow2}>
                          Partnership Agreement
                          <Image src="Images/esign/invoiceicon.svg" />
                        </Link>
                        <p>
                          Jurisdiction : <span>Worldwide</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="cardimg">
                      <Card.Img variant="top" src="Images/esign/invoice.png" />
                    </div>
                    <Card.Body>
                      <Card.Text>
                        <span>Intellectual Property</span>
                        <Link variant="primary" onClick={handleShow3}>
                          Non-Disclosure Agreement
                          <Image src="Images/esign/invoiceicon.svg" />
                        </Link>
                        <p>
                          Jurisdiction : <span>Worldwide</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <div className="cardimg">
                      <Card.Img variant="top" src="Images/esign/invoice.png" />
                    </div>
                    <Card.Body>
                      <Card.Text>
                        <span>Employment</span>
                        <Link to="/">
                          Employment Contract
                          <Image src="Images/esign/invoiceicon.svg" />
                        </Link>
                        <p>
                          Jurisdiction : <span>Worldwide</span>
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </div>
            </Tab>
            <Tab eventKey="contact" title="Add Fields">
              <div className="selectfilter mt-3">
                <h4>Add Fields</h4>
                <div className="search">
                  <span>
                    <Image src="Images/search.svg" />
                  </span>
                  <input type="search" placeholder="Search Document" />
                </div>
              </div>
              <ul className="assignfield">
                <li>
                  <div className="assignfieldsub">
                    <span>
                      {" "}
                      <Image src="Images/esign/assignicon.png" />
                    </span>
                    <Image src="Images/esign/user.svg" />
                    <p>mfaraz568</p>
                  </div>
                </li>
                <li>
                  <a href="#" onClick={handleAddSign}>
                    <div className="assignfieldsub">
                      <span>
                        {" "}
                        <Image src="Images/esign/required.png" />
                      </span>
                      <Image src="Images/esign/pencil.svg" />
                      <p>Signature Field</p>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#" onClick={handleAddDate}>
                    <div className="assignfieldsub">
                      <Image src="Images/esign/date.svg" />
                      <p>Date Signed</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleAddText}>
                    <div className="assignfieldsub">
                      <Image src="Images/esign/input.svg" />
                      <p>Input Text Field</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" onClick={handleAddText}>
                    <div className="assignfieldsub">
                      <Image src="Images/esign/readonly.svg" />
                      <p>Read Only Text</p>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="activity mt-5">
                <h4 className="mb-5"> Activity 1 - Googles</h4>
                <div id="canvas_div">
                  {pdfPages.map((pageNumber) => (
                    <div key={pageNumber}>
                      <h3>Page {pageNumber}</h3>
                      <canvas
                        id={`canvas-${pageNumber}`}
                        class={`canvas`}
                        width="800"
                        height="1200"></canvas>
                    </div>
                  ))}
                  <div id="drag_sign">
                    <img
                      type="button"
                      id="delete"
                      src="Img\delete.png"
                      onClick={deleteSign}></img>
                    <img
                      type="button"
                      id="add"
                      src="Img\tick.png"
                      onClick={addSign}></img>
                    <img id="img_v"></img>
                    <img
                      type="button"
                      id="more"
                      src="Img\more.jpg"
                      onClick={() => moreElement("drag_sign")}></img>
                    <img
                      type="button"
                      id="less"
                      src="Img\less.png"
                      onClick={() => lessElement("drag_sign")}></img>
                  </div>
                  <div id="drag_date">
                    <div>
                      <img
                        type="button"
                        id="deleteForDate"
                        src="Img\delete.png"
                        onClick={deleteDate}></img>
                      <img
                        type="button"
                        id="addForDate"
                        src="Img\tick.png"
                        onClick={addDate}></img>
                    </div>
                    <div>
                      <span id="signed_date">
                        Dated: <span id="displayed_date"></span>
                      </span>
                    </div>
                    <img
                      type="button"
                      id="moreForDate"
                      src="Img\more.jpg"
                      onClick={() => moreElement("drag_date")}></img>
                    <img
                      type="button"
                      id="lessForDate"
                      src="Img\less.png"
                      onClick={() => lessElement("drag_date")}></img>
                  </div>
                  <div id="drag_text">
                    <img
                      type="button"
                      id="deleteForText"
                      src="Img\delete.png"
                      onClick={deleteText}></img>
                    <img
                      type="button"
                      id="addForText"
                      src="Img\tick.png"
                      onClick={addText}></img>
                    <input
                      id="displayed_text"
                      type="text"
                      placeholder="Write here.."></input>
                    <img
                      type="button"
                      id="moreForText"
                      src="Img\more.jpg"
                      onClick={() => moreElement("drag_text")}></img>
                    <img
                      type="button"
                      id="lessForText"
                      src="Img\less.png"
                      onClick={() => lessElement("drag_text")}></img>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Invite Signers">
              <div className="invite">
                <h2>Invite Signers</h2>
                <p>
                  Invite signers by email addresses, Telegram Handles, or wallet
                  addresses.
                </p>
              </div>

              <Table className="folders-table-1" responsive>
                <tr className="table-heading">
                  <th>Name</th>
                  <th>Email Address</th>
                  <th>Telegram</th>
                  <th>Wallet Address</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td className="center">mfaraz568</td>
                  <td className="center">mfaraz568@gmail.com</td>
                  <td className="center">Add telegram handle</td>
                  <td className="center">Add wallet address</td>
                  <td className="center">
                    <Image src="Images/esign/actionicon.svg" />
                  </td>
                </tr>
              </Table>
            </Tab>

            <Tab eventKey="review" title="Review and Send">
              <div className=" mt-3 mb-4">
                <WizardForm />
              </div>
            </Tab>
          </Tabs>
          <button class="downbutton" onClick={downloadPDF}>
            Download
          </button>
        </div>
      </div>

      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Add Signature</p>
          <br />
          <div>
            <canvas id="signature"></canvas>
            <br />
            <button id="clear-signature">Clear</button>
            <button id="add-signature" onClick={handleConfirmAddSign}>
              Add
            </button>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        size="lg"
        dialogClassName="modal-90w"
        onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="templetemodal">
            <div className="modaltitle">
              <div className="temtitle d-flex">
                <h4>
                  Non-Disclosure Agreement{" "}
                  <Image src="Images/esign/invoiceicon.svg" className="ml-2" />{" "}
                </h4>
                <Link to="/" className="">
                  waiver and release of liability
                </Link>
              </div>
              <p>this is template of waiver and release of liability.</p>
            </div>
            <Link to="" className="btnblue">
              use this Template
            </Link>
          </div>
          <div className="contractmodalbody">
            <div className="bgwhite">
              <h5>General Release Of Liability Form</h5>
              <p>
                i, HEREBY ASSUME ALL OF THE RISKS OF PARTICIPATING IN ANA/ALL
                ACTIVITIES
              </p>
              <p>
                Being conducted by HOST, including by way of example and not
                limitation, any risks that many arise from negligence or
                carelessness on the part of the person or entities being
                released, frm dangerous or defective equipment or property
                owned, maintained, or controlled by them , or because of therir
                possible liability without fault.{" "}
              </p>
              <p>
                Being conducted by HOST, including by way of example and not
                limitation, any risks that many arise from negligence or
                carelessness on the part of the person or entities being
                released, frm dangerous or defective equipment or property
                owned, maintained, or controlled by them , or because of therir
                possible liability without fault.{" "}
              </p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="modalfooter">
            <ul className="modalcontent">
              <li>
                <span> Contract Type : </span> Intellectual Property
              </li>
              <li>
                <span>Applicable jurisdictions :</span> Worldwide
              </li>
              <li>
                <span>Created By :</span> EthSign
              </li>
            </ul>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={show2}
        dialogClassName="modal-90w"
        onHide={handleClose2}
        className="contract">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="templetemodal d-block">
            <div className="modaltitle">
              <div className="temtitle d-block">
                <h4>How do you want to send the contract? </h4>
                <p>
                  Choose how you want to send your contract. Generating signing
                  links is suitable if you are collecting signatures from a
                  number of Signers.
                </p>
              </div>
            </div>
            <ul className="usertempl">
              <li>
                <input
                  type="radio"
                  className="userinviteradio"
                  name="userinviteradio"
                  checked
                />
                <div className="userinvite">
                  <Image src="Images/homepage/inviteuser.svg"></Image>
                  <h4>Invite Signers</h4>
                  <p>Fundraising contracts, employment contracts, etc..</p>
                </div>
              </li>
              <li>
                <input
                  type="radio"
                  className="userinviteradio"
                  name="userinviteradio"
                />
                <div className="userinvite">
                  <Image src="Images/homepage/genratelink.svg"></Image>
                  <h4>generate Signing Links</h4>
                  <p>
                    NDAs, terms of services, payments, DAO member agreements,
                    etc.
                  </p>
                </div>
              </li>
            </ul>
            <Link
              to=""
              className="btnblue"
              closeButton
              variant="primary"
              onClick={handleClose2}>
              Continue
            </Link>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        show={show3}
        dialogClassName="modal-90w"
        onHide={handleClose3}
        className="contract">
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="templetemodal d-block">
            <div className="modaltitle">
              <div className="temtitle d-block">
                <h4>Share Contract Signing Link </h4>
                <p>Anyone with the link can sign the contract.</p>
              </div>
            </div>
            <div className="copymsg">
              <p>
                0xA0Ae84...F18daDD7 sent you a document to sign. open the link
                and input the password to sign the contract. <br></br>
                <br></br>Contract Link :https:/app.mesprotocol.com/spot/eth-usdc
              </p>
              <div className="copybutton">
                <Link to="" className="btn-white">
                  <Image src="Images/homepage/copy.svg" /> Copy Message
                </Link>
                <Link to="" className="btn-blue">
                  Share With Email
                </Link>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CreateContract
