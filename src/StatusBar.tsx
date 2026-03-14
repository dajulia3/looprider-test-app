import { useState, useEffect } from 'react'

function StatusBar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ padding: '8px', textAlign: 'center', fontSize: '14px', opacity: 0.7 }}>
      {time.toLocaleTimeString()}
    </div>
  )
}

export default StatusBar
