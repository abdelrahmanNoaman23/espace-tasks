import React, { useState, useEffect } from 'react';
import {  Heart, Eye, MessageCircle, Calendar, User } from 'lucide-react';
import './App.css';

const CardGrid = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [likedCards, setLikedCards] = useState(new Set());

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const cards = [
    {
      id: 1,
      title: "Modern Web Design",
      description: "Exploring cutting-edge design patterns and user experience principles for contemporary web applications.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      category: "Design",
      author: "Abdelrahman El-Sayed",
      date: "2024-01-15",
      likes: 234,
      views: 1840,
      comments: 45
    },
    {
      id: 2,
      title: "React Performance",
      description: "Advanced techniques for optimizing React applications and achieving better rendering performance.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop",
      category: "Development",
      author: "Ahmed Hassan",
      date: "2024-01-12",
      likes: 456,
      views: 2340,
      comments: 78
    },
    {
      id: 3,
      title: "CSS Grid Mastery",
      description: "Deep dive into CSS Grid layout system with practical examples and advanced grid techniques.",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "CSS",
      author: "Aya Khaled",
      date: "2024-01-10",
      likes: 189,
      views: 1560,
      comments: 32
    },
    {
      id: 4,
      title: "JavaScript ES2024",
      description: "Latest JavaScript features and how to leverage them in modern application development.",
      image: "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D",
      category: "JavaScript",
      author: "Maram El-Sayed",
      date: "2024-01-08",
      likes: 342,
      views: 2890,
      comments: 67
    },
    {
      id: 5,
      title: "Mobile-First Design",
      description: "Strategies for creating responsive designs that work seamlessly across all device sizes.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      category: "UX/UI",
      author: "menna mohamed",
      date: "2024-01-05",
      likes: 278,
      views: 1950,
      comments: 54
    },
    {
      id: 6,
      title: "Animation Principles",
      description: "Understanding motion design and creating engaging user interfaces with smooth animations.",
      image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZGUlMjBhbmltYXRpb258ZW58MHx8MHx8fDA%3D",
      category: "Animation",
      author: "khalid Ali",
      date: "2024-01-03",
      likes: 412,
      views: 3120,
      comments: 89
    },
    {
      id: 7,
      title: "TypeScript Advanced",
      description: "Advanced TypeScript patterns and techniques for building robust, type-safe applications.",
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=300&fit=crop",
      category: "TypeScript",
      author: "Rana Hassan",
      date: "2024-01-01",
      likes: 367,
      views: 2450,
      comments: 71
    },
    {
      id: 8,
      title: "API Design Best Practices",
      description: "Creating well-structured, maintainable APIs that scale with your application needs.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=400&h=300&fit=crop",
      category: "Backend",
      author: "hassan mohamed",
      date: "2023-12-28",
      likes: 298,
      views: 1780,
      comments: 43
    }
  ];

  const handleLike = (cardId) => {
    setLikedCards(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(cardId)) {
        newLiked.delete(cardId);
      } else {
        newLiked.add(cardId);
      }
      return newLiked;
    });
  };

  return (
    <div className="app-container">
      
      <div className="content-wrapper">
        <header className="app-header">
          <h1 className="main-title">
            Featured <span className="gradient-text">Articles</span>
          </h1>
          <p className="subtitle">
            Discover the latest insights and techniques in web development
          </p>
        </header>

        <main className="cards-grid">
          {cards.map((card, index) => (
            <article
              key={card.id}
              className={`card ${isLoaded ? 'loaded' : ''}`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="card-image-container">
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-image"
                />
                <div className="image-overlay"></div>
                
                <div className="category-badge">
                  {card.category}
                </div>

                <button
                  onClick={() => handleLike(card.id)}
                  className="like-button"
                  aria-label={`Like ${card.title}`}
                >
                  <Heart
                    size={18}
                    className={`heart-icon ${likedCards.has(card.id) ? 'liked' : ''}`}
                  />
                </button>
              </div>

              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>

                <div className="author-info">
                  <User size={16} className="author-icon" />
                  <span className="author-name">{card.author}</span>
                  <Calendar size={14} className="date-icon" />
                  <span className="publish-date">
                    {new Date(card.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="card-stats">
                  <div className="stats-group">
                    <div className="stat-item">
                      <Heart size={14} />
                      <span>{card.likes}</span>
                    </div>
                    <div className="stat-item">
                      <Eye size={14} />
                      <span>{card.views}</span>
                    </div>
                    <div className="stat-item">
                      <MessageCircle size={14} />
                      <span>{card.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hover-overlay"></div>
              <div className="animated-border"></div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CardGrid;