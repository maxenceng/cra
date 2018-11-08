export default class Tools {
  generateUUID = () => {
    let date = new Date().getTime()
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const random = (date + Math.random() * 16) % 16 | 0
      date = Math.floor(date / 16)
      return (c === 'x' ? random : ((random & 0x3) | 0x8)).toString(16)
    })
  }

  getNextSlidIndex = (array, slidId) => {
    let index = -1
    for (let i = 0; i < array.length; i += 1) {
      if (slidId === array[i].id) {
        index = i
        break
      }
    }
    if (index + 1 < array.length) {
      return index + 1
    }
    return array.length - 1
  }

  getPrevSlidIndex = (array, slidId) => {
    let index = -1
    for (let i = 0; i < array.length; i += 1) {
      if (slidId === array[i].id) {
        index = i
        break
      }
    }
    if (index - 1 >= 0) {
      return index - 1
    }
    return 0
  }
}
