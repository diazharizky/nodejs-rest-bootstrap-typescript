import server from '../src/routes'
import cluster from 'cluster'
import os from 'os'

const cpuCount = os.cpus.length

if (cluster.isPrimary) {
  for (let i = 0; i < cpuCount; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker) => {
    console.log(
      'Worker with PID ' + worker.process.pid + ' has died, creating a new one'
    )
    cluster.fork()
  })
} else {
  server()
}
