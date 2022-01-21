import { useEffect, useRef, useState } from "react";

export default function Countdown() {
  const [remainingTime, setRemainingTime] = useState(10000)
  const end = useRef(new Date().getTime() + remainingTime)

  useEffect(() => {
    const interval = setInterval(() => {
      const newRemainingTime = end.current - new Date().getTime()
      if (newRemainingTime <= 0) {
        clearInterval(interval)
        setRemainingTime(0)
      } else {
        setRemainingTime(newRemainingTime)
      }
    })
    return () => clearInterval(interval)
  }, [])
  return remainingTime
}