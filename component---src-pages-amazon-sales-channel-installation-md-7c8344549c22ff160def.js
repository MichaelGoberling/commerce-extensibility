"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[2311],{23695:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return l},default:function(){return u}});var t,o=a(87462),r=a(63366),i=(a(15007),a(64983)),d=a(91515),m=["components"],l={},p=(t="InlineAlert",function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.mdx)("div",e)}),s={_frontmatter:l},c=d.Z;function u(e){var n=e.components,a=(0,r.Z)(e,m);return(0,i.mdx)(c,(0,o.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"install-the-amazon-sales-channel-app"},"Install the Amazon Sales Channel app"),(0,i.mdx)(p,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,i.mdx)("p",null,"Review the ",(0,i.mdx)("a",{parentName:"p",href:"prerequisites.md"},"Prerequisites")," before you attempt to install the Amazon Sales Channel app."),(0,i.mdx)("h2",{id:"clone-application-source-code"},"Clone application source code"),(0,i.mdx)("p",null,"Clone the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/adobe/amazon-sales-channel-app-builder"},(0,i.mdx)("inlineCode",{parentName:"a"},"amazon-sales-channel-app-builder")," repo")," to your working directory:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:adobe/amazon-sales-channel-app-builder.git <custom-directory>\n")),(0,i.mdx)("h2",{id:"setup-project-dependencies"},"Setup project dependencies"),(0,i.mdx)("p",null,"Change directories to the cloned repo and run the following commands:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Download dependencies and prepare the project."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm install\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Build the project."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,i.mdx)("p",{parentName:"li"},"The command cleans, compiles, and runs the ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app build")," command."))),(0,i.mdx)("h2",{id:"configure-your-application"},"Configure your application"),(0,i.mdx)("h3",{id:"add-services"},"Add services"),(0,i.mdx)("p",null,"In your App Builder project:"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"In your workspace, click the ",(0,i.mdx)("strong",{parentName:"p"},"Add service")," pop-up menu and select ",(0,i.mdx)("strong",{parentName:"p"},"API"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"On the ",(0,i.mdx)("strong",{parentName:"p"},"Add an API")," page, filter on ",(0,i.mdx)("strong",{parentName:"p"},"Adobe Services")," and select ",(0,i.mdx)("strong",{parentName:"p"},"I/O Management API"),". Then click ",(0,i.mdx)("strong",{parentName:"p"},"Next"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"On the ",(0,i.mdx)("strong",{parentName:"p"},"Configure API")," page, select the ",(0,i.mdx)("strong",{parentName:"p"},"Service Account (JWT)")," option and click ",(0,i.mdx)("strong",{parentName:"p"},"Save configured API"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Select ",(0,i.mdx)("strong",{parentName:"p"},"Generate key pair"),".  ")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Click ",(0,i.mdx)("strong",{parentName:"p"},"Save configured API"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Repeat this process and create an ",(0,i.mdx)("inlineCode",{parentName:"p"},"Adobe I/O Events for Adobe Commerce")," service."))),(0,i.mdx)("h3",{id:"set-up-your-environment"},"Set up your environment"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"From the root of the cloned repo, make a copy of the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env.dist")," file."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"cp .env.dist .env\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Run the ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app use")," command to define your workspace."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app use\n")),(0,i.mdx)("p",{parentName:"li"},"The following menu displays in the terminal:"),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-terminal"},"You are currently in:\n1. Org: <no org selected>\n2. Project: <no project selected>\n3. Workspace: <no workspace selected>\n\n? Switch to a new Adobe Developer Console configuration: A. Use the global Org / Project / Workspace configuration:\n1. Org: <your org>\n2. Project: <your project>\n3. Workspace: <your workspace>\n\n? The file /<project_path>/.env already exists: Merge\n\n✔ Successfully imported configuration for:\n1. Org: <your org>\n2. Project: <your project>\n3. Workspace: <your workspace>\n")))),(0,i.mdx)("p",null,"At this point, the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},".aio")," files should be populated. You can remove any leftover property, such as ",(0,i.mdx)("inlineCode",{parentName:"p"},"AIO_ims_contexts_<App_Builder_Reference>")," from the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file."),(0,i.mdx)("p",null,"Test your configuration by running ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm run deploy")," to deploy your application into App Builder."),(0,i.mdx)("h4",{id:"add-your-encryption-keys"},"Add your encryption keys"),(0,i.mdx)("p",null,"The credentials stored in the application are encrypted using an AES-256 algorithm. You must generate a set of custom encryption keys and provide them to the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file to secure authentication data."),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ENCRYPTION_KEY"),(0,i.mdx)("td",{parentName:"tr",align:null},"32 character long encryption key")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ENCRYPTION_IV"),(0,i.mdx)("td",{parentName:"tr",align:null},"Initialization vector")))),(0,i.mdx)("h4",{id:"add-your-adobe-commerce-credentials"},"Add your Adobe Commerce credentials"),(0,i.mdx)("p",null,"The application needs to connect to an Adobe Commerce instance to retrieve the product catalog updates and to ingest Amazon orders. Define the following variables inside the ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file:"),(0,i.mdx)("table",null,(0,i.mdx)("thead",{parentName:"table"},(0,i.mdx)("tr",{parentName:"thead"},(0,i.mdx)("th",{parentName:"tr",align:null},"Key"),(0,i.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,i.mdx)("tbody",{parentName:"table"},(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ADOBE_COMMERCE_BASE_URL"),(0,i.mdx)("td",{parentName:"tr",align:null},"The base URL of your Adobe Commerce instance")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ADOBE_COMMERCE_CONSUMER_KEY"),(0,i.mdx)("td",{parentName:"tr",align:null},"The consumer key of the integration created in Adobe Commerce")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ADOBE_COMMERCE_CONSUMER_SECRET"),(0,i.mdx)("td",{parentName:"tr",align:null},"The consumer secret of the integration created in Adobe Commerce")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ADOBE_COMMERCE_ACCESS_TOKEN"),(0,i.mdx)("td",{parentName:"tr",align:null},"The access token of the integration created in Adobe Commerce")),(0,i.mdx)("tr",{parentName:"tbody"},(0,i.mdx)("td",{parentName:"tr",align:null},"ADOBE_COMMERCE_ACCESS_TOKEN_SECRET"),(0,i.mdx)("td",{parentName:"tr",align:null},"The access token secret of the integration created in Adobe Commerce")))),(0,i.mdx)("h3",{id:"configure-required-events-in-commerce"},"Configure Required Events in Commerce"),(0,i.mdx)("p",null,"Amazon Sales Channel on App Builder requires using I/O Events to automatically detect and respond to changes in your Commerce product catalog. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after event")," is emitted when products are updated, such as when a product's name or price changes. You must configure this event and the fields that the event payload contains as part of setup. This event will be sent from Commerce to your App Builder application. By subscribing to the event published by Commerce, Amazon Sales Channel knows when your Commerce product catalog changes and can automatically make the relevant updates to your Amazon Marketplace product listings."),(0,i.mdx)("p",null,"Create the ",(0,i.mdx)("inlineCode",{parentName:"p"},"etc/io_events.xml")," file in the root directory of your module, if it has not already been created. Register the ",(0,i.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after")," event using the following code. If this event is already registered, ensure that it has all of the required fields."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-xml"},'<event name="catalog_product_save_after">\n   <fields>\n      <field name="sku" />\n      <field name="price" />\n      <field name="stock_data.qty" />\n      <field name="asin" />\n      <field name="amazon_condition" />\n      <field name="name" />\n   </fields>\n</event>\n')),(0,i.mdx)("p",null,"See ",(0,i.mdx)("a",{parentName:"p",href:"../events/module-development.md#io_eventsxml"},"I/O Events for Adobe Commerce")," for more details. Adobe recommends using the ",(0,i.mdx)("inlineCode",{parentName:"p"},"io_events.xml")," method to configure events, but you can also configure events by modifying the ",(0,i.mdx)("inlineCode",{parentName:"p"},"app.config")," file or by using the CLI. The same event and fields are required, regardless of the method implemented."),(0,i.mdx)("h3",{id:"subscribe-to-adobe-commerce-events"},"Subscribe to Adobe Commerce events"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Ensure that your Adobe Commerce instance is registered as an event provider as described in ",(0,i.mdx)("a",{parentName:"p",href:"../events/configure-commerce.md#subscribe-and-register-events"},"Subscribe and register events"),".")),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Register the ",(0,i.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after")," event in your project in ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/"},"developer console"),"."),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"Add a new service of type ",(0,i.mdx)("inlineCode",{parentName:"li"},"Event"),"."),(0,i.mdx)("li",{parentName:"ul"},"Select your event provider."),(0,i.mdx)("li",{parentName:"ul"},"Choose the ",(0,i.mdx)("inlineCode",{parentName:"li"},"observer.catalog_product_save_after")," event subscription."),(0,i.mdx)("li",{parentName:"ul"},"Select the JWT credential."),(0,i.mdx)("li",{parentName:"ul"},"Set a name for your event registration."),(0,i.mdx)("li",{parentName:"ul"},"Select your Runtime action, which should be similar to ",(0,i.mdx)("inlineCode",{parentName:"li"},"amazon-app/__secured_catalog-product-save-after-listener - <your project>-<your workspace>"),", then save the event.")))),(0,i.mdx)("p",null,"At this point, if you go to the ",(0,i.mdx)("inlineCode",{parentName:"p"},"Debug tracing")," area in your new event created inside the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/console/"},"developer console"),", you should be able to see any incoming events from your Adobe Commerce instance."),(0,i.mdx)("h2",{id:"local-dev-environment"},"Local Dev environment"),(0,i.mdx)("ol",null,(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Compile the TypeScript files in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"actions-src")," directory into ",(0,i.mdx)("inlineCode",{parentName:"p"},"actions"),"."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run compile\n"))),(0,i.mdx)("li",{parentName:"ol"},(0,i.mdx)("p",{parentName:"li"},"Start your local dev server."),(0,i.mdx)("pre",{parentName:"li"},(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app run\n")),(0,i.mdx)("p",{parentName:"li"},"By default, the app runs on ",(0,i.mdx)("inlineCode",{parentName:"p"},"localhost:9080"),". If the port is not available,check the console logs for the updated port."),(0,i.mdx)("p",{parentName:"li"},"The UI is served locally, but actions are deployed and served from Adobe I/O Runtime. To start a local serverless stack and also run your actions locally, use the ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app run --local")," option."))),(0,i.mdx)("h2",{id:"admin-ui-sdk"},"Admin UI SDK"),(0,i.mdx)("p",null,"The Amazon Sales Channel on App Builder is securely injected into the Commerce Admin experience using the ",(0,i.mdx)("a",{parentName:"p",href:"../admin-ui-sdk/index.md"},"Admin UI SDK"),". This UI extensibility functionality enables merchant administrators to use a seamless app UI experience in the Commerce Admin. This sample app is just one example of how App Builder integrations can extend Commerce Admin with their own apps' UI."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"../admin-ui-sdk/configuration.md"},"Admin configuration and testing")," describes how to test functionality locally. For testing in production, push the Amazon Sales Channel app to production and have an administrator approve the app."),(0,i.mdx)("h2",{id:"test-the-app"},"Test the app"),(0,i.mdx)("p",null,"Use the following commands to run unit tests:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app test #runs UI and actions tests\n")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"aio app test --e2e #runs end-to-end tests\n")),(0,i.mdx)("h3",{id:"adding-additional-action-dependencies"},"Adding additional action dependencies"),(0,i.mdx)("p",null,"You have two options to resolve your action's dependencies:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Packaged action file"),": Add your actions dependencies to the root ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json")," and install them using ",(0,i.mdx)("inlineCode",{parentName:"p"},"npm install"),". Then set the ",(0,i.mdx)("inlineCode",{parentName:"p"},"function")," field in ",(0,i.mdx)("inlineCode",{parentName:"p"},"ext.config.yaml")," to point to the ",(0,i.mdx)("strong",{parentName:"p"},"entry file")," of your action folder. ",(0,i.mdx)("inlineCode",{parentName:"p"},"webpack")," is used to package your code and dependencies into a single minified ",(0,i.mdx)("inlineCode",{parentName:"p"},"js")," file. The action will then be deployed as a single file. Use this method if you want to reduce the size of your actions.")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("p",{parentName:"li"},(0,i.mdx)("strong",{parentName:"p"},"Zipped action folder"),": In the folder containing the action code, add a ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json")," with the action dependencies. Then set the ",(0,i.mdx)("inlineCode",{parentName:"p"},"function")," field in ",(0,i.mdx)("inlineCode",{parentName:"p"},"ext.config.yaml")," to point to the ",(0,i.mdx)("strong",{parentName:"p"},"folder")," of that action. The required dependencies are installed within that directory. In addition, the process zips the folder before deploying it as a zipped action. Use this method if you want to keep your action's dependencies separated."))),(0,i.mdx)("h3",{id:"debugging-in-vs-code"},"Debugging in VS Code"),(0,i.mdx)("p",null,"Both UI and actions can be debugged while your local server is running. To start debugging, open the VS Code debugger and select the ",(0,i.mdx)("inlineCode",{parentName:"p"},"WebAndActions")," debugging configuration. Other debug configurations are also available for the UI and each separate action."),(0,i.mdx)("h2",{id:"deploy-the-app"},"Deploy the app"),(0,i.mdx)("p",null,"Run the following command to compile, build, and deploy all TypeScript actions on Runtime and static files to CDN."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"npm run deploy\n")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"aio app undeploy")," command undeploys the app."),(0,i.mdx)("h2",{id:"typescript-support-for-ui"},"Typescript support for UI"),(0,i.mdx)("p",null,"Use the ",(0,i.mdx)("inlineCode",{parentName:"p"},".tsx")," extension to designate TypeScript for React components. Also, create a ",(0,i.mdx)("inlineCode",{parentName:"p"},"tsconfig.json")," file that defines the following configuration:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "jsx": "react"\n   }\n} \n')))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-amazon-sales-channel-installation-md-7c8344549c22ff160def.js.map