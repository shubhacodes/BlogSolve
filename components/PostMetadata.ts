export interface PostMetadata {
  title: string;
  subtitle: string;
  date: string;
  topic: string; // Ensure this matches the property in the markdown frontmatter
  month:string;
  slug: string;
}