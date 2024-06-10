export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66636f4b5e355cda1437f830?read_key=${process.env.READ_KEY}&props=slug,title,metadata`)

        if(!res.ok){
            throw new Error("feiled to fetch data")
        }

        return res.json();

    } catch (error) {
        throw new Error("feiled to fetch data")
    }
}