// Projects array — edit links and descriptions as you like.
// For private repos set link to actual URL or leave as "#" if you don't want to link it publicly.
const projects = [
  {
    name: "TrafficLens-AI-India-first-navigation-system-",
    desc: "TrafficLens AI — navigation system tailored for India’s chaotic road ecosystem.",
    type: "other",
    tag: "Project",
    updated: "Updated yesterday",
    link: "https://github.com/pridwimnjha/TrafficLens-AI-India-first-navigation-system-"
  },
  { name: "Use-CNN-to-classify-the-digits.-Use-MNIST-dataset", desc: "CNN classification on MNIST dataset (Jupyter Notebook).", type: "jupyter", updated: "Updated last week", link: "https://github.com/pridwimnjha/Use-CNN-to-classify-the-digits.-Use-MNIST-dataset" },
  { name: "DL-ML-for-Adaptive-Intrusion-Detection-and-Prevention-in-Next-Generation-Networks", desc: "Deep Learning & ML for adaptive intrusion detection.", type: "other", updated: "Updated last week", link: "https://github.com/pridwimnjha/DL-ML-for-Adaptive-Intrusion-Detection-and-Prevention-in-Next-Generation-Networks" },
  { name: "FactWise-Backend", desc: "Backend (private) — replace with link if you want visitors to access it.", type: "python", updated: "Updated 2 weeks ago", link: "#" },
  { name: "classical-edge-detection-techniques-in-image-processing.", desc: "Classic edge detection techniques (image processing).", type: "other", updated: "Updated 2 weeks ago", link: "https://github.com/pridwimnjha/classical-edge-detection-techniques-in-image-processing." },
  { name: "Morphological-Image-Processing-using-MATLAB", desc: "Morphological ops implemented in MATLAB.", type: "matlab", updated: "Updated 2 weeks ago", link: "https://github.com/pridwimnjha/Morphological-Image-Processing-using-MATLAB" },
  { name: "Apply-DFT-on-digital-images", desc: "Apply Discrete Fourier Transform on digital images.", type: "other", updated: "Updated 2 weeks ago", link: "https://github.com/pridwimnjha/Apply-DFT-on-digital-images" },
  { name: "pridwimnjha", desc: "Hello world repo / miscellaneous.", type: "other", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/pridwimnjha" },
  { name: "Text-Representation--Implementation", desc: "Text representation techniques — implementations in notebooks.", type: "jupyter", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/Text-Representation--Implementation" },
  { name: "Analyzing-Gutenberg-and-Brown-corpus-with-python", desc: "Corpus analysis using Python for Gutenberg & Brown corpora.", type: "jupyter", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/Analyzing-Gutenberg-and-Brown-corpus-with-python" },
  { name: "An-Agile-and-UML-Driven-Approach-to-Flight-Delay-Prediction-and-Notification", desc: "Flight delay prediction project with Agile + UML approach.", type: "other", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/An-Agile-and-UML-Driven-Approach-to-Flight-Delay-Prediction-and-Notification" },
  { name: "Identify-the-Sentiments-Analytics-Vidhya-", desc: "Sentiment identification notebook (Analytics Vidhya).", type: "jupyter", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/Identify-the-Sentiments-Analytics-Vidhya-" },
  { name: "Gaussian-Mixture-Model-GMM-to-track-movement-of-objects", desc: "GMM to track movement of objects — notebook.", type: "jupyter", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/Gaussian-Mixture-Model-GMM-to-track-movement-of-objects" },
  { name: "XSS-Attack", desc: "Simple HTML demo related to XSS concepts.", type: "html", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/XSS-Attack" },
  { name: "ORB-to-align-images", desc: "ORB feature matching to align images (notebook).", type: "jupyter", updated: "Updated 3 weeks ago", link: "https://github.com/pridwimnjha/ORB-to-align-images" },
  { name: "NLP-Word-Sense-Disambiguation-WSD-", desc: "Word Sense Disambiguation notebook.", type: "jupyter", updated: "Updated last month", link: "https://github.com/pridwimnjha/NLP-Word-Sense-Disambiguation-WSD-" },
  { name: "artisan-prototype", desc: "HTML prototype for artisan project.", type: "html", updated: "Updated last month", link: "https://github.com/pridwimnjha/artisan-prototype" },
  { name: "Loan_prediction", desc: "Loan prediction Jupyter notebooks (two notebooks).", type: "jupyter", updated: "Updated last month", link: "https://github.com/pridwimnjha/Loan_prediction" },
  { name: "Web-Scraping-for-Text-Analysis-using-Beautiful-Soup-", desc: "Web scraping notebooks for text analysis.", type: "jupyter", updated: "Updated last month", link: "https://github.com/pridwimnjha/Web-Scraping-for-Text-Analysis-using-Beautiful-Soup-" },
  { name: "Web-Scraping-for-Text-Analysis-using-Beautiful-Soup-with-Python", desc: "Alternate notebook: web-scraping for text analysis.", type: "jupyter", updated: "Updated on Sep 18", link: "https://github.com/pridwimnjha/Web-Scraping-for-Text-Analysis-using-Beautiful-Soup-with-Python" },
  { name: "Exploratory-Data-Analysis-of-Textual-Data", desc: "EDA of textual data (notebook).", type: "jupyter", updated: "Updated on Sep 17", link: "https://github.com/pridwimnjha/Exploratory-Data-Analysis-of-Textual-Data" },
  { name: "Named-Entity-Recognition-NER-in-text-data.", desc: "NER notebook and experiments.", type: "jupyter", updated: "Updated on Sep 16", link: "https://github.com/pridwimnjha/Named-Entity-Recognition-NER-in-text-data." },
  { name: "Word2Vec-GloVe", desc: "Word2Vec and GloVe experiments (notebook).", type: "jupyter", updated: "Updated on Sep 15", link: "https://github.com/pridwimnjha/Word2Vec-GloVe" },
  { name: "HotelManagementCiscoPacketTracer", desc: "Cisco Packet Tracer project for hotel management.", type: "other", updated: "Updated on May 19", link: "https://github.com/pridwimnjha/HotelManagementCiscoPacketTracer" },
  { name: "Hotel-Management-Cisco-packet-tracer", desc: "Alternate Hotel Management Packet Tracer repo.", type: "other", updated: "Updated on May 19", link: "https://github.com/pridwimnjha/Hotel-Management-Cisco-packet-tracer" },
  { name: "Healthcare_data", desc: "Healthcare dataset from Andhra Pradesh — notebook.", type: "jupyter", updated: "Updated on Nov 13, 2024", link: "https://github.com/pridwimnjha/Healthcare_data" },
  { name: "Black-Friday-Anaytics-Vidhya", desc: "Black Friday analytics (Vidhya) — notebook.", type: "jupyter", updated: "Updated on Nov 13, 2024", link: "https://github.com/pridwimnjha/Black-Friday-Anaytics-Vidhya" },
  { name: "Employee_attrition_prediction", desc: "Employee attrition prediction project — notebook.", type: "jupyter", updated: "Updated on Nov 13, 2024", link: "https://github.com/pridwimnjha/Employee_attrition_prediction" },
  { name: "Twitter-sentiment-Analysis", desc: "Twitter sentiment analysis notebooks.", type: "jupyter", updated: "Updated on Nov 13, 2024", link: "https://github.com/pridwimnjha/Twitter-sentiment-Analysis" },
  { name: "BIG_MART_Analytics_vidhya", desc: "Big Mart Sales prediction — notebook(s).", type: "jupyter", updated: "Updated on Nov 9, 2024", link: "https://github.com/pridwimnjha/BIG_MART_Analytics_vidhya" }
];

// Utilities to render project cards
const projectsGrid = document.getElementById("projects-grid");
const searchInput = document.getElementById("search");
const filterType = document.getElementById("filter-type");

function makeCard(p){
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div class="meta">
      <span class="badge">${p.type.toUpperCase()}</span>
      <small>${p.updated}</small>
    </div>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="actions">
      <a href="${p.link}" target="_blank" ${p.link === "#" ? 'title="Private or missing link"' : ''}>View Repo</a>
      <a class="primary" href="${p.link === "#" ? '#' : p.link + '/blob/main/README.md'}" target="_blank">README</a>
    </div>
  `;
  return card;
}

function render(list){
  projectsGrid.innerHTML = "";
  if(list.length === 0){
    projectsGrid.innerHTML = "<p style='color:var(--muted)'>No projects found.</p>";
    return;
  }
  list.forEach(p => projectsGrid.appendChild(makeCard(p)));
}

// Filtering + searching
function applyFilters(){
  const q = searchInput.value.trim().toLowerCase();
  const t = filterType.value;
  const filtered = projects.filter(p=>{
    const matchQ = (p.name + " " + p.desc + " " + (p.tag||"")).toLowerCase().includes(q);
    const matchT = t === "all" ? true : (p.type === t);
    return matchQ && matchT;
  });
  render(filtered);
}

// initial render
render(projects);

// event listeners
searchInput.addEventListener("input", applyFilters);
filterType.addEventListener("change", applyFilters);
