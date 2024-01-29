
const MessageIcon = (props) => {
  return (
    <svg
      height="20px"
      width="20px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      enableBackground="new 0 0 64 64"
      className={`fill-current ${props.color}`}>
      <path
        d="m-22.5-213.2-1.9-1.9-17.6 17.6c-2.2 2.2-5.9 2.2-8.1 0L-67.7-215l-1.9 1.9 13.1 13.1-13.1 13.1 1.9 1.9 13.1-13.1 2.6 2.6c1.6 1.6 3.7 2.5 5.9 2.5s4.3-.9 5.9-2.5l2.6-2.6 13.1 13.1 1.9-1.9-13.1-13.1 13.2-13.2"
        transform="translate(78 232)"
        fill="currentColor"></path>
      <path
        d="M-26.2-181.6h-39.5c-2.3 0-4.2-1.9-4.2-4.2V-214c0-2.3 1.9-4.2 4.2-4.2h39.5c2.3 0 4.2 1.9 4.2 4.2v28.2c0 2.3-1.9 4.2-4.2 4.2zm-39.6-33.9c-.8 0-1.4.6-1.4 1.4v28.2c0 .8.6 1.4 1.4 1.4h39.5c.8 0 1.4-.6 1.4-1.4v-28.2c0-.8-.6-1.4-1.4-1.4h-39.5z"
        transform="translate(78 232)"
        fill="currentColor"></path>
    </svg>
  );
};
export default MessageIcon;
