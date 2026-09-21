export type Project = {
  title: string;
  description: string;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
};

// Curated from public GitHub repos. Edit freely — add descriptions, demos,
// screenshots, and reorder. Set `featured: true` to highlight a project.
export const projects: Project[] = [
  {
    title: "UHS — Unified Health System",
    description:
      "A system to securely store and manage a person's complete health history in one place.",
    tags: ["Full-Stack", "Healthcare", "Systems"],
    repo: "https://github.com/apoorv-sh98/UHS",
    featured: true,
  },
  {
    title: "Language Model Comparison",
    description:
      "Benchmarks and compares language models for classifying and understanding customer reviews.",
    tags: ["NLP", "Machine Learning", "Jupyter"],
    repo: "https://github.com/apoorv-sh98/Language-model-comparison-for-customer-reviews",
    featured: true,
  },
  {
    title: "Image Segmentation Comparison",
    description:
      "Compares image-segmentation techniques and evaluates how they perform against each other.",
    tags: ["Computer Vision", "Machine Learning", "Jupyter"],
    repo: "https://github.com/apoorv-sh98/Image-segmentation-comparison",
  },
  {
    title: "PolyHunt",
    description:
      "Fits and selects the best-fit polynomial model for a dataset — 'hunting' for the right degree.",
    tags: ["Python", "Algorithms", "Regression"],
    repo: "https://github.com/apoorv-sh98/PolyHunt",
  },
  {
    title: "Sudoku Solver",
    description:
      "Solves any valid Sudoku puzzle using a backtracking search algorithm.",
    tags: ["Java", "Algorithms", "Backtracking"],
    repo: "https://github.com/apoorv-sh98/sudoku-solver",
  },
  {
    title: "Animated Lamp",
    description: "A 3D lamp modeled and animated from scratch in Blender.",
    tags: ["Blender", "3D", "Animation"],
    repo: "https://github.com/apoorv-sh98/animatedLamp",
  },
];
