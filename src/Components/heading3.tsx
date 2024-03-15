export default function heading3({ children, className }: any) {
    return (
        <h3
            className={`relative scroll-m-20 text-2xl font-semibold tracking-tight text-white ${className}`}
        >
            { children }
        </h3>
    );
}