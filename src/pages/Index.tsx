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
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breaking News Banner */}
        <div className="bg-destructive text-destructive-foreground px-4 py-2 rounded-md mb-8">
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-destructive-foreground text-destructive-foreground">
              BREAKING
            </Badge>
            <p className="text-sm font-medium">
              International climate summit reaches historic agreement - Full coverage inside
            </p>
          </div>
        </div>

        {/* Hero Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Featured Article */}
            <div className="lg:col-span-2">
              <ArticleCard
                {...featuredArticle}
                featured
                onClick={() => console.log("Navigate to article", featuredArticle.id)}
              />
            </div>

            {/* Trending Topics */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <h2 className="text-xl font-bold">Trending Now</h2>
                </div>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div
                      key={topic}
                      className="flex items-center space-x-3 p-3 hover:bg-muted rounded-md cursor-pointer transition-colors"
                    >
                      <span className="text-2xl font-bold text-muted-foreground">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-muted p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-2">Stay Informed</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get our daily newsletter with the most important stories.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <Button className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator className="mb-12" />

        {/* Latest News */}
        <section>
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <ArticleCard
                key={article.id}
                {...article}
                onClick={() => console.log("Navigate to article", article.id)}
              />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
