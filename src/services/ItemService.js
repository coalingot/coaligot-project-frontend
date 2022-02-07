import apiClient from '../services/AxiosClient.js'

export default {
    getAllItems() {
        return apiClient.get('/items')
    },
    getItem(id) {
        return apiClient.post('/items/', id)
    },
    /*     uploadFile(file) {
            let formData = new FormData()
            formData.append('file', file)
            return apiClient.post('/uploadFile', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
        } */
}