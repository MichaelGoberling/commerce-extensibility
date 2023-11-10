"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[7444],{34623:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return m},default:function(){return p}});var a,i=t(87462),o=t(63366),s=(t(15007),t(64983)),d=t(91515),l=["components"],m={},r=(a="InlineAlert",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.mdx)("div",e)}),c={_frontmatter:m},_=d.Z;function p(e){var n=e.components,t=(0,o.Z)(e,l);return(0,s.mdx)(_,(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"commerce-module-development"},"Commerce module development"),(0,s.mdx)("p",null,"This topic describes how to enable your custom modules for Adobe I/O Events. You can also manually register observer events using the ",(0,s.mdx)("a",{parentName:"p",href:"./commands.md#subscribe-to-an-event"},(0,s.mdx)("inlineCode",{parentName:"a"},"events:subscribe")," command"),"."),(0,s.mdx)("h2",{id:"find-supported-events"},"Find supported events"),(0,s.mdx)("p",null,"Adobe Commerce is capable of emitting thousands of different observer and plugin events, but most of them aren't good candidates for integrating with an external App Builder application. For example, Commerce emits events before and after a customer address is loaded, saved, or deleted, but the only events of consequence are those that indicate a change of status after the address is saved or deleted."),(0,s.mdx)("p",null,"You can use the Commerce Admin or the command line to find supported events and their payloads:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"In the Admin, select ",(0,s.mdx)("strong",{parentName:"p"},"System")," > Events > ",(0,s.mdx)("strong",{parentName:"p"},"Events")," to display the ",(0,s.mdx)("em",{parentName:"p"},"Event list")," page."),(0,s.mdx)("p",{parentName:"li"},(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1280px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.25%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/5530d/event-list.webp 320w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/0c8fb/event-list.webp 640w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/94b1e/event-list.webp 1280w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/0b34d/event-list.webp 1920w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/d5269/event-list.webp 2560w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/d7afe/event-list.webp 3148w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/dd4a7/event-list.png 320w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/0f09e/event-list.png 640w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/bbbf7/event-list.png 1280w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/ac7a9/event-list.png 1920w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/c7a69/event-list.png 2560w","/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/245f3/event-list.png 3148w"],sizes:"(max-width: 1280px) 100vw, 1280px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-extensibility/static/2599d969b984b3b8726e6af8e230c83b/bbbf7/event-list.png",alt:"Event list page",title:"Event list page",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",{parentName:"li"},"The left navigation contains a list of enabled modules on your system. Click on a module name to display a list of supported events. When you select an event, the main panel of the Admin displays the event's payload.")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"bin/magento events:list:all")," command returns all the detectable supported events in the specified module. Once you know the name of the event, you can use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"events:info")," command to return its payload."))),(0,s.mdx)("h2",{id:"register-events"},"Register events"),(0,s.mdx)("p",null,"You can programmatically register events using the following methods:"),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},"Create an ",(0,s.mdx)("inlineCode",{parentName:"li"},"io_events.xml")," file in your module"),(0,s.mdx)("li",{parentName:"ul"},"Declare them in the system ",(0,s.mdx)("inlineCode",{parentName:"li"},"config.php")," file")),(0,s.mdx)("p",null,"For each event you register, you must define which fields to transmit to your App Builder application. The payload of an event can be massive. In addition, some events include sensitive or PCI compliance data by default. The payload of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after")," event is similar to the following:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "event":{\n      "data":{\n         "value":{\n            "_edit_mode":true,\n            "store_id":"0",\n            "entity_id":"3",\n            "attribute_set_id":"4",\n            "type_id":"simple",\n            "sku":"test2",\n            "has_options":false,\n            "required_options":false,\n            "created_at":"2022-07-28 14:13:40",\n            "updated_at":"2022-09-06 20:37:25",\n            "row_id":"3",\n            "created_in":"1",\n            "updated_in":"2147483647",\n            "name":"test2",\n            "meta_title":"test2",\n            "meta_description":"test2 ",\n            "page_layout":"product-full-width",\n            "options_container":"container2",\n            "url_key":"test2",\n            "msrp_display_actual_price_type":"0",\n            "gift_message_available":"2",\n            "gift_wrapping_available":"2",\n            "is_returnable":"2",\n            "status":"1",\n            "visibility":"4",\n            "tax_class_id":"2",\n            "price":"123.000000",\n            "meta_keyword":"test2",\n            "options":[\n               \n            ],\n            "media_gallery":{\n               "images":[\n                  \n               ],\n               "values":[\n                  \n               ]\n            },\n            "tier_price":[\n               \n            ],\n            "tier_price_changed":0,\n            "quantity_and_stock_status":{\n               "is_in_stock":"1",\n               "qty":"333"\n            },\n            "category_ids":[\n               "4"\n            ],\n            "is_salable":1,\n            "stock_data":{\n               "item_id":"3",\n               "product_id":"3",\n               "stock_id":"1",\n               "qty":"333",\n               "min_qty":"0",\n               "use_config_min_qty":"1",\n               "is_qty_decimal":"0",\n               "backorders":"0",\n               "use_config_backorders":"1",\n               "min_sale_qty":"1",\n               "use_config_min_sale_qty":"1",\n               "max_sale_qty":"10000",\n               "use_config_max_sale_qty":"1",\n               "is_in_stock":"1",\n               "notify_stock_qty":"1",\n               "use_config_notify_stock_qty":"1",\n               "manage_stock":"1",\n               "use_config_manage_stock":"1",\n               "stock_status_changed_auto":"0",\n               "use_config_qty_increments":"1",\n               "qty_increments":"1",\n               "use_config_enable_qty_inc":"1",\n               "enable_qty_increments":"0",\n               "is_decimal_divided":0,\n               "website_id":"0",\n               "deferred_stock_update":"0",\n               "use_config_deferred_stock_update":"1",\n               "type_id":"simple",\n               "min_qty_allowed_in_shopping_cart":[\n\n               ]\n            },\n            "use_config_gift_message_available":"1",\n            "use_config_gift_wrapping_available":"1",\n            "current_product_id":"3",\n            "affect_product_custom_options":"1",\n            "current_store_id":"0",\n            "product_has_weight":"1",\n            "is_new":"0",\n            "website_ids":{\n               "1":"1"\n            },\n            "url_key_create_redirect":"test2",\n            "ignore_links_flag":false,\n            "can_save_custom_options":true,\n            "save_rewrites_history":true,\n            "can_save_bundle_selections":false,\n            "is_custom_option_changed":true,\n            "parent_id":0,\n            "special_from_date_is_formated":true,\n            "custom_design_from_is_formated":true,\n            "news_from_date_is_formated":true,\n            "news_to_date_is_formated":true,\n            "is_changed_categories":false,\n            "is_changed_websites":false,\n            "force_reindex_eav_required":true\n         },\n         "_metadata":{\n            "commerceEdition":"Adobe Commerce",\n            "commerceVersion":"2.4.6-beta5",\n            "eventsClientVersion":"1.0.1",\n            "storeId":"0",\n            "websiteId":"1",\n            "storeGroupId":"0"\n         },\n         "source":"demo.demo"\n      }\n   }\n}\n')),(0,s.mdx)("p",null,"You define an array of fields to transmit in your configuration file. Specify any field within an event's ",(0,s.mdx)("inlineCode",{parentName:"p"},"value")," object to ensure it is transmitted to an application. If the field is part of a secondary object, such as ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_data")," in the above example, use the format ",(0,s.mdx)("inlineCode",{parentName:"p"},"<object-name>.field"),". For example: ",(0,s.mdx)("inlineCode",{parentName:"p"},"stock_data.product_id"),"."),(0,s.mdx)("p",null,"After you've registered at least one event, run the ",(0,s.mdx)("a",{parentName:"p",href:"./commands.md#generate-a-commerce-module-based-on-a-list-of-subscribed-events"},"events:generate:module command")," to generate the required plugins."),(0,s.mdx)("h3",{id:"io_eventsxml"},"io_events.xml"),(0,s.mdx)("p",null,"Create the ",(0,s.mdx)("inlineCode",{parentName:"p"},"<module-root>/etc/io_events.xml")," file and define a list of events that should always be transmitted. Events listed in this file cannot be disabled with the ",(0,s.mdx)("a",{parentName:"p",href:"./commands.md#unsubscribe-from-a-commerce-event"},(0,s.mdx)("inlineCode",{parentName:"a"},"events:unsubscribe")," command"),"."),(0,s.mdx)("p",null,"You can transmit all the fields within an event by setting the value of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"field")," element to ",(0,s.mdx)("inlineCode",{parentName:"p"},"*")," (",(0,s.mdx)("inlineCode",{parentName:"p"},'<field name="*"  />'),"). You cannot use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"*")," wildcard character to match partial strings."),(0,s.mdx)(r,{variant:"warning",slots:"text",mdxType:"InlineAlert"}),(0,s.mdx)("p",null,"Adobe recommends sending a limited number of fields per event. If you send all fields, you increase the risk of including sensitive or PCI compliance data in the event. In addition, specifying only the fields that are applicable to your business case is recommended for optimal performance and cost effectiveness."),(0,s.mdx)("p",null,(0,s.mdx)("a",{parentName:"p",href:"custom-event-fields.md"},"Add custom fields to an event")," describes how to enhance the payload of pre-defined events."),(0,s.mdx)("p",null,"The following example registers multiple events. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"<fields>")," element defines the contents of each transmitted event."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module-commerce-events-client/etc/io_events.xsd">\n    <event name="observer.catalog_product_save_after">\n        <fields>\n            <field name="entity_id" />\n            <field name="sku" />\n            <field name="is_new" />\n        </fields>\n    </event>\n    <event name="plugin.magento.sales.api.invoice_item_repository.save">         \n        <fields>\n            <field name="entity_id" />\n            <field name="parent_id" />\n            <field name="base_price" />\n            <field name="tax_amount" />\n            <field name="base_row_total" />\n            <field name="discount_amount" />\n            <field name="qty" />\n        </fields>\n    </event>\n    <event name="plugin.magento.catalog.model.resource_model.product.save">\n        <fields>\n            <field name="entity_id" />\n            <field name="sku" />\n            <field name="name" />\n            <field name="price" />\n            <field name="created_at" />\n        </fields>\n    </event>\n</config>\n')),(0,s.mdx)("p",null,"The contents of an ",(0,s.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after")," event are similar to the following:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "value": {\n    "entity_id": "3",\n    "sku": "test2",\n    "is_new": "0"\n  }\n}\n')),(0,s.mdx)("h3",{id:"array-of-nested-objects"},"Array of nested objects"),(0,s.mdx)("p",null,"When the payload contains an array of objects, use the following construction to register specific fields from that array:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-text"},"<object_name>[].<field_name>\n")),(0,s.mdx)("p",null,"For example, the payload of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"observer.sales_order_invoice_save_after")," event contains a top-level ",(0,s.mdx)("inlineCode",{parentName:"p"},"items[]")," array. In this case, the array contains details about two individual products."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "event": {\n    "data": {\n      "value": {\n        "order_id": "8",\n        "store_id": "1",\n        "customer_id": null,\n        "billing_address_id": "16",\n        "shipping_address_id": "15",\n        "global_currency_code": "USD",\n        "base_currency_code": "USD",\n        "store_currency_code": "USD",\n        "order_currency_code": "USD",\n        "store_to_base_rate": "0.0000",\n        "store_to_order_rate": "0.0000",\n        "base_to_global_rate": "1.0000",\n        "base_to_order_rate": "1.0000",\n        "discount_description": null,\n        "items": [\n          {\n            "order_item_id": "8",\n            "product_id": "22",\n            "sku": "simple-product-2",\n            "name": "Simple Product 2",\n            "description": null,\n            "price": 200,\n            "base_price": "200.0000",\n            "base_cost": null,\n            "price_incl_tax": "200.0000",\n            "base_price_incl_tax": "200.0000",\n            "extension_attributes": {},\n            "weee_tax_applied": "[]",\n            "weee_tax_applied_amount": null,\n            "weee_tax_applied_row_amount": 0,\n            "base_weee_tax_applied_amount": null,\n            "base_weee_tax_applied_row_amnt": null,\n            "weee_tax_disposition": null,\n            "base_weee_tax_disposition": null,\n            "weee_tax_row_disposition": 0,\n            "base_weee_tax_row_disposition": 0,\n            "qty": "3.000000",\n            "invoice": {},\n            "parent_id": null,\n            "store_id": "1",\n            "row_total": 600,\n            "base_row_total": 600,\n            "row_total_incl_tax": 600,\n            "base_row_total_incl_tax": 600,\n            "tax_amount": 0,\n            "base_tax_amount": 0,\n            "discount_tax_compensation_amount": 0,\n            "base_discount_tax_compensation_amount": 0,\n            "base_weee_tax_applied_row_amount": 0\n          },\n          {\n            "order_item_id": "9",\n            "product_id": "21",\n            "sku": "simple-product-1",\n            "name": "Simple Product 1",\n            "description": null,\n            "price": 100,\n            "base_price": "100.0000",\n            "base_cost": null,\n            "price_incl_tax": "100.0000",\n            "base_price_incl_tax": "100.0000",\n            "extension_attributes": {},\n            "weee_tax_applied": "[]",\n            "weee_tax_applied_amount": null,\n            "weee_tax_applied_row_amount": 0,\n            "base_weee_tax_applied_amount": null,\n            "base_weee_tax_applied_row_amnt": null,\n            "weee_tax_disposition": null,\n            "base_weee_tax_disposition": null,\n            "weee_tax_row_disposition": 0,\n            "base_weee_tax_row_disposition": 0,\n            "qty": "5.000000",\n            "invoice": {},\n            "parent_id": null,\n            "store_id": "1",\n            "row_total": 500,\n            "base_row_total": 500,\n            "row_total_incl_tax": 500,\n            "base_row_total_incl_tax": 500,\n            "tax_amount": 0,\n            "base_tax_amount": 0,\n            "discount_tax_compensation_amount": 0,\n            "base_discount_tax_compensation_amount": 0,\n            "base_weee_tax_applied_row_amount": 0\n          }\n        ],\n        "total_qty": 8,\n        "subtotal": 1100,\n        "base_subtotal": 1100,\n        "subtotal_incl_tax": 1100,\n        "base_subtotal_incl_tax": 1100,\n        "grand_total": 1100,\n        "base_grand_total": 1100,\n        "discount_amount": 0,\n        "base_discount_amount": 0,\n        "tax_amount": 0,\n        "base_tax_amount": 0,\n        "discount_tax_compensation_amount": 0,\n        "base_discount_tax_compensation_amount": 0,\n        "base_cost": 0,\n        "base_gift_cards_amount": 0,\n        "gift_cards_amount": 0,\n        "can_void_flag": false,\n        "state": 2,\n        "increment_id": "000000013",\n        "entity_id": "13",\n        "id": "13",\n        "created_at": "2023-04-06 18:36:18",\n        "updated_at": "2023-04-06 18:36:18"\n      }\n    }\n  }\n}\n')),(0,s.mdx)("p",null,"To register the top-level ",(0,s.mdx)("inlineCode",{parentName:"p"},"order_id")," field and the ",(0,s.mdx)("inlineCode",{parentName:"p"},"sku")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"qty")," of each product, define the subscription as follows:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module-commerce-events-client/etc/io_events.xsd">\n   <event name="observer.sales_order_invoice_save_after">\n      <fields>\n         <field name="order_id" />\n         <field name="items[].sku" />\n         <field name="items[].qty" />\n      </fields>\n   </event>\n</config>\n')),(0,s.mdx)("p",null,"The contents of the event are similar to the following:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-json"},'{\n   "order_id": "8",\n   "items": [\n      {\n         "sku": "simple-product-2",\n         "qty": "3.000000"\n      },\n      {\n         "sku": "simple-product-1",\n         "qty": "5.000000"\n      }\n   ]\n}\n')),(0,s.mdx)("h3",{id:"configphp"},"config.php"),(0,s.mdx)("p",null,"You can also create an ",(0,s.mdx)("inlineCode",{parentName:"p"},"io_events")," section in the Commerce ",(0,s.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/configuration-guide/files/deployment-files.html"},(0,s.mdx)("inlineCode",{parentName:"a"},"app/etc/config.php file")),". Events registered using this mechanism can be disabled from the command line."),(0,s.mdx)("p",null,"For example:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-config"},"'io_events' => [\n    'observer.catalog_product_save_after' => [\n        'fields' => [\n            'entity_id',\n            'sku',\n            'is_new',\n        ],\n        'enabled' => 1\n    ],\n    'plugin.magento.sales.api.invoice_item_repository.save' => [\n        'fields' => [\n            'entity_id',\n            'parent_id',\n            'base_price',\n            'tax_amount',\n            'base_row_total',\n            'discount_amount',\n            'qty',\n        ],\n        'enabled' => 1\n    ],\n    'plugin.magento.catalog.model.resource_model.product.save' => [\n        'fields' => [\n            'sku',\n            'entity_id',\n            'name',\n            'price'\n        ],\n        'enabled' => 1\n    ],\n]\n")),(0,s.mdx)("p",null,"The payload for the ",(0,s.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after")," event is the same as shown in ",(0,s.mdx)("a",{parentName:"p",href:"#io_eventsxml"},(0,s.mdx)("inlineCode",{parentName:"a"},"io_events.xml")),"."),(0,s.mdx)("h2",{id:"configuration-merging-from-different-modules"},"Configuration merging from different modules"),(0,s.mdx)("p",null,"If multiple Commerce modules register the same event, the configuration manager merges the two configurations. The transmitted event includes all the fields defined in the modules."),(0,s.mdx)("p",null,"In the following example, the ",(0,s.mdx)("inlineCode",{parentName:"p"},"MODULE1/etc/io_events.xml")," file registers the ",(0,s.mdx)("inlineCode",{parentName:"p"},"observer.catalog_product_save_after")," event with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"entity_id")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"sku")," fields."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module-commerce-events-client/etc/io_events.xsd">\n    <event name="observer.catalog_product_save_after">\n        <fields>\n            <field name="entity_id" />\n            <field name="sku" />\n        </fields>\n    </event>\n</config>\n')),(0,s.mdx)("p",null,"The ",(0,s.mdx)("inlineCode",{parentName:"p"},"MODULE2/etc/io_events.xml")," file registers the same event with the ",(0,s.mdx)("inlineCode",{parentName:"p"},"entity_id")," field and two others."),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module-commerce-events-client/etc/io_events.xsd">\n    <event name="observer.catalog_product_save_after">\n        <fields>\n            <field name="entity_id" />\n            <field name="quantity_and_stock_status.qty" />\n            <field name="stock_data.min_qty" />\n        </fields>\n    </event>\n</config>\n')),(0,s.mdx)("p",null,"The resulting configuration:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:module-commerce-events-client/etc/io_events.xsd">\n    <event name="observer.catalog_product_save_after">\n        <fields>             \n            <field name="entity_id" />\n            <field name="sku" />\n            <field name="quantity_and_stock_status.qty" />\n            <field name="stock_data.min_qty" />\n        </fields>\n    </event>\n</config>\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-events-module-development-md-6c464c6159d9d68e3043.js.map