interface MenuItemProps {
  link: string;
  text: string;
  event?: () => void;
}

const MenuItem = ({ link, text, event }: MenuItemProps) => {
  return (
    <a
      onClick={event}
      href={link}
      className="text-black font-medium transition-all hover:text-secondary relative before:absolute before:-bottom-3 before:right-0 before:w-0 before:h-[2px] before:bg-secondary hover:before:w-full before:transition-all">
      {text}
    </a>
  );
};

export default MenuItem;
