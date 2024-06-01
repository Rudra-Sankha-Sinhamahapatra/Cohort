interface props{
  name:string;
  className?:string;
}

export const AppName = ({name,className}:props) => {
  return (
    <div>
      <h1 className={className}>Welcome to {name}site</h1>
    </div>
  );
};
