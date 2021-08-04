import { create } from 'apisauce';

const apiClient = create({
    // Needs to be own IP address for this to work for andriod (localhost doesn't work for andriod)
    // baseURL: 'http://24.16.30.186:9000/api'

    //below is temp placeholder to continue course, need to change as per above
    baseURL: 'http://10.0.0.92:9000/api'
});

export default apiClient;