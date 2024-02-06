/* eslint-disable @next/next/no-img-element */
'use client'

import { cn } from '@/lib/utils'
import React, { useEffect, useState } from 'react'

const FadeImg = (props, ref) => {
  const { src, alt, className, ...rest } = props
  const { isLoaded } = useImageIsLoaded(src)

  return (
    <img
      {...rest}
      src={src}
      alt={alt}
      ref={ref}
      loading="lazy"
      decoding="async"
      className={cn(
        'transition-opacity duration-500',
        {
          'opacity-0': !isLoaded,
          'opacity-100': isLoaded,
        },
        className
      )}
      raggable={false}
    />
  )
}

FadeImg.displayName = 'FadeImg'

function useImageIsLoaded(src) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!src) return setIsLoaded(false)

    let isMounted = true
    const image = new window.Image()

    const createStatusHandler = (status) => () => {
      if (isMounted) setIsLoaded(status)
    }

    setIsLoaded(false)
    image.onload = createStatusHandler(true)
    image.onerror = createStatusHandler(false)
    image.src = src

    return () => {
      isMounted = false
    }
  }, [src])

  return { isLoaded }
}

export default React.forwardRef(FadeImg)
