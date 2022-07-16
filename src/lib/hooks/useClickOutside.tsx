import { useEffect, useRef } from 'react'

const useClickOutside = (cb: () => void) => {
  const ref: any = useRef(null)

  useEffect(() => {
    const handleClickOutside = (evt: MouseEvent) => {
      console.log('PROC', ref.current && !ref.current.contains(evt.target))
      if (ref.current && !ref.current.contains(evt.target)) {
        cb()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return { ref }
}

export default useClickOutside
