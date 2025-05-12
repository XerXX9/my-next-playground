export function Image({avatarUrl, alt}: ImageProps) {
    return(
        <img src={avatarUrl} width={100} height={100}></img>
    );
}

interface ImageProps {
    avatarUrl: string
    alt?: string
}