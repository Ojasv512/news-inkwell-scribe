import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, User } from "lucide-react";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  category: string;
  imageUrl?: string;
  featured?: boolean;
  onClick?: () => void;
}

const ArticleCard = ({
  title,
  excerpt,
  author,
  publishedAt,
  category,
  imageUrl,
  featured = false,
  onClick
}: ArticleCardProps) => {
  return (
    <div 
      className={`cursor-pointer hover:shadow-lg transition-shadow vintage-border aged-paper p-4 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onClick={onClick}
    >
      {/* Article header with category badge */}
      <div className="flex items-start justify-between mb-2">
        <Badge variant="secondary" className="uppercase text-xs font-bold bg-primary text-primary-foreground px-2 py-1">
          {category}
        </Badge>
        {featured && (
          <Badge variant="outline" className="uppercase text-xs font-bold vintage-border">
            Featured
          </Badge>
        )}
      </div>

      {imageUrl && (
        <div className={`relative overflow-hidden mb-3 vintage-border ${featured ? "h-64" : "h-32"}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
          />
        </div>
      )}
      
      <div className="space-y-3">
        <h3 className={`newspaper-header leading-tight hover:text-primary transition-colors ${
          featured ? "text-3xl" : "text-xl"
        }`}>
          {title}
        </h3>
        
        <div className="border-l-2 border-primary pl-3">
          <p className={`newspaper-body text-foreground ${
            featured ? "text-base" : "text-sm"
          }`}>
            {excerpt}
          </p>
        </div>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-dotted border-muted-foreground pt-2">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span className="font-medium uppercase tracking-wide">{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span className="uppercase tracking-wide">{publishedAt}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;