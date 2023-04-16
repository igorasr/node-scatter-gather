import os from 'node:os';
import { formatByteToHumanSize } from '../../shared/helpers/format.js';


class HealthCheckRepository{

    async getAll(){
        return {
            status: 'up',
            memoryUsage: formatByteToHumanSize(os.totalmem() - os.freemem()),
            uptime: os.uptime()
        }
    }
}

export default HealthCheckRepository;