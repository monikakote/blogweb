const blogs = [
    {
        title: "AI Future",
        category: "tech",
        short: "AI is changing the world...",
        full: "Artificial Intelligence is transforming industries like healthcare, education, and business. It helps automate tasks and improve efficiency."
    },
    {
        title: "Healthy Life",
        category: "life",
        short: "Health is wealth...",
        full: "Maintaining a healthy lifestyle includes exercise, balanced diet, and mental wellness. Small habits create big changes."
    },
    {
        title: "Data Science",
        category: "education",
        short: "Data is the new oil...",
        full: "Data science involves analyzing large data sets to find patterns and insights. It includes Python, ML, and statistics."
    },
    {
        title: "Web Development",
        category: "tech",
        short: "Build websites easily...",
        full: "Web development includes HTML, CSS, JS and frameworks. It helps create interactive websites."
    },
    {
        title: "Self Growth",
        category: "life",
        short: "Grow daily...",
        full: "Self growth means improving skills, mindset and habits. Reading books and learning daily helps."
    },
    {
        title: "Machine Learning",
        category: "tech",
        short: "Machines that learn...",
        full: "Machine learning allows systems to learn from data and improve automatically."
    },
    {
        title: "Student Tips",
        category: "education",
        short: "Study smart...",
        full: "Students should focus on consistency, time management and practice."
    },
    {
        title: "Fitness Routine",
        category: "life",
        short: "Stay fit...",
        full: "Daily exercise improves physical and mental health."
    },
    {
        title: "Cyber Security",
        category: "tech",
        short: "Protect your data...",
        full: "Cyber security protects systems from hacking and data breaches."
    },
    {
        title: "Exam Strategy",
        category: "education",
        short: "Score high...",
        full: "Plan your study schedule and revise regularly."
    },
    {
        title: "Time Management",
        category: "life",
        short: "Use time wisely...",
        full: "Prioritize tasks and avoid distractions."
    },
    {
        title: "Python Basics",
        category: "education",
        short: "Learn coding...",
        full: "Python is easy and widely used in AI and data science."
    },
    {
        title: "Future Tech",
        category: "tech",
        short: "Next generation...",
        full: "Blockchain, AI and IoT are shaping the future."
    },
    {
        title: "Motivation",
        category: "life",
        short: "Stay motivated...",
        full: "Consistency beats motivation. Keep going!"
    },
    {
        title: "Online Learning",
        category: "education",
        short: "Learn anywhere...",
        full: "Online platforms provide flexible education opportunities."
    }
];

const container = document.getElementById("blogContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

function displayBlogs(data) {
    container.innerHTML = "";
    data.forEach((blog, index) => {
        container.innerHTML += `
            <div class="blog-card">
                <h3>${blog.title}</h3>
                <p>${blog.short}</p>
                <button onclick="readMore(${index})">Read More</button>
            </div>
        `;
    });
}

displayBlogs(blogs);

// Search
searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase();
    const filtered = blogs.filter(b => b.title.toLowerCase().includes(value));
    displayBlogs(filtered);
});

// Filter
categoryFilter.addEventListener("change", () => {
    const category = categoryFilter.value;
    if(category === "all"){
        displayBlogs(blogs);
    } else {
        const filtered = blogs.filter(b => b.category === category);
        displayBlogs(filtered);
    }
});

// Modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const closeBtn = document.getElementById("closeBtn");

function readMore(index){
    modal.style.display = "block";
    modalTitle.innerText = blogs[index].title;
    modalContent.innerText = blogs[index].full;
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
    if(e.target == modal){
        modal.style.display = "none";
    }
}