"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[6649],{55789:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a=t(58168),r=t(80045),o=(t(88763),t(15680)),s=t(83407);const i=["components"],m={},c={_frontmatter:m},d=s.A;function p(e){let{components:n}=e,t=(0,r.A)(e,i);return(0,o.mdx)(d,(0,a.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"runtime-action-with-a-callback-to-commerce"},"Runtime Action with a Callback to Commerce"),(0,o.mdx)("p",null,"This example provides sample code for a runtime action that can consume an Adobe Commerce event and make an API call back to Commerce to obtain more information before sending data to a third-party system."),(0,o.mdx)("h2",{id:"runtime-action-example-code"},"Runtime action example code"),(0,o.mdx)("p",null,"You could use the following JavaScript code sample to create a runtime action for consuming ",(0,o.mdx)("inlineCode",{parentName:"p"},"observer.sales_order_save_after")," events."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"const { Core } = require('@adobe/aio-sdk')\nconst { errorResponse } = require('../utils')\nconst { getCommerceOauthClient } = require('../oauth1a')\nconst { sendOrderToErpSystem } = require('../erp')\n  \nasync function main (params) {\n  const logger = Core.Logger('main', { level: params.LOG_LEVEL || 'info' })\n  \n  try {\n    event_payload = params.data.value\n    if (!event_payload.hasOwnProperty('extension_attributes')) {\n      // Fetch extension attributes for order and add to order event payload\n      const oauth = getCommerceOauthClient(\n        {\n          url: params.COMMERCE_BASE_URL,\n          consumerKey: params.COMMERCE_CONSUMER_KEY,\n          consumerSecret: params.COMMERCE_CONSUMER_SECRET,\n          accessToken: params.COMMERCE_ACCESS_TOKEN,\n          accessTokenSecret: params.COMMERCE_ACCESS_TOKEN_SECRET\n        },\n        logger\n      )\n      const content = await oauth.get('orders/' + event_payload.entity_id)\n      event_payload.extension_attributes = content.extension_attributes\n    }\n\n    // Send event data to a third-party ERP system\n    await sendOrderToErpSystem(event_payload)\n      \n    return {\n      statusCode: 200,\n      body: event_payload\n    }\n  } catch (error) {\n    // log any server errors\n    logger.error(error)\n    // return with 500\n    return errorResponse(500, 'server error', logger)\n  }\n}\n  \nexports.main = main\n")),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"main")," action first accesses the payload for a received ",(0,o.mdx)("inlineCode",{parentName:"p"},"observer.sales_order_save_after")," event:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"event_payload = params.data.value\n")),(0,o.mdx)("p",null,"The event payload for this event could not contain the saved order's extension attributes. If needed, you can fetch the extension attributes for the specific order captured by the event using a Commerce API call:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"  const oauth = getCommerceOauthClient(\n    {\n      url: params.COMMERCE_BASE_URL,\n      consumerKey: params.COMMERCE_CONSUMER_KEY,\n      consumerSecret: params.COMMERCE_CONSUMER_SECRET,\n      accessToken: params.COMMERCE_ACCESS_TOKEN,\n      accessTokenSecret: params.COMMERCE_ACCESS_TOKEN_SECRET\n    },\n    logger\n  )\n  const content = await oauth.get('orders/' + event_payload.entity_id)\n")),(0,o.mdx)("p",null,"This example uses functions from the ",(0,o.mdx)("inlineCode",{parentName:"p"},"oauth1a")," module, as defined in the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/adobe/adobe-commerce-samples/blob/main/admin-ui-sdk/menu/custom-menu/actions/oauth1a.js"},"adobe-commerce-samples repo"),"."),(0,o.mdx)("p",null,"You can retrieve the ",(0,o.mdx)("inlineCode",{parentName:"p"},"consumerKey"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"consumerSecret"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"accessToken"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"accessTokenSecret")," provided in the input to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"getCommerceOauthClient")," function from Commerce after creating and activating an ",(0,o.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/en/docs/commerce-admin/systems/integrations"},"Integration")," in the Commerce admin. You can configure these values in an App Builder ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/configuration/#env"},".env file")," and then ",(0,o.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/app-builder/docs/guides/configuration/#using-environment-variables-in-runtime-actions"},"pass them as inputs to the App Builder action")," through the action's configuration."),(0,o.mdx)("p",null,"You can now add the order's extension attributes retrieved from Commerce to the order event payload, and send the payload to a third-party Enterprise Resource Planning (ERP) system using a custom module."),(0,o.mdx)("p",null,"After creating a runtime action using this code, you can create an event registration to subscribe to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"observer.sales_order_save_after")," event and configure the new runtime action to receive the event notifications."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-consume-events-examples-runtime-action-commerce-callback-md-f978c34e343763da4dda.js.map