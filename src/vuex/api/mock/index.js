import device from './data/device'
import peers from './data/peers'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchDeviceInfo () {
    return fetch(device, 1000) // wait 1s before returning device info
  },
  fetchPeers () {
    return fetch(peers, 1000) // wait 1s before returning peers
  }
}