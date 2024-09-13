"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[9085],{13757:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return d},default:function(){return u}});var r=t(58168),a=t(80045),o=(t(88763),t(15680)),s=t(83407);const i=["components"],d={},l=(m="InlineAlert",function(e){return console.warn("Component "+m+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var m;const c={_frontmatter:d},p=s.A;function u(e){let{components:n}=e,t=(0,a.A)(e,i);return(0,o.mdx)(p,(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"add-custom-fields-to-an-event"},"Add custom fields to an event"),(0,o.mdx)("p",null,"Your custom module might generate data that would be useful to insert into an existing Commerce event. Processors allow you to enrich the data contained in an event before it is transmitted to the eventing service. You can optionally assign a priority to each processor. The priority is important in cases when changes from one processor can affect the logic of another processor, or when processors add a new element with the same key."),(0,o.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"You must configure a module's ",(0,o.mdx)("inlineCode",{parentName:"p"},"io_events.xml")," or root ",(0,o.mdx)("inlineCode",{parentName:"p"},"app/etc/io_events.xml")," file to add custom fields. You cannot declare them in the system ",(0,o.mdx)("inlineCode",{parentName:"p"},"config.php")," file or add them using the CLI."),(0,o.mdx)("h2",{id:"configure-the-io_eventsxml-file"},"Configure the ",(0,o.mdx)("inlineCode",{parentName:"h2"},"io_events.xml")," file"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"<processors>")," element defines the processors that inject custom data into the specified event. This element contains one or more ",(0,o.mdx)("inlineCode",{parentName:"p"},"<processor>")," elements, which can contain the following attributes:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"Attribute"),(0,o.mdx)("th",{parentName:"tr",align:null},"Required"),(0,o.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"class")),(0,o.mdx)("td",{parentName:"tr",align:null},"Yes"),(0,o.mdx)("td",{parentName:"tr",align:null},"The fully-qualified class name.")),(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null},(0,o.mdx)("inlineCode",{parentName:"td"},"priority")),(0,o.mdx)("td",{parentName:"tr",align:null},"No"),(0,o.mdx)("td",{parentName:"tr",align:null},"An integer indicating the order in which multiple processors are executed. The system executes unprioritized processors first, in the order listed. All processors with defined priority values are executed in numerical order, from lowest to highest.")))),(0,o.mdx)("p",null,"The following example adds the ",(0,o.mdx)("inlineCode",{parentName:"p"},"order_status"),", ",(0,o.mdx)("inlineCode",{parentName:"p"},"order_id"),", and ",(0,o.mdx)("inlineCode",{parentName:"p"},"order_details")," fields to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"observer.sales_order_save_after")," event payload. The assigned ",(0,o.mdx)("inlineCode",{parentName:"p"},"priority")," values indicate the processors will be executed in the following order:"),(0,o.mdx)("ol",null,(0,o.mdx)("li",{parentName:"ol"},"TestProcessorOrderStatus"),(0,o.mdx)("li",{parentName:"ol"},"TestProcessorOrderDetails"),(0,o.mdx)("li",{parentName:"ol"},"TestProcessorOrderId")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module-commerce-events-client/etc/io_events.xsd">\n    <event name="observer.sales_order_save_after">\n        <fields>\n            <field name="entity_id" />\n            <field name="base_currency_code" />\n            <field name="shipping_method" />\n        </fields>\n        <processors>\n            <processor class="Magento\\AdobeCommerceEventsClient\\Event\\TestProcessorOrderStatus" priority="10"/>\n            <processor class="Magento\\AdobeCommerceEventsClient\\Event\\TestProcessorOrderId" priority="30"/>\n            <processor class="Magento\\AdobeCommerceEventsClient\\Event\\TestProcessorOrderDetails" priority="20"/>\n        </processors>\n    </event>\n</config>\n')),(0,o.mdx)("p",null,"The event payload will be similar to the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n       "entity_id": "3",\n       "base_currency_code": "USD",\n       "shipping_method": "tablerate_bestway",\n       "order_status": "1", \n       "order_details": "test details",\n       "order_id": "3"\n  }\n}\n')),(0,o.mdx)("h2",{id:"processor-definitions"},"Processor definitions"),(0,o.mdx)("p",null,"The processor class must implement ",(0,o.mdx)("inlineCode",{parentName:"p"},"EventDataProcessorInterface"),". This interface contains the ",(0,o.mdx)("inlineCode",{parentName:"p"},"process")," method, which accepts the following arguments. It returns an array."),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"public function process(Event $event, array $eventData): array")),(0,o.mdx)("p",null,"You must create a separate class for each field to be added."),(0,o.mdx)("p",null,"In the following example, the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TestProcessorOrderStatus")," class adds the ",(0,o.mdx)("inlineCode",{parentName:"p"},"order_status")," field and a value to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"eventData")," array."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\ndeclare(strict_types=1);\n​\nnamespace Magento\\AdobeCommerceEventsClient\\Event;\n​\nuse Magento\\AdobeCommerceEventsClient\\Event\\Processor\\EventDataProcessorInterface;\n​\nclass TestProcessorOrderStatus implements EventDataProcessorInterface\n{\n    public function process(Event $event, array $eventData): array\n    {\n        $eventData['order_status'] = 1;\n        return $eventData;\n    }\n}\n")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-custom-event-fields-md-7ae861323262a6cc9ee4.js.map