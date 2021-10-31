import React, { JSXElementConstructor, PropsWithChildren, useEffect, useState } from 'react'
import styled from 'styled-components'

interface Props {
  delay?: number
  transitionDuration?: number
  wrapperTag?: JSXElementConstructor<any>
  childTag?: JSXElementConstructor<any>
  className?: string
  childClassName?: string
  visible?: boolean
  onComplete?: () => any
}

export default function FadeIn(props: PropsWithChildren<Props>) {
  const [maxIsVisible, setMaxIsVisible] = useState(0)
  const transitionDuration = props.transitionDuration || 400
  const delay = props.delay || 50
  const WrapperTag = props.wrapperTag || 'div'
  const visible = typeof props.visible === 'undefined' ? true : props.visible

  useEffect(() => {
    let count = React.Children.count(props.children)
    if (!visible) {
      // Animate all children out
      count = 0
    }

    if (count === maxIsVisible) {
      // We're done updating maxVisible, notify when animation is done
      const timeout = setTimeout(() => {
        if (props.onComplete) props.onComplete()
      }, transitionDuration)
      return () => clearTimeout(timeout)
    }

    // Move maxIsVisible toward count
    const increment = count > maxIsVisible ? 1 : -1
    const timeout = setTimeout(() => {
      setMaxIsVisible(maxIsVisible + increment)
    }, delay)
    return () => clearTimeout(timeout)
  }, [React.Children.count(props.children), delay, maxIsVisible, visible, transitionDuration])

  return (
    <WrapperTag className={props.className}>
      {React.Children.map(props.children, (child, i) => {
        return (
          <Child
            className={props.childClassName}
            transitionDuration={transitionDuration}
            maxIsVisible={maxIsVisible}
            i={i}>
            {child}
          </Child>
        )
      })}
    </WrapperTag>
  )
}

export interface IChildProps {
  transitionDuration?: number
  maxIsVisible: number
  i: number
}

const Child = styled.div<IChildProps>`
  /* -webkit-transition: ${(props) => `-webkit-opacity ${props.transitionDuration}ms`};
  -webkit-transition: ${(props) => `-webkit-transform ${props.transitionDuration}ms`}; */
  transform: ${(props) => (props.maxIsVisible > props.i ? 'none' : 'translateY(20px)')};
  -webkit-transform: ${(props) => (props.maxIsVisible > props.i ? 'none' : 'translateY(20px)')};
  opacity: ${(props) => (props.maxIsVisible > props.i ? 1 : 0)};
  -webkit-opacity: ${(props) => (props.maxIsVisible > props.i ? 1 : 0)};
  transition: ${(props) => `all ${props.transitionDuration}ms`};
  -webkit-transition: ${(props) => `all ${props.transitionDuration}ms`};
`
