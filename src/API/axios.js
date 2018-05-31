import axiosRetry from 'axios-retry';
import axios from 'axios';

/**
 * Axios wrapper
 * @return {AxiosInstance}
 */
export default function (xToken) {
    const headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    };

    if (xToken) {
        headers['X-Auth-Token'] = xToken;
    }
    const instance = axios.create({
        headers,
        validateStatus: function () {
            return () => 400;
        },
    });
    const retryCondition = (error) => !error.response ||
        error.response.status === 504;

    axiosRetry(instance, {
        retries: 0,
        retryCondition,
    });

    return instance;
}
