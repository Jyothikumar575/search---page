const data = [
    { title: "Technology Advances in 2024", category: "Technology" },
    { title: "Education Trends for the Future", category: "Education" },
    { title: "Health and Wellness Tips", category: "Health" },
    { title: "AI in Healthcare", category: "Technology" },
    { title: "Online Learning Platforms", category: "Education" },
  ];
  
  function renderResults(filteredData) {
    const results = document.getElementById("results");
    results.innerHTML = "";
  
    if (filteredData.length === 0) {
      results.innerHTML = "<li>No results found</li>";
      return;
    }
  
    filteredData.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.title} (${item.category})`;
      results.appendChild(li);
    });
  }
  
  function handleSearch() {
    const searchValue = document.getElementById("searchBox").value.toLowerCase();
    const filters = Array.from(document.querySelectorAll(".filter:checked")).map(
      filter => filter.value
    );
  
    const filteredData = data.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchValue);
      const matchesFilter = filters.length === 0 || filters.includes(item.category);
      return matchesSearch && matchesFilter;
    });
  
    renderResults(filteredData);
  }
  
  function applyFilters() {
    handleSearch();
  }
  
  // Initialize with full data
  renderResults(data);
  