let queue = []

// sendProfileQueue every 5 seconds
setInterval(sendProfileQueue, 5000)

export const onRenderCallback = (
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions,
) => {
  queue.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  })
}

function sendProfileQueue() {
  if (!queue.length) {
    return Promise.resolve()
  }

  const queueToSend = [...queue];
  queue = [];

  // here's where we'd actually make the server call to send the queueToSend
  // data to our backend...
  console.info('sending profile queue', queueToSend)

  return Promise.resolve()
}