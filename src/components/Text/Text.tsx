import React from 'react'
import styled from 'styled-components'

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'meta'
  children?: React.ReactNode
  maxLines?: number
}

export const Text = ({ variant = 'p', children, ...rest }: TextProps) => {
  switch (variant) {
    case 'h1':
      return <H1 {...rest}>{children}</H1>
    case 'h2':
      return <H2 {...rest}>{children}</H2>
    case 'h3':
      return <H3 {...rest}>{children}</H3>
    case 'h4':
      return <H4 {...rest}>{children}</H4>
    case 'h5':
      return <H5 {...rest}>{children}</H5>
    case 'h6':
      return <H6 {...rest}>{children}</H6>
    case 'p':
      return <P {...rest}>{children}</P>
    case 'meta':
      return <Meta {...rest}>{children}</Meta>
  }
}

const CoreText = styled.p<TextProps>`
  color: ${(props) => props.theme.text.default};
  white-space: pre-line;
  font-weight: 300;
  line-height: 1.5;

  // maxLines
  overflow: ${(props) => props.maxLines && 'hidden'};
  text-overflow: ${(props) => props.maxLines && 'ellipsis'};
  display: ${(props) => props.maxLines && '-webkit-box'};
  -webkit-line-clamp: ${(props) => props.maxLines && props.maxLines};
  -webkit-box-orient: ${(props) => props.maxLines && 'vertical'};
`

export const H1 = styled(CoreText)`
  font-size: 3rem;
  font-weight: 400;
`

export const H2 = styled(CoreText)`
  font-size: 2.5rem;
  font-weight: 400;
`

export const H3 = styled(CoreText)`
  font-size: 2rem;
  font-weight: 400;
`

export const H4 = styled(CoreText)`
  font-size: 1.5rem;
`

export const H5 = styled(CoreText)`
  font-size: 1.2rem;
`

export const H6 = styled(CoreText)`
  font-size: 1.125rem;
`

export const P = styled(CoreText)`
  font-size: 1rem;
`

export const Meta = styled(CoreText)`
  font-size: 0.88rem;
`

export default Text
