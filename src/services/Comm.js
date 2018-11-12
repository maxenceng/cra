import io from 'socket.io-client'
import axios from 'axios'

/* eslint-disable no-console */
export default class Comm {
  constructor() {
    this.comm = {}
    this.comm.io = {}
    this.socket = ''
    this.emitOnConnect = this.emitOnConnect.bind(this)
  }

  toString = () => ''

  loadPres = (presId, callback, callbackErr) => {
    axios.get('http://localhost:1337/loadPres')
      .then((data) => {
        const size = Object.keys(data.data).length
        console.log('raw data')
        console.log(data.data)
        let loadedPres = ''
        if (size > 0) {
          console.log('key')
          console.log(Object.keys(data.data)[0])
          console.log('data')
          console.log(data.data[Object.keys(data.data)[0]])
          loadedPres = data.data[Object.keys(data.data)[0]]
        }
        callback(loadedPres)
      })
      .catch(error => callbackErr(error))
  }

  loadContent = (callback, callbackErr) => {
    axios.get('http://localhost:1337/contents')
      .then((data) => {
        //console.log('raw content data')
        //console.log(data.data)
        const size = Object.keys(data.data).length
        const contentMap = {}
        for (let i = 0; i < size; i += 1) {
          const cObj = data.data[Object.keys(data.data)[i]]
          contentMap[cObj.id] = cObj
        }

        callback(contentMap)
      })
      .catch(error => callbackErr(error))
  }

  savePres = (presJson, callbackErr) => {
    axios.post('http://localhost:1337/savePres', presJson)
      .then(response => console.log(response))
      .catch(error => callbackErr(error))
  }

  saveContent = (contentJson, callbackErr) => {
    axios.post('http://localhost:1337/contents', contentJson)
      .then(response => console.log(response))
      .catch(error => callbackErr(error))
  }

  fileUpload = (fileC, callback, callbackErr) => {
    const data = new FormData()
    data.append('file', fileC)
    axios.post('/file-upload', data)
      .then((response) => {
        console.log(response)
        callback()
      })
      .catch(error => callbackErr(error))
  }

  emitOnConnect = (message) => {
    console.log('message')
    console.log(message)
    console.log('socket')
    console.log(this.socket)
    console.log('this.comm.io.uuid')
    console.log(this.comm.io.uuid)
    this.socket.emit('data_comm', { id: this.comm.io.uuid }, test => console.log(test))
  }

  socketConnection = (uuid) => {
    this.socket = io.connect(process.env.SOCKET_URL)
    this.comm.io.uuid = uuid
    this.socket.on('connection', message => this.emitOnConnect(message))

    this.socket.on('newPres', socket => console.log(socket))
    this.socket.on('slidEvent', socket => console.log(socket))
  }

  backward = () => {
    this.socket.emit('slidEvent', { CMD: 'PREV' })
  }

  forward = () => {
    this.socket.emit('slidEvent', { CMD: 'NEXT' })
  }

  play = (presUUID) => {
    this.socket.emit('slidEvent', { CMD: 'START', PRES_ID: presUUID })
  }

  pause = () => {
    this.socket.emit('slidEvent', { CMD: 'PAUSE' })
  }

  begin = () => {
    this.socket.emit('slidEvent', { CMD: 'BEGIN' })
  }

  end = () => {
    this.socket.emit('slidEvent', { CMD: 'END' })
  }
}
