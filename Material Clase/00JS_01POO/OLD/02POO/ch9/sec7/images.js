'use strict'

const loadImage = url => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    const callback = () => {
      if (request.status == 200) { 
        const blob = new Blob([request.response], {type: 'image/png'})
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        resolve(img)
      } else {
        reject(Error(`${request.status}: ${request.statusText}`))
      }
    }

    request.open('GET', url)
    request.responseType = 'blob'
    request.addEventListener('load', callback)
    request.addEventListener('error', event => reject(Error('Network error')));
    request.send()
  })  
}

document.addEventListener('DOMContentLoaded', () => {
  const imgdiv = document.getElementById('images')
  
  const promises = [
    loadImage('../../hanafuda/1-1.png'),
    loadImage('../../hanafuda/1-2.png'),
    loadImage('../../hanafuda/1-3.png'),
    loadImage('../../hanafuda/1-4.png')]
  Promise.all(promises)
    .then(images => { for (const img of images) imgdiv.appendChild(img) })
})