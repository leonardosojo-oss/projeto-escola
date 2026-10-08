
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#eff6ff',
                    100: '#dbeafe',
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                }
            }
        }
    }
};


function revealInfo() {
    const section = document.getElementById('info-section');
    if (!section) return;

    section.classList.remove('hidden');
    
    setTimeout(() => {
        section.classList.remove('opacity-0', 'translate-y-10');
    }, 50);

    section.scrollIntoView({ behavior: 'smooth' });
}

function switchTab(tabName) {

    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(el => el.classList.add('hidden'));

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.className = "tab-btn px-6 py-3 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition";
    });

    const selectedTab = document.getElementById(`tab-${tabName}`);
    if (selectedTab) {
        selectedTab.classList.remove('hidden');
    }

    const activeBtn = document.getElementById(`btn-${tabName}`);
    if (activeBtn) {
        activeBtn.className = "tab-btn px-6 py-3 rounded-xl font-semibold bg-brand-600 text-white shadow-md transition";
    }
}


document.addEventListener('DOMContentLoaded', () => {

    const btnHeader = document.getElementById('btn-header-reveal');
    const btnHero = document.getElementById('btn-hero-reveal');

    if (btnHeader) {
        btnHeader.addEventListener('click', (e) => {
            e.preventDefault();
            revealInfo();
        });
    }

    if (btnHero) {
        btnHero.addEventListener('click', revealInfo);
    }


    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.getAttribute('data-tab');
            if (tabName) {
                switchTab(tabName);
            }
        });
    });
});