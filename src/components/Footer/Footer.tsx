import classNames from 'classnames'
import { Container } from '../../layout/Container'

import styles from "./Footer.module.scss"


interface FooterProps {
  className?: string
}

export const Footer = ({ className = '', ...attrs }: FooterProps) => {
  const classes = classNames(styles.Footer, className)

  return (
    <footer className={classes} {...attrs}>
      <Container>
        <div className="flex justify-center">
          Footer Component
        </div>
      </Container>
    </footer>
  )
}
