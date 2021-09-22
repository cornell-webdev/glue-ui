module.exports = (componentName) => ({
  content: `import React from 'react'
import styled from 'styled-components'

interface ${componentName}Props {
  
}

export const ${componentName} = ({  }: ${componentName}Props) => {
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
