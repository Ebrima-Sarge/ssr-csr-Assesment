# ssr-csr-Assesment
Exprementing the SEO and Performance of both SSR & CSR using HTML, CSS, JS

ShuffleMeal is a logic that i came up with for Users who struggle to decide what to eat for the week can select their active days (via checkboxes) and input a list of potential meal ideas. The application then uses a randomization logic using js to "shuffle" those meals and assign them to the selected days, generating a complete, randomized menu base on your selected days.

With this application i have created both an SSR and CSR to analys the Performance, SEO and User Experinace of each of the application using the same styling and content. 

CSR Analysis 
During the analysis of the CSR my first approch was to interact with the dev tools to anlyse the seo and user experiance. During the first load of the site i observed  a short delay before the content of my web page appers. The secound approch was to disbale js on the console which shows no content but just the intial buttom that i added on the html. In the other hand  the ssr site and content appers faster and the csr took a bit time during my obervation.


Lighthouse Tool anyalsis 

First Contentful Paint:
CSR = 1.9s
SSR = 1.9s
Result: Same performance. Both show first content equally fast.

Largest Contentful Paint:
CSR = 5.0s
SSR = 4.5s
Result: SSR is slightly better. Main content loads a bit faster.

Total Blocking Time:
CSR = 1,070ms
SSR = 1,150ms
Result: CSR is slightly better. SSR blocks the main thread more.

Cumulative Layout Shift:
CSR = 0.428
SSR = 0
Result: SSR is much better. Layout shifting is completely fixed.

Speed Index:
CSR = 1.9s
SSR = 1.9s
Result: Same visual loading speed.

Obeservation during my comparison 
SSR improved layout stability and slightly improved LCP, but JavaScript blocking became worse.
SEO → SSR wins clearly
User Experience → SSR better (stable layout)
Performance → Slight SSR improvement. 

Network testing using 3G 
After chnaging the network to 3G on the dev tool i came to realize that the CSR version relies heavily on csr.js (4.3 kB) to build the entire DOM while the SSR results show a dedicated ssr.css file being parsed. By delivering styles and structure in the initial HTML, the browser can begin "painting" the layout (the boxes, the colors) much sooner than the CSR version.

overall the SSR provides a significantly more professional and stable experience. It ensures the application is visible instantly and remains layout-stable, while CSR’s heavy reliance on JavaScript creates a "bottleneck" that hurts both SEO and initial user engagement.





