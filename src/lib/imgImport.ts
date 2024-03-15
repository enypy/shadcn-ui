export default function imgImport(fileName : string) : string {

    return new URL(`/src/assets/images/${fileName}`, import.meta.url).href
}