// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-services",
          title: "services",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "post-ebt-energy-based-transformers-are-scalable-learners-and-thinkers",
      
        title: "EBT: Energy-Based Transformers are Scalable Learners and Thinkers",
      
      description: "What are Energy-Based Transformers and why should I care about them?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/ebt/";
        
      },
    },{id: "post-the-different-components-of-intelligence",
      
        title: "The Different Components of Intelligence",
      
      description: "What are the different components of intelligence?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/intelligence_components/";
        
      },
    },{id: "post-how-can-we-improve-governments",
      
        title: "How Can We Improve Governments?",
      
      description: "How can we change motivations to improve governments?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/improving_governments/";
        
      },
    },{id: "post-the-neuroplasticity-hypothesis",
      
        title: "The Neuroplasticity Hypothesis",
      
      description: "What do many of the most impactful deep learning architectural components have in common?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/neuroplasticity_hypothesis/";
        
      },
    },{id: "post-does-biological-intelligence-have-any-advantages-over-digital-intelligence",
      
        title: "Does Biological Intelligence Have Any Advantages Over Digital Intelligence?",
      
      description: "How does creativity come about?",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/biological_intelligence/";
        
      },
    },{id: "news-our-iclr-paper-eqa-mx-was-accepted-as-a-spotlight-paper-top-5",
          title: 'Our ICLR paper EQA-MX was accepted as a spotlight paper (top 5%)!',
          description: "",
          section: "News",},{id: "news-i-accepted-an-offer-to-work-at-palantir-as-a-machine-learning-research-intern-for-summer-2024-i-will-be-working-with-visual-language-models-in-seattle-smile",
          title: 'I accepted an offer to work at Palantir as a Machine Learning Research...',
          description: "",
          section: "News",},{id: "news-i-accepted-my-cs-phd-offer-at-uiuc-i-will-be-starting-fall-2024",
          title: 'I accepted my CS PhD offer at UIUC–I will be starting Fall 2024!...',
          description: "",
          section: "News",},{id: "news-i-started-my-phd-at-uiuc-working-with-professor-heng-ji-in-the-blender-lab",
          title: 'I started my PhD at UIUC working with Professor Heng Ji in the...',
          description: "",
          section: "News",},{id: "news-i-received-and-accepted-an-offer-to-work-at-meta-as-a-research-scientist-intern-i-will-be-working-in-the-wearables-org-with-lambert-mathias-and-luna-dong-in-redmond-seattle",
          title: 'I received and accepted an offer to work at Meta as a Research...',
          description: "",
          section: "News",},{id: "news-i-will-be-attending-neurips-2024",
          title: 'I will be attending NeurIPS 2024 :)',
          description: "",
          section: "News",},{id: "news-i-started-my-meta-research-scientist-internship-in-seattle",
          title: 'I started my Meta Research Scientist Internship in Seattle!',
          description: "",
          section: "News",},{id: "news-i-was-selected-as-a-top-reviewer-for-icml-2025",
          title: 'I was selected as a top reviewer for ICML 2025',
          description: "",
          section: "News",},{id: "news-i-received-the-nsf-graduate-research-fellowship-post",
          title: 'I received the NSF Graduate Research Fellowship (post)!!',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6C%65%78%69%67%6C%61%64%73%74%6F%6E%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/alexiglad", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/alexiglad", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/alexiglad", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=j9Cx6PcAAAAJ", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@AlexiGlad", "_blank");
        },
      },{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/alexiglad.bsky.social", "_blank");
        },
      },{
        id: 'social-cv_pdf',
        title: 'Cv_pdf',
        section: 'Socials',
        handler: () => {
          window.open("", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
