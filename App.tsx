import { Pose, Category } from "./types";
import { getAllCategories } from "./api/categories";
import { useState, useEffect } from "react";
import Card from "./Components/Card";

function App() {
  const [poses, setPoses] = useState<Pose[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const allCategories: Category[] = await getAllCategories();
      const allPoses: Pose[] = allCategories.flatMap(
        (category) => category.poses
      );
      const uniquePoses = Array.from(
        new Map(allPoses.map((pose) => [pose.id, pose])).values()
      );
      setPoses(uniquePoses);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pose-list">
        {poses.map((pose) => (
          <Card key={pose.id} pose={pose} />
        ))}
      </div>
    </>
  );
}

export default App;
