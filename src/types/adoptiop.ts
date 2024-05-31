export type TAdoptionRequestAdmin = {
  id: string;
  adoptionStatus: string;
  user: {
    username: string;
    avatarURL: string;
    email: string;
    gender: string;
    phone: string;
    address: string;
  };
  pet: {
    name: string;
    photos: string;
    location: string;
  };
};

export type TAdoptionRequestUser = {
  id: string;
  adoptionStatus: string;
  pet: {
    name: string;
    photos: string;
    location: string;
    gender: string;
    age: number;
  };
};
