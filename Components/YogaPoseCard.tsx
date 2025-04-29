import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Pose } from "../types";

type CardProps = {
  pose: Pose;
};

export default function YogaPoseCard({ pose }: CardProps) {
  return (
    <Card className="w-[250px] overflow-hidden rounded-lg transition-all hover:shadow-lg">
      {/* Image Section */}
      <CardHeader className="p-0">
        <img
          src={pose.url_svg}
          alt={pose.english_name}
          className="w-full h-48 object-contain p-4"
          width={200}
          height={200}
        />
      </CardHeader>

      {/* Text Content */}
      <CardContent className="p-4 text-center">
        <h3 className="font-semibold text-lg">{pose.english_name}</h3>
        {pose.sanskrit_name && (
          <p className="text-sm text-muted-foreground mt-1">
            {pose.sanskrit_name}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
