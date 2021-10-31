import React, { useRef } from 'react'
import FadeIn from './FadeIn'
import useOnScreen from './useOnScreen'
import { isIPhone13, isChrome } from 'react-device-detect'

interface IFadeOnViewProps {
  children?: React.ReactNode
}

export const FadeOnView = ({ children }: IFadeOnViewProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isViewing = useOnScreen(ref)

  if (isIPhone13 && isChrome) {
    return <div ref={ref}>{children}</div>
  }

  return (
    <div ref={ref}>
      <FadeIn visible={isViewing}>{children}</FadeIn>
    </div>
  )
}

export default FadeOnView
