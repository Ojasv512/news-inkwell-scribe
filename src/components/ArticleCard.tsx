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
    <Card 
      className={`cursor-pointer hover:shadow-lg transition-shadow ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onClick={onClick}
    >
      {imageUrl && (
        <div className={`relative overflow-hidden ${featured ? "h-64" : "h-48"}`}>
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary">{category}</Badge>
          </div>
        </div>
      )}
      
      <CardHeader className="pb-2">
        <h3 className={`font-bold leading-tight hover:text-primary transition-colors ${
          featured ? "text-2xl" : "text-lg"
        }`}>
          {title}
        </h3>
      </CardHeader>
      
      <CardContent className="pt-0">
        <p className={`text-muted-foreground mb-4 ${
          featured ? "text-base" : "text-sm"
        }`}>
          {excerpt}
        </p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-3 w-3" />
              <span>{publishedAt}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;