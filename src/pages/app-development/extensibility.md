# Extensibility in Adobe Commerce

Adobe Commerce is renowned for its flexibility and extensibility, allowing businesses to adapt their e-commerce platforms to their unique needs. With the evolving demands of e-commerce, Adobe Commerce offers various methods for extending its capabilities. These methods can be broadly categorized into **in-process, out-of-process, and hybrid** extensibility. Each approach has its own set of advantages and use cases, and understanding them is crucial for developers and businesses looking to maximize their platform's potential.

## In-Process Extensibility

In-process extensibility refers to the method where custom code or extensions run within the same process as the core Adobe Commerce application. This is the traditional and most commonly used approach for extending Adobe Commerce functionalities.

### Advantages

* Performance: Since the custom code runs within the same process, it can directly interact with the core application, resulting in lower latency and faster execution times.  
* Simplicity: In-process extensions are typically easier to develop and deploy as they leverage the existing infrastructure and codebase  
* Access to Core Functions: Developers have direct access to the core functions and data structures of Adobe Commerce, allowing for deep customization.

### Basic Use Cases

* Customizing the default checkout process  
    
  Using in-process extensibility to modify the checkout workflow allows for seamless integration with the core Adobe Commerce application, enabling precise adjustments such as adding custom fields or changing the sequence of steps to better fit business needs. In this case we are modifying default checkout solution.  
    
* Adding new payment gateways  
    
  By integrating new payment gateways within the same process as the core application, businesses can ensure faster and more reliable payment processing, leveraging existing infrastructure for a smoother implementation.  
    
* Modifying product display logic  
    
  In-process adjustments to product display logic enable direct manipulation of the core application’s data structures and functions, allowing for real-time updates to how products are presented, which can include adding of new custom attributes or PageBuilder sections.

### Considerations

* Resource Contention: Extensions share the same resources (CPU, memory) with the core application, which can lead to performance bottlenecks if not managed properly.  
* Stability: Poorly written extensions can potentially destabilize the entire application, making thorough testing crucial.

### Example

There is some functionality that is not recommended to extend or build as an out-of-process.

List of the possible use cases: 

* Create new blocks and components for native Adobe Commerce (Luma, Base) templates.  
* Modifying existed AC objects (customers, orders, products, etc)




## Out-of-Process Extensibility

Out-of-process extensibility involves running custom code or extensions in separate processes, often on different servers or services. This approach is increasingly popular with the rise of microservices and serverless architectures.

### Advantages

* Isolation: Custom code runs independently of the core application, reducing the risk of crashing or slowing down the main site.  
* Scalability: Out-of-process services can be scaled independently, allowing for better resource management and scalability.  
* Technology Agnostic: Developers can use different programming languages or frameworks for their extensions, providing greater flexibility.

### Use Cases

* Integrating with third-party services (e.g., CRM, marketing automation)  
    
  Running integrations as separate processes allows for seamless communication with external systems like CRM or marketing automation tools, enabling efficient data exchange and synchronization without impacting the core application’s performance.

* Handling intensive processing tasks (e.g., data analysis, image processing)

  Offloading resource-intensive tasks such as data analysis or image processing to separate processes ensures these operations do not burden the main application, allowing for better scalability and performance.

* Implementing microservices for specific functionalities (e.g., search, recommendations)

  Using microservices to handle specific functions like search or recommendations provides specialized, scalable solutions that can be independently developed, deployed, and maintained, improving overall system modularity and flexibility.

### Considerations

* Complexity: Setting up and managing out-of-process extensions can be more complex, requiring additional infrastructure and communication protocols (e.g., additional database, elasticsearch, etc.).


### Example

Order Export from Adobe Commerce to 3rd Party systems.

**Overview**

Quite a typical task for most E-commerce projects it’s an export of Orders after they are created in the AC system to external Order Management Systems. So by using Adobe App Builder it is possible to build an out-of-process microservice designed to seamlessly transfer order data from AC to an Order Management System. Lets name this service \- Order Export Service (OES). This service can operate independently of the core AC application, ensuring efficient data synchronization and reducing the load on the AC backend. It can leverage APIs and webhooks to facilitate real-time and batch data export, providing a robust solution for keeping OMS system up-to-date with the latest order information.

**Components and Workflow**

**Order Data Collection:**

Webhooks: AC has to be configured to trigger webhooks whenever a new order is placed. These webhooks send order data to the Order Export Service. This can be achieved with standard Adobe I/O Events for Adobe Commerce. ([https://developer.adobe.com/commerce/extensibility/events/](https://developer.adobe.com/commerce/extensibility/events/))

**Order Export Service structure**:

* API Endpoint: The service exposes an API endpoint to receive order data from Magento. This endpoint is designed to handle both real-time webhook calls and batch data transmissions.

* Data Transformation: The service processes and transforms the incoming order data into a format compatible with the OMS system. This may involve mapping AC order fields to corresponding OMS fields, converting data types, and aggregating related information.  
    
* Error Handling: Robust error handling mechanisms are in place to log any issues encountered during data transformation and transmission, ensuring data integrity and providing alerts for troubleshooting.

**OMS Integration:**

**OMS API Integration:** The service communicates with the OMS system via its API.  
**Data Transmission:** Order data is transmitted to the OMS in real-time, depending on the configuration. The service handles API rate limits and retries in case of network or service disruptions.

![][image1]

## Hybrid Extensibility

Hybrid extensibility combines elements of both in-process and out-of-process approaches, leveraging the strengths of each. This method allows for more flexible and resilient extensions while maintaining the performance benefits of in-process code where necessary.

### Advantages

* Flexibility: Developers can choose the best approach for each specific functionality, allowing for a more tailored solution.  
* Resilience: Critical functionalities can be isolated to prevent cascading failures, while less critical or performance-sensitive tasks can be handled in-process.  
* Optimization: Hybrid models can optimize performance and resource utilization by balancing in-process and out-of-process workloads.

### Use Cases

* Complex integrations that require both real-time processing and asynchronous tasks  
* Scenarios where maintaining performance is critical, but isolation is also necessary for certain tasks  
* Integrations where API coverage of Adobe Commerce is not sufficient but required

### Considerations

* Coordination: Managing hybrid solutions requires careful coordination to ensure seamless communication and integration between in-process and out-of-process components.  
* Resource Management: Efficiently balancing resources between in-process and out-of-process tasks is crucial to avoid bottlenecks and ensure optimal performance.

### Example

To make the example easier, let's have a look at Out-of-process extensibility example. 

1. You setting up a webhook to Export Order to App Builder instance  
2. App Builder making data transformation  
3. App Builder sends data to OMS.

But what if you need to request additional information from Adobe Commerce to complete the order export? For example, you are exporting an order, but the OMS also requires the customer object to be imported before it can accept the order information. So, your App Builder application has to make an additional call to Adobe Commerce to retrieve the customer data. But what if the customer has some custom metadata that is not available via GraphQL or REST API?

For this use case, you need to develop an extension on the Adobe Commerce side that will modify the GraphQL response, perform some custom logic on the Adobe Commerce instance, and deliver the expected results back.

![][image2]

## Conclusion

Adobe Commerce's extensibility options provide robust mechanisms for customizing and enhancing e-commerce platforms. In-process extensibility offers simplicity and performance, making it ideal for direct customizations. Out-of-process extensibility provides isolation and scalability, suitable for complex integrations and intensive tasks. Hybrid extensibility offers the best of both worlds, combining flexibility and resilience.

Choosing the right extensibility method depends on the specific needs of the business, the complexity of the required customizations, and the desired performance and scalability outcomes. By leveraging these extensibility approaches, businesses can create a highly customized and efficient e-commerce platform tailored to their unique requirements.  


[image1]: <data:image/png;base64,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l1/DcIdTmTob0Rw2eIbrHtxmhzLMfvif7NhHfvo1tMWUfpnh0H1VZRBYd2Vy614wCh5MOU6s6Tejl1uCvftr91Pr10rXple9lbNuzZpkVLHGnvVvXra9ZHkPcVoYi/xquELOf+7FgZ+2L7N3mccmz3Cfn2/37sr8ey87OGXyq1a/pHfnV3G/9LmkVZWMMXJfCR9Erq6lETxeTG4Rud41Z9IoP964L+/6E6r4kw3c3FmJ5CK70vIS5TvEj/jnBW5Cv+xL1V2y5WLOxLHBM5yfmArh8xiffaf6/Bd08uA4eWY3vs/OaHItdSF7Jqo933kk5Tc3rcWD68mVSN19Hu2nfz/8U7kC9nuTZ7jP7Z/Y/95nB6e5p2KVNKYdvxZ/kDm14v4gbrtZsC1R8NxlOurmg0ZtOJBmeufQ//h8t0ZC2fenZ1SS8xCn9d0Rt/yvbd9WByKn7nCa75/AFmT1p7zC9/DzDTb8g1Lbfdsb/uPBaXrFffCabX/t8NTfpZFeduPpF6UnivBnJvNXx7fsudcezdbLaT9n+XyPvmiuDbb9ATT9fjdP/eGkR/VFU+dpmDLXrqkqfA+L2GARL+BeFbFH7xS+wbymgtvuh9TiqL3sXHcEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1UEB1VFBXcw/nicGQbeW3QNAPO8EtBg/PFtv6dD2wwrhSwqho2xYHBNkf07V135t19/1I4DNBL6lbKGfXnc7clRIrYRBhL2owcTJMOKu8dZJLadlO15v9fdq67H6lVYjq8VaPabxi9h1W6023JgGn6NKnf1xK/tMl6/zrSk3XbjP/yAkbaRlhy6u7Tax3LUlra/29dWuvvaHuZQ+AYXVvgeFb7BvKYWs1l0T8plkbArnUbUlVvjF4tsRnUZvXlofXA3uvHH8bWOcX9kUK9LT4aSdKSTFoetsdiLhr3hzc3wYNB0s1bQkkZNAmn24thG/ildeC5ydFI7llYls5JdObA26HQkPBbTEWvHTwCxDRYLrnoncld+CE1THmumfiGJCW9vS6bmxuWnGFO7uojH1966crf4Ge9n7Ga3kjFx5nZskUUfY5ev8D0sfIMLK3yPCt9gXlPP4Rab4YAvIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioIjioWr/g/soObJ5NOsSdzPX1Cy4ufpd3swPfbAmH+G1+Z64HmesilezAiilF2ZGFrdohb9AhDrMD08HJ7lN2ZJUk2YEirNYhb84h7mTnNwAAAAAAAAAAAAAAAABYmv8Dh0hy2ftlBZkAAAAASUVORK5CYII=>

[image2]: <data:image/png;base64,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>