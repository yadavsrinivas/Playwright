class APIUtils
{
    constructor(apiContext,loginPayLoad)
    {
        this.apiContext = apiContext;
        this.loginPayLoad = loginPayLoad;

    }

   async getToken()
    {
        const loginResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
            {
                data:this.loginPayLoad
            });
            
            const loginResponseJson = await loginResponse.json();
            const token = loginResponseJson.token;
            console.log(token);
            return token;
    }

    async createOrder(orderPayLoad)
    {
        let response = {};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
            data: orderPayLoad,
            headers:
            {
                       'Authorization': response.token,
                       'content-type': 'application/json'
        
            }
                }
        )
        const orderResponseJSON = await orderResponse.json();
        console.log(orderResponseJSON);
        const orderId = orderResponseJSON.orders[0];
        console.log("Order ID:", orderId);
        response.orderId = orderId;
        return response;
        }
        
    }

    module.exports = {APIUtils};
//51 complete