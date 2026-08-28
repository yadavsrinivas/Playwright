class APiUtils {
    constructor(apiContext, loginPayLoad) {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;
    }
 
    async getToken() {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", {
            data: this.loginPayLoad
        }); // 200, 201

        if (!loginResponse.ok()) {
            throw new Error(`Login failed: ${loginResponse.status()} ${await loginResponse.text()}`);
        }

        const loginResponseJson = await loginResponse.json();
        const token = loginResponseJson.token;

        if (!token) {
            throw new Error('Authentication token was not returned');
        }

        return token;
    }
 
    async createOrder(orderPayLoad) 
    {
        let response = {};
        response.token = await await this.getToken();
        

        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", 
            {
            data: orderPayLoad,
            headers: {
                'Authorization': response.token,
                'Content-Type': 'application/json'
            },
        })
 
        if (!orderResponse.ok()) {
            throw new Error(`Order creation failed: ${orderResponse.status()} ${await orderResponse.text()}`);
        }

        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
 
        return { token, orderId: orderResponseJson.orders[0] };
    }
}
 
module.exports = { APiUtils };
