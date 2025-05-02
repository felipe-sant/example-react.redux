import getRequest from "../functions/connection/getRequest";

class ApiExample {
    public static async getExample(): Promise<any> {
        try {
            const url = "https://jsonplaceholder.typicode.com/posts/1";
            const response: any = await getRequest(url)
            if ("error" in response) {
                throw new Error(response.error);
            }
            return response
        } catch (error) {
            return { error: true, message: "Error fetching data" };
        }
    }
}

export default ApiExample;