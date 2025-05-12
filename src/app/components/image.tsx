export function Image({avatarUrl, alt}: ImageProps) {
    return(
        <img src={avatarUrl} width={800} height={800}></img>
    );
}

interface ImageProps {
    avatarUrl: string
    alt?: string
}