import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7fa1606616a2d7aa6079d40c27b99b04098ca607b377548acb9d8d23b1836b40'
      }
})