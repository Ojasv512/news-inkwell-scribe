import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { TrendingUp, Clock, User } from "lucide-react";
import ArticleCard from "@/components/ArticleCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  // Sample news data
  const featuredArticle = {
    id: 1,
    title: "Breaking: Major Climate Agreement Reached at International Summit",
    excerpt: "World leaders unite on unprecedented environmental measures that could reshape global climate policy for decades to come. The comprehensive agreement includes binding targets for carbon reduction and substantial funding for developing nations.",
    author: "Sarah Johnson",
    publishedAt: "2 hours ago",
    category: "Politics",
    imageUrl: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&h=600&fit=crop",
  };

  const articles = [
    {
      id: 2,
      title: "Tech Giants Face New Regulatory Challenges in Europe",
      excerpt: "The European Union proposes stricter data protection laws that could significantly impact how technology companies operate across the continent.",
      author: "Michael Chen",
      publishedAt: "4 hours ago",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Olympic Preparations Intensify as Games Approach",
      excerpt: "Athletes from around the world make final preparations as the Olympic Games draw near, with new safety protocols in place.",
      author: "Emma Rodriguez",
      publishedAt: "6 hours ago",
      category: "Sports",
      imageUrl: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Economic Markets Show Signs of Recovery",
      excerpt: "Global markets demonstrate resilience as investors show renewed confidence in emerging technologies and sustainable energy sectors.",
      author: "David Kumar",
      publishedAt: "8 hours ago",
      category: "Business",
      imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=300&fit=crop",
    },
    {
      id: 5,
      title: "Revolutionary Medical Breakthrough in Cancer Treatment",
      excerpt: "Researchers announce promising results from clinical trials of a new immunotherapy approach that could transform cancer care.",
      author: "Dr. Lisa Park",
      publishedAt: "12 hours ago",
      category: "Health",
      imageUrl: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
    },
    {
      id: 6,
      title: "Artificial Intelligence Advances in Healthcare",
      excerpt: "New AI systems demonstrate remarkable accuracy in early disease detection, potentially saving thousands of lives annually.",
      author: "Robert Taylor",
      publishedAt: "1 day ago",
      category: "Technology",
      imageUrl: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop",
    },
  ];

  const trendingTopics = ["Climate Change", "AI Ethics", "Olympic Games", "Space Exploration", "Healthcare Innovation"];

  return (
    <div className="min-h-screen bg-background aged-paper">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breaking News Banner */}
        <div className="vintage-border bg-destructive text-destructive-foreground px-4 py-3 mb-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="border-2 border-destructive-foreground px-2 py-1">
              <span className="text-xs font-bold uppercase tracking-widest">BREAKING NEWS</span>
            </div>
            <p className="text-sm font-bold newspaper-body text-center">
              International climate summit reaches historic agreement - Full coverage inside
            </p>
          </div>
        </div>

        {/* Main News Section */}
        <section className="mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Featured Article - Newspaper style */}
            <div className="lg:col-span-3">
              <div className="vintage-border aged-paper p-6">
                <div className="flex items-center justify-between mb-4 border-b-2 border-double border-primary pb-2">
                  <Badge variant="secondary" className="uppercase text-xs font-bold bg-primary text-primary-foreground">
                    {featuredArticle.category}
                  </Badge>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    {featuredArticle.publishedAt}
                  </div>
                </div>
                
                <h1 className="newspaper-header text-4xl md:text-6xl leading-tight mb-4 text-primary">
                  {featuredArticle.title}
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="newspaper-column" style={{ columnCount: 1 }}>
                    <p className="newspaper-body text-lg leading-relaxed mb-4 first-letter:text-6xl first-letter:font-bold first-letter:mr-2 first-letter:float-left first-letter:leading-none">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground border-t border-dotted border-muted-foreground pt-3">
                      <span className="font-bold uppercase tracking-wide">By {featuredArticle.author}</span>
                      <span className="italic">Herald Staff Writer</span>
                    </div>
                  </div>
                  
                  {featuredArticle.imageUrl && (
                    <div className="vintage-border">
                      <img
                        src={featuredArticle.imageUrl}
                        alt={featuredArticle.title}
                        className="w-full h-64 object-cover grayscale"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar with Trending & Info */}
            <div className="space-y-6">
              {/* Trending Topics */}
              <div className="vintage-border aged-paper p-4">
                <div className="border-b-2 border-double border-primary pb-2 mb-4">
                  <h2 className="newspaper-header text-xl text-primary flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    TRENDING NOW
                  </h2>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={topic}
                      className="flex items-start space-x-3 py-2 border-b border-dotted border-muted-foreground last:border-0 cursor-pointer hover:bg-muted/50 transition-colors"
                    >
                      <span className="text-2xl font-bold text-primary newspaper-header min-w-[2rem]">
                        {index + 1}
                      </span>
                      <span className="text-sm font-bold uppercase tracking-wide newspaper-body">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weather & Info Box */}
              <div className="vintage-border aged-paper p-4">
                <h3 className="newspaper-header text-lg border-b-2 border-double border-primary pb-2 mb-4">TODAY'S WEATHER</h3>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">72°F</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">Partly Cloudy</div>
                  <div className="text-xs text-muted-foreground mt-2">High: 78° | Low: 65°</div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="vintage-border aged-paper p-4">
                <h3 className="newspaper-header text-lg border-b-2 border-double border-primary pb-2 mb-4">SUBSCRIBE</h3>
                <p className="text-sm newspaper-body mb-4">
                  Receive our daily edition delivered to your doorstep.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your address"
                    className="w-full px-3 py-2 text-sm vintage-border focus:outline-none focus:ring-2 focus:ring-primary bg-background"
                  />
                  <Button className="w-full vintage-border newspaper-header text-xs uppercase tracking-widest" size="sm">
                    Subscribe Today
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newspaper divider */}
        <div className="border-t-4 border-double border-primary my-8">
          <div className="bg-primary text-primary-foreground text-center py-2">
            <span className="newspaper-header text-sm uppercase tracking-widest">Latest News & Reports</span>
          </div>
        </div>

        {/* Latest News in newspaper columns */}
        <section>
          <div className="vintage-border aged-paper p-6">
            <h2 className="newspaper-header text-4xl text-primary text-center border-b-2 border-double border-primary pb-4 mb-8">
              DAILY HEADLINES
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <ArticleCard
                  key={article.id}
                  {...article}
                  onClick={() => console.log("Navigate to article", article.id)}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg" className="vintage-border newspaper-header uppercase tracking-widest">
              Read More Stories
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
