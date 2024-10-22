"use server";
import getSessionUser from "@/utils/getSessionUser";
import Property from "@/models/Property";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
async function addProperty(formData: FormData): Promise<void> {
  // Access the session
  const sessionUser = await getSessionUser(); // get the user id from the session
  const { userId } = sessionUser || {};

  if (!userId) {
    throw new Error("User ID is required not found");
  }
  // Access all values of amenities and images
  const amenities = formData.getAll("amenities") as string[];

  // Filtering and mapping images, ensuring they are File objects
  const images = formData
    .getAll("images")
    .filter((image): image is File => image instanceof File) // Type guard to filter only File objects
    .filter((image) => image.name !== "")
    .map((image) => image.name);

  const propertyData = {
    name: formData.get("name"),
    description: formData.get("description"),
    type: formData.get("type"),
    location: {
      street: formData.get("location.street"),
      city: formData.get("location.city"),
      state: formData.get("location.state"),
      zipcode: formData.get("location.zipcode"),
    },
    beds: formData.get("beds"),
    baths: formData.get("baths"),
    squareFeet: formData.get("square_feet"),
    amenities,
    rates: {
      weekly: formData.get("rates.weekly"),
      monthly: formData.get("rates.monthly"),
      nightly: formData.get("rates.nightly"),
    },
    seller_info: {
      name: formData.get("seller_info.name"),
      email: formData.get("seller_info.email"),
      phone: formData.get("seller_info.phone"),
    },
    owner: userId, // Attach the user ID from the session
    images, // Handle images correctly
  };

  const newProperty = new Property(propertyData);
  await newProperty.save();
  revalidatePath("/", "layout"); // Revalidate the home page
  redirect("/"); // Redirect to the home page
}

export default addProperty;
