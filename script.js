/**
 * script.js
 * Exam Companion / Study Coach Application Logic
 */

// Data configuration
const subjects = [
    "Data Structures", "Algorithms", "Operating Systems", "DBMS",
    "Computer Networks", "Software Engineering", "OOP",
    "Web Development", "Artificial Intelligence", "Cyber Security",
    "Digital Electronics", "Microprocessors", "Computer Architecture",
    "Embedded Systems", "Signals and Systems"
];

const subjectTopics = {

  "Data Structures": [
    "Understand the basic concept of data structures and their importance in organizing data efficiently.",
    "Learn arrays and how elements are stored in contiguous memory locations.",
    "Study array operations like insertion, deletion, and traversal.",
    "Understand linked lists and dynamic memory allocation.",
    "Learn stack data structure and LIFO principle.",
    "Understand queue data structure and FIFO principle.",
    "Study trees and hierarchical data representation.",
    "Learn graph basics and traversal techniques.",
    "Understand searching algorithms like linear and binary search.",
    "Study sorting techniques and time complexity analysis."
  ],

  "Algorithms": [
    "Understand what algorithms are and how they solve problems step by step.",
    "Learn time complexity using Big-O notation.",
    "Study space complexity and memory usage.",
    "Learn sorting algorithms like bubble and selection sort.",
    "Understand searching algorithms and their efficiency.",
    "Study divide and conquer strategy.",
    "Learn greedy algorithms and decision-making logic.",
    "Understand dynamic programming basics.",
    "Practice algorithm problem solving.",
    "Revise concepts and solve previous questions."
  ],

  "Operating Systems": [
    "Understand the role of operating systems in managing hardware and software.",
    "Learn process management and process states.",
    "Study threads and concurrency concepts.",
    "Understand CPU scheduling algorithms.",
    "Learn deadlock conditions and prevention.",
    "Study memory management techniques.",
    "Understand paging and segmentation.",
    "Learn virtual memory concepts.",
    "Study file systems and storage management.",
    "Revise concepts and practice diagrams."
  ],

  "DBMS": [
    "Understand database basics and importance of data management.",
    "Learn ER modeling and database design.",
    "Study relational model concepts.",
    "Understand normalization techniques.",
    "Learn SQL basics and query writing.",
    "Study transactions and ACID properties.",
    "Understand concurrency control mechanisms.",
    "Learn indexing for faster data retrieval.",
    "Study query optimization techniques.",
    "Practice SQL queries and revise concepts."
  ],

  "Computer Networks": [
    "Understand basics of computer networks and communication.",
    "Learn OSI model layers and functions.",
    "Study TCP/IP model and protocols.",
    "Understand data link layer concepts.",
    "Learn network layer and routing.",
    "Study transport layer protocols TCP and UDP.",
    "Understand application layer protocols.",
    "Learn network security basics.",
    "Study congestion control techniques.",
    "Revise concepts and practice questions."
  ],

  "Software Engineering": [
    "Understand software development lifecycle (SDLC).",
    "Learn different development models like waterfall.",
    "Study agile and iterative development.",
    "Understand requirement analysis.",
    "Learn system design basics.",
    "Study software testing techniques.",
    "Understand debugging and maintenance.",
    "Learn project management concepts.",
    "Study quality assurance methods.",
    "Revise and practice important topics."
  ],

  "OOP": [
    "Understand object-oriented programming concepts.",
    "Learn classes and objects.",
    "Study encapsulation and data hiding.",
    "Understand inheritance concepts.",
    "Learn polymorphism and method overloading.",
    "Study abstraction principles.",
    "Understand constructors and destructors.",
    "Learn exception handling.",
    "Study real-world problem modeling.",
    "Practice coding programs."
  ],

  "Web Development": [
    "Understand basics of web development.",
    "Learn HTML structure and elements.",
    "Study CSS styling techniques.",
    "Understand layouts using Flexbox.",
    "Learn responsive design principles.",
    "Study basic JavaScript concepts.",
    "Understand DOM manipulation.",
    "Learn frontend frameworks basics.",
    "Study backend fundamentals.",
    "Build small projects and revise."
  ],

  "Artificial Intelligence": [
    "Understand basics of artificial intelligence.",
    "Learn problem-solving approaches in AI.",
    "Study search algorithms.",
    "Understand heuristic techniques.",
    "Learn knowledge representation.",
    "Study machine learning basics.",
    "Understand neural networks.",
    "Learn real-world AI applications.",
    "Study reasoning and decision making.",
    "Revise concepts and examples."
  ],

  "Cyber Security": [
    "Understand basics of cybersecurity.",
    "Learn types of cyber threats.",
    "Study cryptography concepts.",
    "Understand network security.",
    "Learn system security methods.",
    "Study ethical hacking basics.",
    "Understand firewalls and protection.",
    "Learn data protection techniques.",
    "Study risk management.",
    "Revise and practice scenarios."
  ],

  "Digital Electronics": [
    "Understand digital systems and binary logic.",
    "Learn logic gates and truth tables.",
    "Study Boolean algebra.",
    "Understand combinational circuits.",
    "Learn sequential circuits.",
    "Study flip-flops.",
    "Understand counters and registers.",
    "Learn memory elements.",
    "Study circuit design basics.",
    "Practice problems and revise."
  ],

  "Microprocessors": [
    "Understand basics of microprocessors.",
    "Learn architecture of processor.",
    "Study instruction sets.",
    "Understand addressing modes.",
    "Learn assembly language basics.",
    "Study interfacing techniques.",
    "Understand memory organization.",
    "Learn input-output operations.",
    "Practice programs.",
    "Revise concepts."
  ],

  "Computer Architecture": [
    "Understand basic computer organization.",
    "Learn CPU structure.",
    "Study instruction cycle.",
    "Understand memory hierarchy.",
    "Learn cache memory concepts.",
    "Study input-output systems.",
    "Understand pipeline processing.",
    "Learn parallel processing basics.",
    "Study system performance.",
    "Revise and practice."
  ],

  "Embedded Systems": [
    "Understand basics of embedded systems.",
    "Learn system architecture.",
    "Study microcontrollers.",
    "Understand real-time systems.",
    "Learn interfacing techniques.",
    "Study sensors and actuators.",
    "Understand system design flow.",
    "Learn applications.",
    "Study programming basics.",
    "Revise concepts."
  ],

  "Signals and Systems": [
    "Understand basics of signals.",
    "Learn types of signals.",
    "Study system properties.",
    "Understand time-domain analysis.",
    "Learn frequency-domain analysis.",
    "Study Fourier transform.",
    "Understand Laplace transform.",
    "Learn system response.",
    "Study applications.",
    "Practice and revise."
  ],

  "default": [
    "Understand basic concepts of the subject.",
    "Learn foundational theories.",
    "Study important topics.",
    "Understand core structures.",
    "Learn advanced concepts.",
    "Study practical applications.",
    "Practice problems.",
    "Revise key ideas.",
    "Strengthen weak areas.",
    "Prepare for exam."
  ]
};

// Main Initialization
document.addEventListener("DOMContentLoaded", () => {
    // 1. Initial page fadeIn transition
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 50);

    const path = window.location.pathname;

    // 2. Active Nav Link & Smooth Transitions
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // Mark active
        if (linkPath === path || (path === '/' && linkPath === '/index.html')) {
            link.classList.add('active');
        }
        
        // Handle transition click
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.body.classList.remove("loaded");
            setTimeout(() => {
                window.location.href = linkPath;
            }, 400); // Wait for CSS transition
        });
    });

    // 3. Theme Application
    if (localStorage.getItem('studyCoachTheme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // 4. Auth System
    const user = JSON.parse(localStorage.getItem('studyCoachUser'));
    const authModal = document.getElementById('authModal');
    
    if (!user && authModal && (path === '/' || path === '/index.html' || path === '')) {
        setTimeout(() => { authModal.classList.add('active'); }, 500);
    }

    if (authModal) {
        document.getElementById('authForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('authName').value;
            const email = document.getElementById('authEmail').value;
            if (name && email) {
                const newUser = {
                    name, 
                    email, 
                    streak: 1, 
                    lastLogin: new Date().toDateString()
                };
                localStorage.setItem('studyCoachUser', JSON.stringify(newUser));
                authModal.classList.remove('active');
                initApp(path);
            }
        });
    }

    // 5. Update streak logic 
    if (user) {
        const today = new Date().toDateString();
        if (user.lastLogin !== today) {
            // Very basic streak logic: +1 if logged in a different day.
            user.streak = (user.streak || 0) + 1;
            user.lastLogin = today;
            localStorage.setItem('studyCoachUser', JSON.stringify(user));
        }
    }

    // Pass execution to page logic
    initApp(path);
});

function initApp(path) {
    if (path.includes("planner.html")) initPlanner();
    else if (path.includes("progress.html")) initProgress();
    else if (path.includes("focus.html")) initFocus();
    else if (path.includes("timer.html")) initTimer();
    else if (path.includes("profile.html")) initProfile();
}

/** --------------- PLANNER LOGIC --------------- **/
function initPlanner() {
    const select = document.getElementById('subjectSelect');
    if (!select) return;
    
    // Inject subjects
    subjects.forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub; 
        opt.textContent = sub;
        select.appendChild(opt);
    });

    // Handle plan generation
    document.getElementById('plannerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const subject = select.value;
        const days = parseInt(document.getElementById('daysInput').value);
        if (!subject || isNaN(days) || days <= 0) return;

        const baseTopics = subjectTopics[subject] || subjectTopics['default'];
        let plan = [];
        
        // Distribute topics iteratively to fit 'days'
        for (let i = 1; i <= days; i++) {
            const topic = baseTopics[(i - 1) % baseTopics.length];
            plan.push({ 
                day: i, 
                title: `Day ${i}: ${topic}`, 
                completed: false 
            });
        }
        
        localStorage.setItem('studyCoachPlan', JSON.stringify({ subject, plan }));
        renderPlan(plan, subject);
        
        // Show success alert
        setTimeout(() => alert('Plan Generated! Check the Progress page to track it.'), 100);
    });

    // Render existing plan on load
    const existing = JSON.parse(localStorage.getItem('studyCoachPlan'));
    if (existing && existing.plan) {
        renderPlan(existing.plan, existing.subject);
    }
}

function renderPlan(plan, subject) {
    const out = document.getElementById('planOutput');
    out.innerHTML = `<h3 class="mb-1">Active Plan: ${subject}</h3>`;
    
    plan.forEach((item, idx) => {
        out.innerHTML += `
            <div class="plan-day" style="animation-delay: ${idx * 0.05}s">
                <strong>${item.title}</strong>
            </div>
        `;
    });
}

/** --------------- PROGRESS LOGIC --------------- **/
function initProgress() {
    const user = JSON.parse(localStorage.getItem('studyCoachUser')) || { streak: 0 };
    document.getElementById('streakCount').textContent = `${user.streak || 1} Days`;

    const data = JSON.parse(localStorage.getItem('studyCoachPlan'));
    const container = document.getElementById('progressContainer');

    if (!data) {
        container.innerHTML = '<p class="text-light text-center">No active plan found. Create one in the Planner page!</p>';
        return;
    }

    document.getElementById('progressTitle').textContent = `Plan: ${data.subject}`;
    renderTasksAndProgress(data.plan);
}

window.toggleTask = function(idx) {
    const data = JSON.parse(localStorage.getItem('studyCoachPlan'));
    if (!data) return;
    
    // Toggle completion status
    data.plan[idx].completed = !data.plan[idx].completed;
    localStorage.setItem('studyCoachPlan', JSON.stringify(data));
    
    // Re-render
    renderTasksAndProgress(data.plan);
}

function renderTasksAndProgress(plan) {
    const completed = plan.filter(p => p.completed).length;
    const total = plan.length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

    document.getElementById('progressText').textContent = `${completed} of ${total} Tasks Completed (${percentage}%)`;
    
    // Slight delay for animation effect
    setTimeout(() => {
        document.getElementById('progressFill').style.width = percentage + '%';
    }, 100);

    const list = document.getElementById('taskList');
    list.innerHTML = '';
    
    plan.forEach((task, idx) => {
        const itemClass = task.completed ? 'task-item completed' : 'task-item';
        const checked = task.completed ? 'checked' : '';
        const html = `
            <div class="${itemClass}">
                <input type="checkbox" id="task${idx}" ${checked} onchange="toggleTask(${idx})">
                <label for="task${idx}" style="cursor: pointer; width: 100%;">${task.title}</label>
            </div>
        `;
        list.innerHTML += html;
    });
}

/** --------------- FOCUS LOGIC --------------- **/
function initFocus() {
    const quotes = [
        "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing. — Pelé",
        "There are no secrets to success. It is the result of preparation, hard work, and learning from failure. — Colin Powell",
        "Strive for progress, not perfection.",
        "The expert in anything was once a beginner.",
        "Don't wish it were easier. Wish you were better. — Jim Rohn",
        "Focus on being productive instead of busy. — Tim Ferriss"
    ];
    document.getElementById('quoteText').textContent = quotes[Math.floor(Math.random() * quotes.length)];

    const select = document.getElementById('focusSubjectSelect');
    if (!select) return;

    subjects.forEach(sub => {
        const opt = document.createElement('option');
        opt.value = sub; 
        opt.textContent = sub;
        select.appendChild(opt);
    });

    select.addEventListener('change', () => {
        const sub = select.value;
        const out = document.getElementById('importantTopics');
        const list = subjectTopics[sub] || subjectTopics['default'];
        
        out.innerHTML = '';
        list.forEach((t, idx) => {
            out.innerHTML += `<div class="topic-card" style="animation-delay: ${idx * 0.05}s">${t}</div>`;
        });
    });
}

/** --------------- TIMER LOGIC --------------- **/
function initTimer() {
    let timeLeft = 25 * 60; // 25 minutes
    let timerId = null;
    let isRunning = false;
    
    const display = document.getElementById('timeDisplay');
    const toggleBtn = document.getElementById('timerToggle');

    function updateDisplay() {
        const m = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const s = (timeLeft % 60).toString().padStart(2, '0');
        display.textContent = `${m}:${s}`;
    }

    toggleBtn.addEventListener('click', () => {
        if (isRunning) {
            // Pause
            clearInterval(timerId);
            toggleBtn.textContent = 'Resume';
            toggleBtn.classList.remove('btn-outline');
        } else {
            // Start
            timerId = setInterval(() => {
                if (timeLeft > 0) {
                    timeLeft--;
                    updateDisplay();
                } else {
                    clearInterval(timerId);
                    alert("Focus session completed! Great job. Take a 5-minute break.");
                    isRunning = false;
                    timeLeft = 25 * 60; // Reset for next session
                    updateDisplay();
                    toggleBtn.textContent = 'Start';
                }
            }, 1000);
            toggleBtn.textContent = 'Pause';
            toggleBtn.classList.add('btn-outline');
        }
        isRunning = !isRunning;
    });

    document.getElementById('timerReset').addEventListener('click', () => {
        clearInterval(timerId);
        isRunning = false;
        timeLeft = 25 * 60;
        updateDisplay();
        toggleBtn.textContent = 'Start';
        toggleBtn.classList.remove('btn-outline');
    });

    updateDisplay();
}

/** --------------- PROFILE LOGIC --------------- **/
function initProfile() {
    const user = JSON.parse(localStorage.getItem('studyCoachUser')) || { name: '', email: '' };
    
    const nameInput = document.getElementById('profName');
    const emailInput = document.getElementById('profEmail');
    const themeSelect = document.getElementById('themeSelect');
    const notifToggle = document.getElementById('notifToggle');
    
    if (nameInput) nameInput.value = user.name || '';
    if (emailInput) emailInput.value = user.email || '';
    
    const savedTheme = localStorage.getItem('studyCoachTheme') || 'system';
    if (themeSelect) themeSelect.value = savedTheme;

    document.getElementById('profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Update user
        user.name = nameInput.value;
        user.email = emailInput.value;
        localStorage.setItem('studyCoachUser', JSON.stringify(user));
        
        // Update theme
        const theme = themeSelect.value;
        localStorage.setItem('studyCoachTheme', theme);
        
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            // If system, realistically we'd check window.matchMedia, but kept simple here.
        }

        // Fake notification feedback
        const notifMsg = notifToggle.checked ? "Notifications ON" : "Notifications OFF";
        console.log(notifMsg);

        alert('Profile preferences saved successfully!');
    });
}
