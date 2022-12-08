import React from 'react'
import classNames from 'classnames'

import './loader.scss';

interface LoaderProps {
  width?: string;
  height?: string;
  className?: string;
  style?: Record<string, any>
}

export const Loader = ({ width = '6em', height = '6em', className, style, ...attrs }: LoaderProps) => {
  const classes = classNames('Loader', className)

  const nextStyle = {
    width,
    height,
    ...style,
  }

  return <div className={classes} style={nextStyle} {...attrs} />
}
