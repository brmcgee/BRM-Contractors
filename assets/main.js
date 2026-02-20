// Responsive menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optional: Smooth scroll for anchor links
const links = document.querySelectorAll('a[href^="#"]');
for (const link of links) {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active'); // Close menu on mobile after click
        }
    });
}

// Optional: Simple form handler (no backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting BRM Contractors! We will get back to you soon.');
    this.reset();
});

// Gallery loader: reads gallery-data.json and injects images
async function initGallery() {
    const grid = document.getElementById('galleryGrid');
    const tabsContainer = document.getElementById('galleryTabs');
    if (!grid || !tabsContainer) return;
    try {
        const resp = await fetch('assets/gallery-data.json');
        if (!resp.ok) throw new Error('Network response was not ok');
        const data = await resp.json();
        // default to Bathroom Remodels if available, else All
        let currentTag = 'Bathroom Remodels';

        // collect unique tags from data
        const tagSet = new Set();
        data.forEach(item => {
            if (item.tags && item.tags.length) {
                item.tags.forEach(t => tagSet.add(t));
            }
        });
        const tags = ['All', ...Array.from(tagSet)];

        if (!tags.includes(currentTag)) {
            currentTag = 'All';
        }

        // render tab buttons
        tags.forEach(tag => {
            const btn = document.createElement('button');
            btn.textContent = tag;
            if (tag === currentTag) btn.classList.add('active');
            btn.addEventListener('click', () => {
                currentTag = tag;
                document.querySelectorAll('.gallery-tabs button').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderGrid(data, currentTag);
            });
            tabsContainer.appendChild(btn);
        });

        renderGrid(data, currentTag);

    } catch (err) {
        console.error('Failed to load gallery:', err);
    }
}

function renderGrid(data, tag) {
    const grid = document.getElementById('galleryGrid');
    grid.innerHTML = '';
    const visible = data.filter(item => {
        if (tag === 'All') return true;
        return item.tags && item.tags.includes(tag);
    });

    // if only one image, constrain grid size to mimic two columns
    if (visible.length === 1) {
        grid.classList.add('single');
    } else {
        grid.classList.remove('single');
    }

    visible.forEach(item => {
        const wrapper = document.createElement('div');
        wrapper.className = 'item';
        const img = document.createElement('img');
        img.src = `assets/gallery/${item.file}`;
        img.alt = item.title;
        img.addEventListener('click', () => openLightbox(item));
        const caption = document.createElement('div');
        caption.className = 'caption';
        caption.textContent = item.title;
        wrapper.appendChild(img);
        wrapper.appendChild(caption);
        grid.appendChild(wrapper);
    });
}

// initialize theme toggle
function initTheme() {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    const apply = (dark) => {
        document.body.classList.toggle('dark-theme', dark);
        toggle.textContent = dark ? '🌙' : '🌞';
    };
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    let dark = saved ? saved === 'dark' : prefersDark;
    apply(dark);
    toggle.addEventListener('click', () => {
        dark = !dark;
        apply(dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    });
}
// color scheme toggle (blue/red)
function initColor() {
    const toggle = document.getElementById('colorToggle');
    if (!toggle) return;
    const apply = (red) => {
        document.body.classList.toggle('red-theme', red);
        toggle.textContent = red ? '🔴' : '🔵';
    };
    // default to red if no preference stored
    let stored = localStorage.getItem('color');
    let red = stored ? stored === 'red' : true;
    apply(red);
    toggle.addEventListener('click', () => {
        red = !red;
        apply(red);
        localStorage.setItem('color', red ? 'red' : 'blue');
    });
}
function openLightbox(item) {
    let lb = document.getElementById('lightbox');
    if (!lb) {
        lb = document.createElement('div');
        lb.id = 'lightbox';
        lb.innerHTML = `
            <div class="lb-content">
                <button class="lb-close">×</button>
                <img src="" alt="" />
                <div class="lb-tags"></div>
            </div>
        `;
        document.body.appendChild(lb);
        lb.addEventListener('click', e => {
            if (e.target === lb || e.target.classList.contains('lb-close')) {
                lb.classList.remove('visible');
            }
        });
    }
    const img = lb.querySelector('img');
    const tagsContainer = lb.querySelector('.lb-tags');
    img.src = `assets/gallery/${item.file}`;
    img.alt = item.title;
    // build badges for each tag
    tagsContainer.innerHTML = '';
    if (item.tags && item.tags.length) {
        item.tags.forEach(t => {
            const span = document.createElement('span');
            span.className = 'badge';
            span.textContent = t;
            tagsContainer.appendChild(span);
        });
    }
    lb.classList.add('visible');
}

// initialize gallery and theme after DOM is ready
function handleDOMContentLoaded() {
    initGallery();
    initTheme();
    initColor();
}

document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
