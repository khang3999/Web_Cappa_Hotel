// Chat
    window.__lc = window.__lc || {};
    window.__lc.license = 18109608;
    window.__lc.integration_name = "manual_channels";
    window.__lc.product_name = "livechat";
    ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))

// Lấy danh sách các phần tử bạn muốn thực hiện animation
const items = document.querySelectorAll('.animate-on-scroll');

// Hàm kiểm tra xem phần tử có nằm trong tầm nhìn không
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Hàm xử lý sự kiện cuộn trang
function handleScroll() {
    items.forEach(item => {
        if (isElementInViewport(item)) {
            item.classList.add('show');
        }
    });
}

// Gắn sự kiện cuộn trang
window.addEventListener('scroll', handleScroll);

// Gọi hàm một lần khi trang được tải lần đầu tiên
handleScroll();