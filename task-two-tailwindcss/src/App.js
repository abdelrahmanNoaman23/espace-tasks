import React, { useState, useEffect } from 'react';
import { Heart, Eye, MessageCircle, Calendar, User } from 'lucide-react';
import "./App.css"; 
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
    <div className="min-h-screen bg-white p-4 relative overflow-x-hidden sm:p-6 lg:p-8">

      <div className="max-w-8xl mx-auto relative z-10">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Featured <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover the latest insights and techniques in web development
          </p>
        </header>

        <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-4 sm:px-0">
          {cards.map((card, index) => (
            <article
              key={card.id}
              className={`bg-white/10 border border-white/20 rounded-2xl overflow-hidden relative transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) shadow-2xl hover:shadow-purple-500/25 hover:border-purple-300 hover:-translate-y-2 hover:scale-105 ${
                isLoaded ? 'card-entry' : 'translate-y-8 opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) hover:scale-110"
                />
                <div className="absolute inset-0 image-overlay"></div>
                
                <div className={`absolute top-4 left-4  px-4 py-2 rounded-full text-sm font-medium z-10 transition-all duration-300 ${
                  hoveredCard === card.id ? 'bg-white text-purple-500 scale-105' : 'bg-purple-500/90 text-white'
                }`}>
                  {card.category}
                </div>

                <button
                  onClick={() => handleLike(card.id)}
                  className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 z-10"
                  aria-label={`Like ${card.title}`}
                >
                  <Heart
                    size={18}
                    className={`transition-all duration-300 ${
                      likedCards.has(card.id) 
                        ? 'text-red-500 fill-red-500 scale-125' 
                        : 'text-white hover:text-red-300'
                    }`}
                  />
                </button>
              </div>

              <div className={`p-6 relative z-10 transition-colors duration-300 ${
                hoveredCard === card.id ? 'text-white' : 'text-gray-900'
              }`}>
                <h3 className="text-xl font-bold mb-3 leading-tight transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4 card-description">
                  {card.description}
                </p>

                <div className="flex items-center gap-2 mb-4 text-sm">
                  <User size={16} className="flex-shrink-0" />
                  <span className="author-name">{card.author}</span>
                  <Calendar size={14} className="ml-2 flex-shrink-0" />
                  <span className="text-xs">
                    {new Date(card.date).toLocaleDateString()}
                  </span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/40">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                      <Heart size={14} />
                      <span>{card.likes}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                      <Eye size={14} />
                      <span>{card.views}</span>
                    </div>
                    <div className="flex items-center gap-1 text-gray-300 text-sm">
                      <MessageCircle size={14} />
                      <span>{card.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 hover-overlay rounded-2xl transition-opacity duration-500 pointer-events-none ${
                hoveredCard === card.id ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CardGrid;