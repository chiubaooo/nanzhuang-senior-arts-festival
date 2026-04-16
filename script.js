// Scroll Progress
window.addEventListener('scroll', () => {
    const scrollBar = document.querySelector('.scroll-progress');
    const scrollMax = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = (window.scrollY / scrollMax) * 100;
    scrollBar.style.width = scrollPercentage + '%';
});

// Tab Management
function showTab(tabId) {
    // Remove active class from all buttons and content
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
    
    // Add active class to current selection
    const activeBtn = event.currentTarget;
    activeBtn.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Budget Detail Logic (Log to console or alert if teacher asks)
const budgetContext = {
    tier520: "電子感謝卡。成本：NT$ 20 (含設計費)。淨收益：NT$ 500 (100%投入專案)。",
    tier980: "實體感謝卡+農會特產。成本：NT$ 460 (含印刷費、產品成本與運費)。淨收益：NT$ 520。",
    fragilePolicy: "雙層防震包裝 + 法藍瓷專業物流分流方案 (Fragile-Safe Packaging)。",
    ticketPolicy: "高階方案含現場座席。一般票務視為戰略盈餘，用於後續在地策展。"
};

console.log("Budget Logic Loaded:", budgetContext);
