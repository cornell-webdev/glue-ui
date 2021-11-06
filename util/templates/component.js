module.exports = (componentName) => ({
  content: `import React from 'react'
import styled from 'styled-components'

interface I${componentName}Props {
  
}

export const ${componentName} = ({  }: I${componentName}Props) => {
  return (
    <Container>
      ${componentName}
    </Container>
  )
}

const Container = styled.div\`
  
\`

export default ${componentName}
`,
  extension: `.tsx`
});
