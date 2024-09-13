"use strict";(self.webpackChunkcommerce_extensibility=self.webpackChunkcommerce_extensibility||[]).push([[6940],{13028:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return o},default:function(){return p}});var i=a(58168),t=a(80045),d=(a(88763),a(15680)),m=a(83407);const r=["components"],o={},s={_frontmatter:o},l=m.A;function p(e){let{components:n}=e,a=(0,t.A)(e,r);return(0,d.mdx)(l,(0,i.A)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"adobe-commerce-admin-ui-sdk-release-notes"},"Adobe Commerce Admin UI SDK release notes"),(0,d.mdx)("h2",{id:"version-20"},"Version 2.0"),(0,d.mdx)("h3",{id:"release-date"},"Release date"),(0,d.mdx)("p",null,"September 4, 2024"),(0,d.mdx)("h3",{id:"enhancements"},"Enhancements"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"This release changes how registrations are declared. Previously, calls were performed asynchronously. This could result with delayed retrieval and availability of registrations when loading pages in the Admin. Registrations are now loaded synchronously. resulting in a better merchant experience."),(0,d.mdx)("p",{parentName:"li"},"You must update any extension points developed with Admin UI SDK 1.x. ",(0,d.mdx)("a",{parentName:"p",href:"./extension-points/index.md#migrate-your-extension-point-from-version-1x-to-20"},"Migrate your extension point from 1.x to 2.0")," describes how.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added a custom fee column to the invoice and credit memo grids."))),(0,d.mdx)("h2",{id:"version-140"},"Version 1.4.0"),(0,d.mdx)("h3",{id:"release-date-1"},"Release date"),(0,d.mdx)("p",null,"June 28, 2024"),(0,d.mdx)("h3",{id:"enhancements-1"},"Enhancements"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the following extension points:"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"./extension-points/banner-notification.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"banner notification"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"./extension-points/customer/grid-columns.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"customer grid columns")),"  "),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"./extension-points/customer/mass-action.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"customer mass action"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"./extension-points/order/custom-fees.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"order get custom fees")),"  "))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Mass actions can now be implemented ",(0,d.mdx)("a",{parentName:"p",href:"./extension-points/index.md#mass-actions-without-iframes"},"without an iFrame"),". ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ",(0,d.mdx)("inlineCode",{parentName:"p"},"GET V1/adminuisdk/massaction/<requestId>")," ",(0,d.mdx)("a",{parentName:"p",href:"./extension-points/index.md#connection-interruption-failures"},"REST API")," to debug mass action failures.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ",(0,d.mdx)("strong",{parentName:"p"},"Refresh registrations")," button to the configuration page. This button allows the administrator to  refresh the ",(0,d.mdx)("inlineCode",{parentName:"p"},"admin_ui_sdk")," cache and reload all extensions. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Refactored multiple sanitizers. As a result, incomplete or invalid input data from an extension point no longer causes display problems in the Admin.  ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The ",(0,d.mdx)("inlineCode",{parentName:"p"},"class")," parameter has been removed from the ",(0,d.mdx)("inlineCode",{parentName:"p"},"order view button")," extension point.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Updated project dependencies. "))),(0,d.mdx)("h2",{id:"version-132"},"Version 1.3.2"),(0,d.mdx)("h3",{id:"release-date-2"},"Release date"),(0,d.mdx)("p",null,"March 4, 2024"),(0,d.mdx)("h3",{id:"bug-fixes"},"Bug fixes"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Corrected a condition that allowed administrators who did not have proper permissions to view data in grid columns.")),(0,d.mdx)("h2",{id:"version-131"},"Version 1.3.1"),(0,d.mdx)("h3",{id:"release-date-3"},"Release date"),(0,d.mdx)("p",null,"January 25, 2024"),(0,d.mdx)("h3",{id:"enhancements-2"},"Enhancements"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Enhanced unit coverage by 150%. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ability to optionally specify a page title for a mass action. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The Admin UI SDK cache is now flushed weekly instead of every 12 hours. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"The Admin UI SDK now supports PHP 8.3. "))),(0,d.mdx)("h3",{id:"bug-fixes-1"},"Bug fixes"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"The Admin now displays extensions correctly when they are loaded from the extension manager registry. ")),(0,d.mdx)("h2",{id:"version-130"},"Version 1.3.0"),(0,d.mdx)("h3",{id:"release-date-4"},"Release date"),(0,d.mdx)("p",null,"November 30, 2023"),(0,d.mdx)("h3",{id:"enhancements-3"},"Enhancements"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Enabled the following extension points:",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"./extension-points/order/view-button.md"},"Add buttons to the orders view")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"./extension-points/order/mass-action.md"},"Add mass actions to the orders grid")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",{parentName:"li",href:"./extension-points/product/grid-columns.md"},"Add columns to the products grid")))),(0,d.mdx)("li",{parentName:"ul"},"Menus and extensions are cached to improve performance."),(0,d.mdx)("li",{parentName:"ul"},"When selecting a mass action, now only the needed extension is loaded."),(0,d.mdx)("li",{parentName:"ul"},"A spinner is now displayed when content is being loaded on customized extension points."),(0,d.mdx)("li",{parentName:"ul"},"Added the ability to redirect back to a grid page after executing a mass action."),(0,d.mdx)("li",{parentName:"ul"},"Added the ",(0,d.mdx)("inlineCode",{parentName:"li"},"clientId")," parameter to ",(0,d.mdx)("a",{parentName:"li",href:"./extension-points/index.md#shared-contexts"},(0,d.mdx)("inlineCode",{parentName:"a"},"sharedContext")),".")),(0,d.mdx)("h3",{id:"bug-fixes-2"},"Bug fixes"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Corrected a timeout issue caused by an incorrectly-applied ACL resource."),(0,d.mdx)("li",{parentName:"ul"},"Customized columns are now exported as expected when exporting data from the Orders page.")),(0,d.mdx)("h2",{id:"version-121"},"Version 1.2.1"),(0,d.mdx)("h3",{id:"release-date-5"},"Release date"),(0,d.mdx)("p",null,"October 31, 2023"),(0,d.mdx)("h3",{id:"enhancements-4"},"Enhancements"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ",(0,d.mdx)("strong",{parentName:"p"},"Mock AdobeAdminIms Module")," field to the Admin UI SDK configuration page in the Admin. This field determines whether to send mock or real Adobe IMS credentials. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ",(0,d.mdx)("strong",{parentName:"p"},"Admin UI SDK")," (",(0,d.mdx)("inlineCode",{parentName:"p"},"Magento_CommerceBackendUix::admin"),") resource. Administrators who are not assigned this resource will not have access the Admin UI SDK configuration page. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Custom date columns in the order grid now use ISO 8601 formatting. Previously, these values were simple timestamps. "))),(0,d.mdx)("h3",{id:"bug-fixes-3"},"Bug fixes"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Menus display correctly when the Admin UI SDK is enabled but no menu registrations are found. ")),(0,d.mdx)("h2",{id:"version-120"},"Version 1.2.0"),(0,d.mdx)("h3",{id:"release-date-6"},"Release date"),(0,d.mdx)("p",null,"October 18, 2023"),(0,d.mdx)("h3",{id:"enhancements-5"},"Enhancements"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Created the ",(0,d.mdx)("a",{parentName:"p",href:"extension-points/order/grid-columns.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"order")," extension point"),", which adds columns to the order grid. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ",(0,d.mdx)("a",{parentName:"p",href:"configuration.md#clean-the-admin-ui-sdk-cache"},(0,d.mdx)("inlineCode",{parentName:"a"},"admin_ui_sdk")," cache type"),". When enabled, Commerce caches customizations to the Admin. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ",(0,d.mdx)("inlineCode",{parentName:"p"},"isSection")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"sortOrder")," parameters to the ",(0,d.mdx)("a",{parentName:"p",href:"extension-points/menu.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"menu")," extension point"),". The ",(0,d.mdx)("inlineCode",{parentName:"p"},"isSection")," parameter allows you to define a menu section, while ",(0,d.mdx)("inlineCode",{parentName:"p"},"sortOrder")," defines the placement of a menu item. ")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added the ",(0,d.mdx)("inlineCode",{parentName:"p"},"productSelectLimit")," parameter for mass actions in the ",(0,d.mdx)("a",{parentName:"p",href:"extension-points/product/mass-action.md"},(0,d.mdx)("inlineCode",{parentName:"a"},"product")," extension point"),". "))),(0,d.mdx)("h3",{id:"bug-fixes-4"},"Bug fixes"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Minimized the number of calls needed to build a menu. ")),(0,d.mdx)("h2",{id:"version-112"},"Version 1.1.2"),(0,d.mdx)("h3",{id:"release-date-7"},"Release date"),(0,d.mdx)("p",null,"October 6, 2023"),(0,d.mdx)("h3",{id:"enhancements-6"},"Enhancements"),(0,d.mdx)("p",null,"Fixed cross-site scripting (XSS) and password hash security vulnerabilities."),(0,d.mdx)("h2",{id:"version-111"},"Version 1.1.1"),(0,d.mdx)("h3",{id:"release-date-8"},"Release date"),(0,d.mdx)("p",null,"September 12, 2023"),(0,d.mdx)("h3",{id:"bug-fixes-5"},"Bug fixes"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Fixed an issue with a missing tab ID that occurred due to a dependency on a non-mandatory module.")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Mass actions are now correctly cleared when the last app is removed."))),(0,d.mdx)("h2",{id:"version-110"},"Version 1.1.0"),(0,d.mdx)("h3",{id:"release-date-9"},"Release date"),(0,d.mdx)("p",null,"August 25, 2023"),(0,d.mdx)("h3",{id:"enhancements-7"},"Enhancements"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"You can now customize the ",(0,d.mdx)("a",{parentName:"li",href:"extension-points/product/mass-action.md"},"mass actions")," on the Product grid."),(0,d.mdx)("li",{parentName:"ul"},"The API for registering a ",(0,d.mdx)("a",{parentName:"li",href:"extension-points/menu.md"},"menu")," has changed."),(0,d.mdx)("li",{parentName:"ul"},"Updated the Admin ",(0,d.mdx)("a",{parentName:"li",href:"configuration.md"},"configuration screen")," to give the option of enabling the Admin UI SDK.")),(0,d.mdx)("h3",{id:"bug-fixes-6"},"Bug fixes"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Menus are now rendered correctly when no registrations are found.")),(0,d.mdx)("h2",{id:"known-issues"},"Known issues"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"You cannot deploy an app that uses the Admin UI SDK in a staging environment. Instead, you must deploy it in a production environment. See ",(0,d.mdx)("a",{parentName:"li",href:"publish.md"},"Prepare your app for production")," for details about this workaround.")),(0,d.mdx)("h2",{id:"version-100"},"Version 1.0.0"),(0,d.mdx)("h3",{id:"release-date-10"},"Release date"),(0,d.mdx)("p",null,"June 13, 2023"),(0,d.mdx)("h3",{id:"compatibility"},"Compatibility"),(0,d.mdx)("p",null,"Adobe Commerce for Cloud and on-premises"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"2.4.5 and higher")),(0,d.mdx)("h3",{id:"known-issues-1"},"Known issues"),(0,d.mdx)("p",null,"None"))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-admin-ui-sdk-release-notes-md-c6aa01207f6ce0315f2e.js.map