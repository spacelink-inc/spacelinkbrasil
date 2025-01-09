interface ImageProps {
    children: string
    className?: string
    alt: string
    width?: number
    height?: number
}

export function Image({ children, className, alt, width, height }: ImageProps) {
    return (
        <img
            src={children}
            alt={alt}
            width={width}
            height={height}
            className={className}
        />
    )
}
