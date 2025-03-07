export default async function copyText(text: string) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        return error
    }
}