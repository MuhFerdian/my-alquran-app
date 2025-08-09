type ProfileProps = {
  greeting: string;
  name: string;
  avatar: string;
};

function Profile({ greeting, name, avatar }: ProfileProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <p className="text-left text-base font-bold italic md:text-xl text-white">{greeting}</p>
        <p className="text-left text-base font-medium md:text-l text-white">{name}</p>
      </div>
      <img src={avatar} alt="Profile User" className="w-10 h-10" />
    </div>
  );
}

export default Profile;
