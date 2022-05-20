export default async () => {
    try {
        const result = await fetch("https://a84388b3-ebf1-4d16-a8b7-c6db349030fe.mock.pstmn.io/orders");
        const { food } = await result.json();
        return food
    } catch (error) {
        console.log(error);
    }
}


