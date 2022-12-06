import { Link } from 'react-router-dom'

import { Container } from 'layout/Container'

interface NotFoundPageProps {
}

export const NotFoundPage = ({}: NotFoundPageProps) => (
  <Container>
    <h1 className='ui-title-1 mb-4'>
      404 - NotFound
    </h1>
    <p>
      Page not found. Visit <Link className='ui-link' to='/'>Home page</Link>.
    </p>
  </Container>
)
