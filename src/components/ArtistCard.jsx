import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, UserPlus } from 'lucide-react';

export default function ArtistCard({ artist }) {
  const [isFollowing, setIsFollowing] = React.useState(false);

  return (
    <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition group">
      <Link to={`/artist/${artist.id}`} className="inline-block mb-4">
        <img src={artist.avatar} alt={artist.name} className="w-24 h-24 rounded-full object-cover group-hover:scale-105 transition mx-auto" />
      </Link>
      <Link to={`/artist/${artist.id}`} className="font-serif text-lg text-dark hover:text-terracotta transition block">{artist.name}</Link>
      <p className="text-xs text-soft-brown font-semibold mt-1 uppercase">{artist.specialty}</p>
      <div className="flex items-center justify-center gap-1 text-xs text-dark opacity-70 mt-2"><MapPin size={14} />{artist.location}</div>
      <p className="text-sm text-dark opacity-70 mt-3 line-clamp-2">{artist.bio}</p>
      <div className="flex justify-around mt-4 py-3 border-y border-beige text-sm">
        <div><p className="font-semibold text-dark">{artist.products}</p><p className="text-xs text-dark opacity-70">Products</p></div>
        <div><p className="font-semibold text-dark">{artist.followers}</p><p className="text-xs text-dark opacity-70">Followers</p></div>
      </div>
      <button onClick={() => setIsFollowing(!isFollowing)} className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold transition flex items-center justify-center gap-2 ${isFollowing ? 'bg-beige text-dark' : 'bg-terracotta text-white hover:bg-opacity-90'}` }>
        <UserPlus size={16} />
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
}
