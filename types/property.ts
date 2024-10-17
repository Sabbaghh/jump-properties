import { ObjectId } from "mongodb";
type property = {
  _id: string | ObjectId;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    city: string;
    street: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    weekly?: number;
    monthly?: number;
    nightly?: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};

export default property;
