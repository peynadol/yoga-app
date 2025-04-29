export type Pose = {
  id: number;
  category_name: string;
  english_name: string;
  sanskrit_name_adapted: string;
  sanskrit_name: string;
  translation_name: string;
  pose_description: string;
  pose_benefits: string;
  url_svg: string;
  url_png: string;
  url_svg_alt: string;
};

export type Category = {
  id: number;
  category_name: string;
  category_description: string;
  poses: Pose[];
};
