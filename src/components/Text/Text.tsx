import React from 'react'
import styled from 'styled-components'

interface TextProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'meta1' | 'meta2'
  children?: React.ReactNode
  maxLines?: number
  fontWeight?: number | string
  color?: string
  textAlign?: 'start' | 'end' | 'center'
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
    case 'meta1':
      return <Meta1 {...rest}>{children}</Meta1>
    case 'meta2':
      return <Meta2 {...rest}>{children}</Meta2>
  }
}

const CoreText = styled.p<TextProps>`
  color: ${(props) => props.theme.text.default};
  white-space: pre-line;
  font-weight: 400;
  line-height: 1.5;

  /* maxLines */
  overflow: ${(props) => props.maxLines && 'hidden'};
  text-overflow: ${(props) => props.maxLines && 'ellipsis'};
  display: ${(props) => props.maxLines && '-webkit-box'};
  -webkit-line-clamp: ${(props) => props.maxLines && props.maxLines};
  -webkit-box-orient: ${(props) => props.maxLines && 'vertical'};

  /* fontWeight */
  font-weight: ${(props) => props.fontWeight && props.fontWeight};

  /* color */
  color: ${(props) => props.color && props.color};

  /* textAlign */
  text-align: ${(props) => props.textAlign && props.textAlign};
`

export const H1 = styled(CoreText)`
  font-size: 3rem;
  font-weight: 700;
`

export const H2 = styled(CoreText)`
  font-size: 2.5rem;
  font-weight: 700;
`

export const H3 = styled(CoreText)`
  font-size: 2rem;
  font-weight: 500;
`

export const H4 = styled(CoreText)`
  font-size: 1.5rem;
`

export const H5 = styled(CoreText)`
  font-size: 1.375rem;
`

export const H6 = styled(CoreText)`
  font-size: 1.125rem;
`

export const P = styled(CoreText)`
  font-size: 1rem;
`

export const Meta1 = styled(CoreText)`
  font-size: 0.88rem;
`

export const Meta2 = styled(CoreText)`
  font-size: 0.75rem;
`

export default Text
