interface SectionHeadingProps {
  title: string;
}
const SectionHeading = ({ title }: SectionHeadingProps) => {
  return (
    <h2 className="w-72 h-16 md:w-64 md:text-xl bg-primary shadow-tertiary-shadow shadow-secondary rounded-lg border-2 border-secondary flex justify-center items-center text-2xl font-bold">
      {title}
    </h2>
  );
};

export default SectionHeading;
