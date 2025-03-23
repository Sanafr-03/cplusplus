// Data Array
const data = [
    { 
      title: "How to avoid bugs using modern C++", 
      author: "PVSCoder", 
      date: "2016-09-16", 
      score: 4.3, 
      categories: "Tips and Tricks, C++" 
    },
    { 
      title: "C++ class for generating Fibonacci series", 
      author: "mhcrnl", 
      date: "2016-08-09", 
      score: 3.6, 
      categories: "Source Code, C++" 
    },
    { 
      title: "Safe Clearing of Private Data", 
      author: "AndreyKarpov", 
      date: "2016-04-06", 
      score: 4.1, 
      categories: "Data Security, How-To" 
    },
    { 
      title: "Sierpinski Triangle Fractal", 
      author: "bilalCh213", 
      date: "2015-10-13", 
      score: 4.3, 
      categories: "Graphics, Algorithms" 
    },
    { 
        title: "Koch Fractal - One of the easiest algorithms with graphics", 
        author: "bilalCh213", 
        date: "2015-10-01", 
        score: 4.3, 
        votes: 348, 
        categories: "Tools and Libraries, Source Code, Graphics and Multimedia, Algorithms"
      },
      { 
        title: "10 tips to be productive in CLion, a cross-platform C/C++ IDE", 
        author: "anastasiak2512", 
        date: "2015-06-09", 
        score: 4.3, 
        votes: 245,
        categories: "Tools and Libraries, Tips and Tricks"
      },
      { 
        title: "Fibonacci at its best", 
        author: "Sobo", 
        date: "2015-03-28", 
        score: 3.5, 
        votes: 530,
        categories: "C++11, Unix/Linux Programming, Source Code, Tips and Tricks"
      },
      { 
        title: "Null Pointer Dereferencing Causes Undefined Behavior", 
        author: "AndreyKarpov", 
        date: "2015-02-16", 
        score: 3.8, 
        votes: 60,
        categories: "Language Features, Tips and Tricks"
      },
      { 
        title: "Android Kernel: Lacking in Modularity", 
        author: "Securb", 
        date: "2015-01-08", 
        score: 3.5, 
        votes: 235,
        categories: "Tips and Tricks, Source Code, How-To, C++11"
      },
      { 
        title: "Using the Design Pattern State for Semaphore Problem", 
        author: "afgattem", 
        date: "2014-12-28", 
        score: 3.8, 
        votes: 146,
        categories: "How-To, C++11"
      },
      { 
        title: "A simple OpenGL animation with glfw, step by step", 
        author: "biocode", 
        date: "2014-12-02", 
        score: 4.1, 
        votes: 294,
        categories: "Graphics and Multimedia, C++11"
      },
      { 
        title: "Split a String", 
        author: "bayusetiaj", 
        date: "2014-11-14", 
        score: 3.8, 
        votes: 758,
        categories: "How-To, C++11, Tips and Tricks"
      },
      { 
        title: "Declarations, Prototypes, Definitions, and Implementations", 
        author: "Esslecurf", 
        date: "2014-10-26", 
        score: 4.2, 
        votes: 585,
        categories: "Language Features, How-To"
      },
      { 
        title: "Finding Skype's Default Account Name", 
        author: "Michael Haepntri", 
        date: "2014-10-20", 
        score: 3.1, 
        votes: 29,
        categories: "How-To"
      },
      { 
        title: "Virtual Method Table and Accident Prevention", 
        author: "AndreyKarpov", 
        date: "2014-10-10", 
        score: 3.9, 
        votes: 98,
        categories: "Visual C++, Tips and Tricks"
      },
      { 
        title: "Dynamically sorting both keys and values", 
        author: "shimon", 
        date: "2014-09-24", 
        score: 3.9, 
        votes: 98,
        categories: "Algorithms"
      },
  ];
  
  function renderCards(arr) {
    const container = document.getElementById("card-container");
    container.innerHTML = "";
    arr.forEach(item => {
      const totalStars = 5;
      const filledStars = Math.round(item.score);
      const emptyStars = totalStars - filledStars;
      let starsHTML = "";
  
      // Generate filled stars
      for (let i = 0; i < filledStars; i++) {
        starsHTML += "⭐";
      }
      // Generate empty stars
      for (let i = 0; i < emptyStars; i++) {
        starsHTML += "☆";
      }
  
      const votes = Math.floor(Math.random() * 1000) + 100; // Generate random votes
  
      container.innerHTML += `
        <div class="card">
          <h3>${item.title}</h3>
          <p><strong>Author:</strong> ${item.author}</p>
          <p><strong>Categories:</strong> ${item.categories}</p>
          <p class="date"><strong>Date:</strong> ${new Date(item.date).toDateString()}</p>
          <p class="score"><strong>Score:</strong> ${starsHTML} <br> ${item.score.toFixed(1)} (${votes} votes)</p>
        </div>
      `;
    });
  }
  
  
  // Sort by date
function sortByDate(order) {
    const sorted = [...data].sort((a, b) => {
      return order === 'newest' 
        ? new Date(b.date) - new Date(a.date)
        : new Date(a.date) - new Date(b.date);
    });
    renderCards(sorted);
  }
  
  // Sort by score
  function sortByScore(order) {
    const sorted = [...data].sort((a, b) => {
      return order === 'highest' 
        ? b.score - a.score
        : a.score - b.score;
    });
    renderCards(sorted);
  }
  
  // Event Listeners
  document.querySelectorAll(".dropdown-content1")[0].addEventListener("click", (e) => {
    if (e.target.innerText === "Newest to Oldest") sortByDate('newest');
    if (e.target.innerText === "Oldest to Newest") sortByDate('oldest');
  });
  
  document.querySelectorAll(".dropdown-content1")[1].addEventListener("click", (e) => {
    if (e.target.innerText === "Highest to Lowest") sortByScore('highest');
    if (e.target.innerText === "Lowest to Highest") sortByScore('lowest');
  });
  
  // Scroll to Section
  function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  }
  
  // Initial Call
  renderCards(data);

  


  